package com.fsse2309.lab_b02.data.domainObject.Course;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourseDetailData {
  String courseId;
  String courseName;
  double price;
  String teacherHkid;

}
