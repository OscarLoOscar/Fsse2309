package com.fsse2309.lab_b02.api;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fsse2309.lab_b02.data.dto.Course.CourseDetailResponseDto;
import com.fsse2309.lab_b02.data.dto.Course.CreateCourseRequestDto;
import com.fsse2309.lab_b02.service.CourseService.CourseService;

@RestController
@RequestMapping("/ex3")
public class Exercise3 {

  @Autowired
  private CourseService courseService;

  // @Autowired
  // public Exercise3(CourseService courseService) {
  // this.courseService = courseService;
  // }

  @PostMapping("/createCourse")
  public CourseDetailResponseDto createCourse(
      @RequestBody CreateCourseRequestDto courseRequestDto) {
    return courseService.createCourse(courseRequestDto);
  }


  @GetMapping("/getAllCourses")
  public List<CourseDetailResponseDto> getAllCourses() {
    return courseService.getAllCourses();
  }

  @GetMapping("/getCoursesByCourseId/{course_id}")
  public CourseDetailResponseDto getAllCourses(@PathVariable(name = "course_id") String courseId) {
    return courseService.getCourses(courseId);
  }

  @PutMapping("/updateCourse")
  public CourseDetailResponseDto updateCourse(
      @RequestBody CreateCourseRequestDto courseRequestDto) {
    return courseService.updateCourse(courseRequestDto);
  }

  @DeleteMapping("/deleteCourse/{course_id}")
  public void deleteCourse(@PathVariable String course_id) {
    courseService.deleteCourse(course_id);
  }

  @PatchMapping("/course/{course_id}/add-student/{person_hkid}")
  public void addStudent(@PathVariable(name = "course_id") String courseId,
      @PathVariable(name = "person_hkid") String hkid) {
    courseService.addStudent(courseId, hkid);
  }

  @DeleteMapping("/course/{course_id}/remove-student/{person_hkid}")
  public void removeStudent(@PathVariable(name = "course_id") String courseId,
      @PathVariable(name = "person_hkid") String hkid) {
    courseService.removeStudent(courseId, hkid);
  }
}
