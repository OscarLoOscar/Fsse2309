package com.fsse2309.lab_b02.data.dto.Course;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fsse2309.lab_b02.data.dto.Person.PersonDetailRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CourseDetailResponseDto {
  double price;

  @JsonProperty("teacher")
  PersonDetailRespDto teacher;

  @JsonProperty("students")
  List<PersonDetailRespDto> students;

  @JsonProperty("course_id")
  String courseId;

  @JsonProperty("course_name")
  String courseName;

}
