package com.fsse2309.lab_b02.entity;

import com.fsse2309.lab_b02.data.domainObject.Person.CreatePersonData;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class PersonEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NonNull
  private String lastName;

  @NonNull
  private String firstName;

  @NonNull
  @Column(unique = true)
  private String hkid;

  private String courseId;
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
