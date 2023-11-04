package com.fsse2309.lab_b02.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fsse2309.lab_b02.entity.CourseEntity;

public interface CourseRepository extends JpaRepository<CourseEntity, Long> {

  CourseEntity findByCourseId(String courseId);
}
