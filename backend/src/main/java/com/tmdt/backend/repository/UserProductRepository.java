package com.tmdt.backend.repository;

import ccom.tmdt.backend.model.UserProduct;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserProductRepository extends MongoRepository<UserProduct,String> {
    @Query("{'id_user' :  ?0}")
    List<UserProduct> getAllProductOfUser(String id_user);

    @Query("{'id_user' :  ?0}")
    List<UserProduct> findUserById(String username);
}
