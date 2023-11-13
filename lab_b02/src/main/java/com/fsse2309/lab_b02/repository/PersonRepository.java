package com.fsse2309.lab_b02.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.fsse2309.lab_b02.entity.PersonEntity;

public interface PersonRepository extends JpaRepository<PersonEntity, Long> {

  // @Query(value = "SELECT * FROM person WHERE hkid = :hkid", nativeQuery = true)
  Optional<PersonEntity> findByHkid(@Param("hkid") String hkid);

  // @Query(
  //     value = "SELECT p FROM PersonEntity p, CourseEntity c WHERE c.teacher.id = p.hkid AND c IN elements(p.courseJoining)")
  // List<PersonEntity> findStudentsOfCoursesTaughtByTeacher();
}
