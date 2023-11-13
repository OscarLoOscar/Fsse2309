package com.fsse2309.lab_b02.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.fsse2309.lab_b02.entity.CourseEntity;
import java.util.List;


public interface CourseRepository extends JpaRepository<CourseEntity, Long> {
  Optional<CourseEntity> findByCourseId(String courseId);

  Optional<CourseEntity> findByCourseIdAndTeacher_Hkid(String courseId,
      String hkid);

}
