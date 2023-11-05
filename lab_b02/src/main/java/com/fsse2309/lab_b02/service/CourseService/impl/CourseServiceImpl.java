package com.fsse2309.lab_b02.service.CourseService.impl;

import java.util.ArrayList;
import java.util.List;
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
    CreateCourseData reateCourseData = CourseMapper.map(courseRequestDto);
    courseRepository.save(CourseMapper.map(reateCourseData));
    return CourseDetailResponseDto.builder()//
        .courseId(courseRequestDto.getCourseId())//
        .courseName(courseRequestDto.getCourseName())//
        .price(courseRequestDto.getPrice())//
        .build();
  }

  @Override
  public List<CourseDetailResponseDto> getAllCourses() {
    List<CourseDetailResponseDto> response = new ArrayList<>();
    CourseDetailResponseDto courseDetail = new CourseDetailResponseDto();

    PersonEntity teachEntity = new PersonEntity();
    for (CourseEntity courseEntity : courseRepository.findAll()) {
      for (PersonEntity personEntity : personService.getAllEntities()) {
        if (courseEntity.getTeacherHkid().equals(personEntity.getHkid())) {
          courseDetail = CourseMapper.map2(courseEntity);
          teachEntity = personEntity;
          courseDetail
              .setTeacher(PeopleMapper.map(PeopleMapper.map(teachEntity)));
          response.add(courseDetail);
        }
      }
    }
    return response;
  }

  @Override
  public CourseDetailResponseDto updateCourse(
      CreateCourseRequestDto courseRequestDto) {
    CourseDetailData courseDetailData = new CourseDetailData();
    for (CourseEntity entity : courseRepository.findAll()) {
      if (courseRequestDto.getCourseId().equals(entity.getCourseId())) {
        entity.setCourseName(courseRequestDto.getCourseName());
        entity.setPrice(courseRequestDto.getPrice());
        entity.setTeacherHkid(courseRequestDto.getTeacherHkid());
        // entity.setCourseId(courseRequestDto.getCourseId());
      }
      courseRepository.save(entity);
      courseDetailData = CourseMapper.map(entity);
    }
    return CourseMapper.map(courseDetailData);
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
    PersonEntity addedPerson = personService.getPersonEntityByHkid(hkid);
    if (hkid.equals(addedPerson.getHkid())) {
      addedPerson.setCourseId(courseId);
    }
    personService.save(addedPerson);
  }


  @Override
  public void removeStudent(String courseId, String hkid) {
    PersonEntity deletePerson = personService.getPersonEntityByHkid(hkid);
    if (hkid.equals(deletePerson.getHkid())) {
      // personService.delete(hkid);
      deletePerson.setCourseId(null);
    }
    personService.save(deletePerson);
  }

  @Override
  public CourseDetailResponseDto getCourses(String courseId) {
    CourseDetailResponseDto responseDto = new CourseDetailResponseDto();
    List<PersonDetailRespDto> studentsList = new ArrayList<>();
    PersonEntity reference = new PersonEntity();
    for (CourseEntity courseEntity : courseRepository.findAll()) {
      for (PersonEntity personEntity : personService.getAllEntities()) {
        if (courseId.equals(courseEntity.getCourseId())
            && courseEntity.getTeacherHkid().equals(personEntity.getHkid())) {
          reference = personEntity;
        }
        if (courseId.equals(courseEntity.getCourseId())
            && courseId.equals(personEntity.getCourseId())) {
          log.info("Checking : " + reference.toString());
          studentsList.add(PeopleMapper.map(PeopleMapper.map(personEntity)));
          log.info("TEST : " + studentsList.toString());
          responseDto = CourseDetailResponseDto.builder()//
              .courseId(courseEntity.getCourseId())//
              .courseName(courseEntity.getCourseName())//
              .price(courseEntity.getPrice())//
              // .teacher(modelMapper.map(PeopleMapper.map(personEntity),
              // PersonDetailRespDto.class))//
              .teacher(PeopleMapper.map(PeopleMapper.map(reference)))//
              .students(studentsList)//
              .build();
          log.info("TEST 2 : " + responseDto.toString());
        }
      }
    }
    return responseDto;
  }
}
