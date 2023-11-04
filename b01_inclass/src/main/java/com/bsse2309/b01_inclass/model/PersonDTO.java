package com.bsse2309.b01_inclass.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class PersonDTO {
  String last_name;
  String first_name;
  String hkid_number;

}
