package com.fsse2309.lab_b02.service.CourseService;

import java.util.List;
import com.fsse2309.lab_b02.data.dto.Course.CourseDetailResponseDto;
import com.fsse2309.lab_b02.data.dto.Course.CreateCourseRequestDto;

public interface CourseService {

  CourseDetailResponseDto createCourse(CreateCourseRequestDto courseRequestDto);

  List<CourseDetailResponseDto> getAllCourses();

  CourseDetailResponseDto updateCourse(CreateCourseRequestDto courseRequestDto );

  void deleteCourse(String course_id);

  void addStudent(String courseId, String hkid);

  void removeStudent(String courseId, String hkid);

  CourseDetailResponseDto getCourses(String courseId);

}
