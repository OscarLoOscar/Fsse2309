package com.fsse2309.lab_b02.api;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.fsse2309.lab_b02.data.dto.Person.CreatePersonRequestDto;
import com.fsse2309.lab_b02.data.dto.Person.PersonDetailRespDto;
import com.fsse2309.lab_b02.service.PersonService.PersonService;

@RestController
@RequestMapping("/b01")
public class LabB01Api {
  // constructor injection
  private PersonService personService;

  @Autowired
  public LabB01Api(PersonService personService) {
    this.personService = personService;
  }
  // constructor injection

  @GetMapping("/all")
  @ResponseStatus(value = HttpStatus.OK)
  public List<PersonDetailRespDto> getAll() {
    return personService.getAll();
  }

  @PutMapping("/update")
  @ResponseStatus(value = HttpStatus.OK)
  public String update(@RequestBody CreatePersonRequestDto person) {
    return personService.update(person);
  }

  @DeleteMapping("/delete")
  @ResponseStatus(value = HttpStatus.OK)
  public String delete(@RequestParam String hkid) {
    return personService.delete(hkid);
  }
}
