package com.fsse2309.lab_b02.data.dto.Person;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fsse2309.lab_b02.data.domainObject.Person.CreatedPersonData;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@ToString
public class PersonDetailRespDto {
  @JsonProperty("last_name")
  private String lastName;

  @JsonProperty("first_name")
  private String firstName;

  @JsonProperty("hkid_number")
  private String hkid;

  public PersonDetailRespDto(CreatedPersonData createdPersonData){
    this.lastName=createdPersonData.getLastName();
    this.firstName=createdPersonData.getFirstName();
    this.hkid=createdPersonData.getHkid();
  }
}
