package com.fsse2309.lab_b02.data.dto.Person;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

// no annotation in Dto , just DOJO only
@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode

public class CreatePersonRequestDto {
  @JsonProperty("last_name")
  private String lastName;
  
  @JsonProperty("first_name")
  private String firstName;

  @JsonProperty("hkid_number")
  private String hkid;

}
