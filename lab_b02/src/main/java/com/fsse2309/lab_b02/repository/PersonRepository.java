package com.fsse2309.lab_b02.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.fsse2309.lab_b02.entity.PersonEntity;

public interface PersonRepository extends JpaRepository<PersonEntity, Long> {

  Optional<PersonEntity> findByHkid(String hkid);
}
