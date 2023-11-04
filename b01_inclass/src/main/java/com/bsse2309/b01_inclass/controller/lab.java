package com.bsse2309.b01_inclass.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.bsse2309.b01_inclass.model.Person;
import com.bsse2309.b01_inclass.model.PersonDTO;
import com.bsse2309.b01_inclass.model.PersonMapper;

@RestController
@RequestMapping("/person")
public class lab {
  // public static List<Person> list;
  public static Map<String, Person> personMap;
  public static int personNum = 0;

  static {
    // list = new ArrayList<>();
    personMap = new HashMap();
  }

  // Exercise 1
  @PostMapping("/create")
  @ResponseStatus(value = HttpStatus.OK)
  public ResponseEntity<String> add(@RequestBody Person person) {
    if (personMap.containsKey(person.getHkid())) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST)//
          .body("Bad Request: It's a duplicate user");
    } else {
      personMap.put(person.getHkid(), person);
      // list.add(person);
      ++personNum;
      return ResponseEntity.status(HttpStatus.OK)
          .body("Add person success, person Num: " + personNum);
    }
  }

  // exercise 2
  @GetMapping("/all")
  @ResponseStatus(value = HttpStatus.OK)
  public List<Person> get() {
    // return list;
    return personMap.values().stream().toList();
  }

  // exercise 3
  @PutMapping("/update")
  @ResponseStatus(value = HttpStatus.OK)
  public ResponseEntity<String> update(@RequestBody Person person) {
    // for (Person p : list) {
    // if (p.getHkid().equals(person.getHkid())) {
    // p.setFirstName(person.getFirstName());
    // p.setLastName(person.getLastName());
    // }
    // }
    // return person;

    if (!personMap.containsKey(person.getHkid())) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST)//
          .body("Bad Request: cant find user");
      // throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"not found");//
    } else {
      Person p = personMap.get(person.getHkid());
      // p == person;
      // p.equals(person);
      p.setFirstName(person.getFirstName());
      p.setLastName(person.getLastName());
      return ResponseEntity.status(HttpStatus.OK)
          .body("update person success, person Num: " + personNum);
    }
  }

  // exercise 4
  @DeleteMapping("/delete")
  @ResponseStatus(value = HttpStatus.OK)
  public String delete(@RequestParam String hkid) {
 //   int idx = 0;
    // for (int i = 0; i < list.size(); ++i) {
    // if (hkid.equals(list.get(i).getHkid()))
    // idx = i;
    // list.remove(idx);
    // }
    for (int i = 0; i < personMap.size(); ++i) {
      if (personMap.containsKey(hkid))
        personMap.remove(hkid);
    }
    return "delete success";
  }

  // exercise 5 , App1
  // @GetMapping("/allData")
  // @ResponseStatus(value = HttpStatus.OK)
  // public List<PersonDTO> getAllData() {
  //   List<PersonDTO> output = new ArrayList<>();
  //   for (Person person : list) {
  //     output.add(PersonMapper.map(person));
  //   }
  //   return output;
  // }

  // exercise5 , App2
  @GetMapping("/allData2")
  @ResponseStatus(value = HttpStatus.OK)
  public List<Person> getAllData2() {
    return personMap.values().stream().toList();
  }
}
