package com.fsse2309.lab_b02.service.PersonService;

import java.util.List;
import com.fsse2309.lab_b02.data.domainObject.Person.CreatePersonData;
import com.fsse2309.lab_b02.data.domainObject.Person.CreatedPersonData;
import com.fsse2309.lab_b02.data.dto.Person.CreatePersonRequestDto;
import com.fsse2309.lab_b02.data.dto.Person.PersonDetailRespDto;
import com.fsse2309.lab_b02.entity.PersonEntity;

public interface PersonService {
  public PersonDetailRespDto createPerson(CreatePersonData createPersonData);

  public List<CreatedPersonData> getPersonByLastName(String lastName);

  // LabB01Api
  public List<PersonDetailRespDto> getAll();

  public List<PersonEntity> getAllEntities();

  public String update(CreatePersonRequestDto person);

  public String delete(String hkid);

  public PersonEntity getPersonEntityByHkid(String hkid);

  public PersonEntity getPersonEntityByCourseId(String courseId);

  public void save(PersonEntity addedPerson);
}
