package com.bsse2309.b01_inclass.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class Person {
  
  //用JsonProperty，令return 出去既野改名
  @JsonProperty("first_name")
  private String lastName;

  @JsonProperty("last_name")
  private String firstName;

  @JsonProperty("hkid_number")
  private String hkid;

}
