package com.mongo.eventManagementBackend.repository;

import com.mongo.eventManagementBackend.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,Integer> {

}
