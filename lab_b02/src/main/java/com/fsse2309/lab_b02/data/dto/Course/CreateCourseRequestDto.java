package com.fsse2309.lab_b02.data.dto.Course;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class CreateCourseRequestDto {
  @JsonProperty("course_id")
  String courseId;

  @JsonProperty("course_name")
  String courseName;

  Double price;

  @JsonProperty("teacher_hkid")
  String teacherHkid;

}
