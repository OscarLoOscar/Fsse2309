package com.fsse2309.lab_b02.infra;

import java.util.ArrayList;
import java.util.List;
import com.fsse2309.lab_b02.data.domainObject.Course.CourseDetailData;
import com.fsse2309.lab_b02.data.domainObject.Course.CreateCourseData;
import com.fsse2309.lab_b02.data.dto.Course.CourseDetailResponseDto;
import com.fsse2309.lab_b02.data.dto.Course.CreateCourseRequestDto;
import com.fsse2309.lab_b02.entity.CourseEntity;

public class CourseMapper {

  public static CreateCourseData map(
      CreateCourseRequestDto createCourseRequestDto) {
    return CreateCourseData.builder()//
        .courseId(createCourseRequestDto.getCourseId())//
        .courseName(createCourseRequestDto.getCourseName())//
        .price(createCourseRequestDto.getPrice())//
        .teacherHkid(createCourseRequestDto.getTeacherHkid())//
        .build();
  }

  public static CourseEntity map(CreateCourseData createCourseData) {
    return CourseEntity.builder()//
        .courseId(createCourseData.getCourseId())//
        .courseName(createCourseData.getCourseName())//
        .price(createCourseData.getPrice())//
        .teacherHkid(createCourseData.getTeacherHkid())//
        .build();
  }

  public static CourseDetailData map(CourseEntity courseEntity) {
    return CourseDetailData.builder()//
        .courseId(courseEntity.getCourseId())//
        .courseName(courseEntity.getCourseName())//
        .price(courseEntity.getPrice())//
        .teacherHkid(courseEntity.getTeacherHkid())//
        .build();
  }

  public static CourseDetailResponseDto map(CourseDetailData courseDetailData) {
    return CourseDetailResponseDto.builder()//
        .courseId(courseDetailData.getCourseId())//
        .courseName(courseDetailData.getCourseName())//
        .price(courseDetailData.getPrice())//
        .build();
  }


  public static List<CourseDetailResponseDto> map(List<CourseEntity> list) {
    List<CourseDetailResponseDto> response = new ArrayList<>();
    for (CourseEntity courseEntity : list) {

      CourseDetailResponseDto output = CourseDetailResponseDto.builder()//
          .courseId(courseEntity.getCourseId())//
          .courseName(courseEntity.getCourseName())//
          .price(courseEntity.getPrice())//
          // .teacher(modelMapper.map(list, CreatePersonResqDto.class))//
          // .students(null)//
          .build();
      response.add(output);
    }
    return response;
  }
}
