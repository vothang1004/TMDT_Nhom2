package com.tmdt.backend.service;

import com.tmdt.backend.model.UserFile;
import com.tmdt.backend.repository.UserFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserFileService {
    @Autowired
    UserFileRepository userFileRepository;

    public UserFile save(UserFile userFile) {
        return userFileRepository.save(userFile);
    }

    public void deleteById(String id) {
        userFileRepository.deleteById(id);
    }

    public Optional<UserFile> getById(String id) {
        return userFileRepository.findById(id);
    }

    public List<UserFile> getFileByIdUser(String id_user) {
        return  userFileRepository.getFileByIdUser(id_user);
    }

    public  List<UserFile> getFileByIdFile(String id_file) {
        return userFileRepository.getFileByIdFile(id_file);
    }



}
