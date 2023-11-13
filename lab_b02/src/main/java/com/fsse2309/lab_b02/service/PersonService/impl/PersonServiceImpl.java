package com.fsse2309.lab_b02.service.PersonService.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fsse2309.lab_b02.exception.CreatePersonException;
import com.fsse2309.lab_b02.data.domainObject.Person.CreatePersonData;
import com.fsse2309.lab_b02.data.domainObject.Person.CreatedPersonData;
import com.fsse2309.lab_b02.data.dto.Person.CreatePersonRequestDto;
import com.fsse2309.lab_b02.data.dto.Person.PersonDetailRespDto;
import com.fsse2309.lab_b02.entity.PersonEntity;
import com.fsse2309.lab_b02.infra.PeopleMapper;
import com.fsse2309.lab_b02.repository.PersonRepository;
import com.fsse2309.lab_b02.service.PersonService.PersonService;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class PersonServiceImpl implements PersonService {
  // private List<PersonEntity> personEntityList = new ArrayList<>();

  @Autowired
  PersonRepository personRepository;

  @Override
  public PersonDetailRespDto createPerson(CreatePersonData createPersonData) {
    // Convert domain object to entity
    // Lv1
    // PersonEntity personEntity = new PersonEntity(//
    // createPersonData.getLastName(), //
    // createPersonData.getFirstName(), //
    // createPersonData.getHkid());


    // lv1
    // PersonEntity personEntity = new PersonEntity(createPersonData);
    if (createPersonData.getFirstName() == null
        || createPersonData.getHkid() == null
        || createPersonData.getLastName() == null) {
      log.info("CreatePersonException : Attribute cannot be null");
      throw new CreatePersonException();
    }
    PersonEntity personEntity = PeopleMapper.map(createPersonData);

    Optional<PersonEntity> existingPerson =
        personRepository.findByHkid(personEntity.getHkid());

    if (existingPerson.isPresent()) {
      System.out.println("Create Fail");
    } else {
      personRepository.save(personEntity);
    }
    CreatedPersonData createdPersonData = PeopleMapper.map(personEntity);
    return PeopleMapper.map(createdPersonData);
  }

  @Override
  public List<CreatedPersonData> getPersonByLastName(String lastName) {
    return personRepository.findAll().stream()//
        .filter(e -> e.getLastName().equals(lastName))//
        .map(e -> PeopleMapper.map(e))//
        .collect(Collectors.toList());
  }

  // LabB01Api
  @Override
  public List<PersonDetailRespDto> getAll() {
    List<CreatedPersonData> convent = new ArrayList<>();
    for (int i = 0; i < personRepository.findAll().size(); ++i) {
      convent.add(PeopleMapper.map(personRepository.findAll().get(i)));
    }

    List<PersonDetailRespDto> response = new ArrayList<>();
    for (int i = 0; i < convent.size(); ++i) {
      response.add(PeopleMapper.map(convent.get(i)));
    }
    return response;
  }

  @Override
  public String update(CreatePersonRequestDto person) {
    for (PersonEntity entity : personRepository.findAll()) {
      if (person.getHkid().equals(entity.getHkid())) {
        entity.setLastName(person.getLastName());
        entity.setFirstName(person.getFirstName());
      }
      personRepository.save(entity);
      return "Update Success";
    }
    return "Update Fail";
  }

  @Override
  public String delete(String hkid) {
    Optional<PersonEntity> personEntity = personRepository.findByHkid(hkid);

    if (personEntity.isPresent()) {
      personRepository.delete(personEntity.get());
      return "Delete Success";
    } else {
      return "Delete Fail: Person not found";
    }
  }

  @Override
  public Optional<PersonEntity> getPersonEntityByHkid(String hkid) {
    return personRepository.findAll().stream()//
        .filter(e -> e.getHkid().equals(hkid))//
        .findFirst(); //
  }

  @Override
  public void save(PersonEntity addedPerson) {
    personRepository.save(addedPerson);
  }

  @Override
  public Optional<PersonEntity> getPersonEntityByCourseId(String courseId) {
    return personRepository.findAll().stream()//
        .filter(e -> e.getCourseJoining().equals(courseId))//
        .findFirst();
  }

  @Override
  public List<PersonEntity> getAllEntities() {
    return personRepository.findAll();
  }

}
