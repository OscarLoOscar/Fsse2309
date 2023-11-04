package com.bsse2309.b01_inclass.model;

public class PersonMapper {
  public static PersonDTO map(Person person) {
    return PersonDTO.builder()//
        .last_name(person.getFirstName())//
        .first_name(person.getLastName())//
        .hkid_number(person.getHkid())//
        .build();
  }

}
