package com.tmdt.backend.repository;

import com.tmdt.backend.model.File;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface FileRepository extends MongoRepository<File,String> {
    @Query("{'owner' : ?0 ")
    public List<File> getAllFileOfUser(String owner);

    @Query("{'file_name' : ?0 ")
    public List<File> getFileByName(String file_name);
}
