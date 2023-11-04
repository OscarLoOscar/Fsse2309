package com.fsse2309.lab_b02.infra;

import com.fsse2309.lab_b02.data.domainObject.Person.CreatePersonData;
import com.fsse2309.lab_b02.data.domainObject.Person.CreatedPersonData;
import com.fsse2309.lab_b02.data.dto.Person.CreatePersonRequestDto;
import com.fsse2309.lab_b02.data.dto.Person.PersonDetailRespDto;
import com.fsse2309.lab_b02.entity.PersonEntity;

public class PeopleMapper {

  public static CreatePersonData map(
      CreatePersonRequestDto createPersonRequestDto) {
    return CreatePersonData.builder()//
        .firstName(createPersonRequestDto.getFirstName())//
        .lastName(createPersonRequestDto.getLastName())//
        .hkid(createPersonRequestDto.getHkid())//
        .build();
  }

  public static PersonEntity map(CreatePersonData createdPersonData) {
    return PersonEntity.builder()//
        .firstName(createdPersonData.getFirstName())//
        .lastName(createdPersonData.getLastName())//
        .hkid(createdPersonData.getHkid())//
        .build();
  }

  public static CreatedPersonData map(PersonEntity entity) {
    return CreatedPersonData.builder()//
        .firstName(entity.getFirstName())//
        .lastName(entity.getLastName())//
        .hkid(entity.getHkid())//
        .build();
  }

  public static PersonDetailRespDto map(CreatedPersonData createdPersonData) {
    return PersonDetailRespDto.builder()//
        .firstName(createdPersonData.getFirstName())//
        .lastName(createdPersonData.getLastName())//
        .hkid(createdPersonData.getHkid())//
        .build();
  }

}
