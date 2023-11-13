package com.fsse2309.lab_b02.entity;

import java.util.List;
import com.fsse2309.lab_b02.data.domainObject.Person.CreatePersonData;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "person")
@Getter
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
@ToString
public class PersonEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NonNull
  @Column(name = "last_name")
  private String lastName;

  @NonNull
  @Column(name = "first_name")
  private String firstName;

  @NonNull
  @Column(name = "hkid_number", unique = true)
  private String hkid;

  @OneToMany(mappedBy = "teacher")
  private List<CourseEntity> courseTeaching;

  @ManyToMany
  private List<CourseEntity> courseJoining;
  // public PersonEntity(String lastName, String firstName, String hkid) {
  // this.firstName = firstName;
  // this.lastName = lastName;
  // this.hkid = hkid;
  // }

  // lv2
  public PersonEntity(CreatePersonData data) {
    this.firstName = data.getFirstName();
    this.lastName = data.getLastName();
    this.hkid = data.getHkid();
  }


}
