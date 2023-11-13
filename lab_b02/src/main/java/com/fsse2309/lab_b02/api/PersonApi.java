package com.fsse2309.lab_b02.api;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.fsse2309.lab_b02.data.domainObject.Person.CreatePersonData;
import com.fsse2309.lab_b02.data.domainObject.Person.CreatedPersonData;
import com.fsse2309.lab_b02.data.dto.Person.CreatePersonRequestDto;
import com.fsse2309.lab_b02.data.dto.Person.PersonDetailRespDto;
import com.fsse2309.lab_b02.infra.PeopleMapper;
import com.fsse2309.lab_b02.service.PersonService.PersonService;

@RestController
// @RequestMapping()
public class PersonApi {
  // constructor injection
  private PersonService personService;

  @Autowired
  public PersonApi(PersonService personService) {
    this.personService = personService;
  }
  // constructor injection


  @PostMapping("/person")
  @ResponseStatus(value = HttpStatus.CREATED)
  public PersonDetailRespDto createPerson(
      @RequestBody CreatePersonRequestDto createPersonRequestDto) {
    // CreatePersonData createPersonData =
    // new CreatePersonData(createPersonRequestDto);

    // CreatedPersonData createdPersonData =
    // personService.createPerson(createPersonData);

    // CreatePersonResqDto createPersonResqDto =
    // new CreatePersonResqDto(createdPersonData);

    // return createPersonResqDto;
    CreatePersonData createPersonData = PeopleMapper.map(createPersonRequestDto);
    return personService.createPerson(createPersonData);
  }

  // exercise 2
  @GetMapping("/person/{last_name}")
  @ResponseStatus(value = HttpStatus.OK)
  public List<PersonDetailRespDto> getPerson(
      @PathVariable(name = "last_name") String lastName) {
    List<CreatedPersonData> convent =
        personService.getPersonByLastName(lastName);
    List<PersonDetailRespDto> respones = new ArrayList<>();
    for (int i = 0; i < convent.size(); ++i) {
      respones.add(PeopleMapper.map(convent.get(i)));
    }
    return respones;
  }

}
