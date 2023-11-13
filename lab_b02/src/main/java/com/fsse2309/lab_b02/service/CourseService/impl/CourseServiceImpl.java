package com.fsse2309.lab_b02.service.CourseService.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fsse2309.lab_b02.data.domainObject.Course.CourseDetailData;
import com.fsse2309.lab_b02.data.domainObject.Course.CreateCourseData;
import com.fsse2309.lab_b02.data.dto.Course.CourseDetailResponseDto;
import com.fsse2309.lab_b02.data.dto.Course.CreateCourseRequestDto;
import com.fsse2309.lab_b02.data.dto.Person.PersonDetailRespDto;
import com.fsse2309.lab_b02.entity.CourseEntity;
import com.fsse2309.lab_b02.entity.PersonEntity;
import com.fsse2309.lab_b02.exception.CourseExistedException;
import com.fsse2309.lab_b02.exception.CourseNotFoundException;
import com.fsse2309.lab_b02.exception.InvalidPriceException;
import com.fsse2309.lab_b02.exception.PersonNotFoundException;
import com.fsse2309.lab_b02.infra.CourseMapper;
import com.fsse2309.lab_b02.infra.PeopleMapper;
import com.fsse2309.lab_b02.repository.CourseRepository;
import com.fsse2309.lab_b02.service.CourseService.CourseService;
import com.fsse2309.lab_b02.service.PersonService.PersonService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CourseServiceImpl implements CourseService {
  @Autowired
  PersonService personService;

  @Autowired
  CourseRepository courseRepository;

  @Autowired
  ModelMapper modelMapper;

  @Override
  public CourseDetailResponseDto createCourse(
      CreateCourseRequestDto courseRequestDto) {
    try {
      if (isCourseExisted(courseRequestDto.getCourseId())) {
        throw new CourseNotFoundException();
      }
      if (isPriceValid(BigDecimal.valueOf(courseRequestDto.getPrice()))) {
        throw new InvalidPriceException();
      }

      CreateCourseData reateCourseData = CourseMapper.map(courseRequestDto);
      PersonEntity teacher = personService
          .getPersonEntityByHkid(courseRequestDto.getTeacherHkid()).get();
      CourseEntity course = CourseMapper.map(reateCourseData);
      course.setTeacher(teacher);
      courseRepository.save(course);

      return CourseDetailResponseDto.builder()//
          .courseId(courseRequestDto.getCourseId())//
          .courseName(courseRequestDto.getCourseName())//
          .price(courseRequestDto.getPrice())//
          .build();
    } catch (PersonNotFoundException e) {
      log.info("Create Course : Teacher Not found");
      throw e;
    } catch (CourseExistedException e) {
      log.info("Create Course : Course existed");
      throw e;
    } catch (InvalidPriceException e) {
      log.info("Create Course : Invalid price");
      throw e;

    }
  }

  @Override
  public List<CourseDetailResponseDto> getAllCourses() {
    List<CourseDetailResponseDto> response = new ArrayList<>();
    for (CourseEntity courseEntity : courseRepository.findAll()) {
      CourseDetailResponseDto courseDetail = CourseMapper.map2(courseEntity);

      // get teacher
      PersonDetailRespDto teacherDetail =
          PeopleMapper.map(PeopleMapper.map(courseEntity.getTeacher()));
      courseDetail.setTeacher(teacherDetail);
      // get students
      List<PersonDetailRespDto> studentsDetail = new ArrayList<>();
      for (PersonEntity student : courseEntity.getStudents()) {
        PersonDetailRespDto studentDetail =
            PeopleMapper.map(PeopleMapper.map(student));

        // 检查是否已经包含该学生
        if (!studentsDetail.contains(studentDetail)) {
          studentsDetail.add(studentDetail);
        }
      }

      courseDetail.setStudents(studentsDetail);
      response.add(courseDetail);
    }

    return response;
  }

  @Override
  public CourseDetailResponseDto updateCourse(
      CreateCourseRequestDto courseRequestDto) {
    Optional<CourseEntity> course =
        courseRepository.findByCourseId(courseRequestDto.getCourseId());
    if (course.isPresent()) {
      course.get().setCourseName(courseRequestDto.getCourseName());
      course.get().setPrice(courseRequestDto.getPrice());
      // find teacher
      PersonEntity teacher = personService
          .getPersonEntityByHkid(courseRequestDto.getTeacherHkid()).get();
      course.get().setTeacher(teacher);
      courseRepository.save(course.get());
      return CourseMapper.map2(course.get());
    } else {
      throw new CourseNotFoundException();
    }
  }

  @Override
  public void deleteCourse(String course_id) {
    for (CourseEntity entity : courseRepository.findAll()) {
      if (course_id.equals(entity.getCourseId())) {
        courseRepository.delete(entity);
      }
    }
  }

  @Override
  public void addStudent(String courseId, String hkid) {
    // find course
    CourseEntity course = courseRepository.findByCourseId(courseId).get();
    // find student
    PersonEntity student = personService.getPersonEntityByHkid(hkid).get();

    course.getStudents().add(student);
    courseRepository.save(course);
  }


  @Override
  public void removeStudent(String courseId, String hkid) {
    // find course
    Optional<CourseEntity> course = courseRepository.findByCourseId(courseId);
    if (course.isPresent()) {
      // find student
      PersonEntity student = personService.getPersonEntityByHkid(hkid).get();

      course.get().getStudents().remove(student);
      courseRepository.save(course.get());
    } else {
      throw new CourseNotFoundException();
    }
  }

  @Override
  public CourseDetailResponseDto getCoursesByCourseId(String courseId) {
    try {
      List<CourseDetailResponseDto> courseList = this.getAllCourses();
      return courseList.stream()//
          .filter(e -> e.getCourseId().equals(courseId))//
          .findFirst()//
          .orElseThrow(() -> {
            log.error("Course not found for courseId : " + courseId);
            return new CourseNotFoundException(
                "Course not found for courseId : " + courseId);
          });
    } catch (CourseNotFoundException e) {
      log.info("Course Not exist");
      throw e;
    }

  }

  public boolean isCourseExisted(String courseId) {
    if (courseRepository.findByCourseId(courseId).isPresent()) {
      return true;
    } else {
      throw new CourseNotFoundException();
    }
  }

  public boolean isPriceValid(BigDecimal price) {
    return price.compareTo(BigDecimal.ZERO) < 0;
  }
}
