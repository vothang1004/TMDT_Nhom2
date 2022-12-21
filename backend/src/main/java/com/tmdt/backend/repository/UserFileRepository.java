package com.tmdt.backend.repository;

import com.tmdt.backend.model.UserFile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserFileRepository extends MongoRepository<UserFile,String> {
    @Query("{'id_user': ?0}")
    List<UserFile> getFileByIdUser(String id_user);


    @Query("{'id_file': ?0}")
    List<UserFile> getFileByIdFile(String id_file);
}
