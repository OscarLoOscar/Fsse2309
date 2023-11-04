package com.fsse2309.lab_b02.data.domainObject.Person;

import com.fsse2309.lab_b02.entity.PersonEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
@EqualsAndHashCode
public class CreatedPersonData {
  private String lastName;
  private String firstName;
  private String hkid;


  public CreatedPersonData(PersonEntity entity) {
    this.lastName = entity.getLastName();
    this.firstName = entity.getFirstName();
    this.hkid = entity.getHkid();
  }
}
