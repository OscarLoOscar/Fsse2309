package com.fsse2309.lab_b02.entity;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "course")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CourseEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;

  @Column(name = "course_id")
  String courseId;

  @Column(name = "course_name", nullable = false)
  String courseName;

  @Column(nullable = false)
  double price;

  @ManyToOne
  @JoinColumn(name = "teacher_id", nullable = false)
  private PersonEntity teacher;

  @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JoinTable(name = "course_student",
      joinColumns = @JoinColumn(name = "course_id", nullable = false), // 自己primary key
      inverseJoinColumns = @JoinColumn(name = "student_id", nullable = false))
  @Builder.Default
  private List<PersonEntity> students = new ArrayList<>();
}
