package com.fsse2309.lab_b02.data.domainObject.Person;

import com.fsse2309.lab_b02.data.dto.Person.CreatePersonRequestDto;
import com.fsse2309.lab_b02.entity.PersonEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

// Domaine Object
@Getter
@Setter
@AllArgsConstructor
@Builder
@ToString
@EqualsAndHashCode

public class CreatePersonData {
  private String lastName;

  private String firstName;

  private String hkid;

  // lv2
  public CreatePersonData(PersonEntity entity) {
    this.lastName = entity.getLastName();
    this.firstName = entity.getFirstName();
    this.hkid = entity.getHkid();
  }

  public CreatePersonData(CreatePersonRequestDto dto) {
    this.firstName = dto.getFirstName();
    this.lastName = dto.getLastName();
    this.hkid = dto.getHkid();
  }

}
