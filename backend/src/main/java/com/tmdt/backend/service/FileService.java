package com.tmdt.backend.service;

import com.tmdt.backend.model.File;
import com.tmdt.backend.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FileService {
    @Autowired
    private FileRepository fileRepository;


    public List<File> getAllFileOfUser(String id_user) {
        return fileRepository.getAllFileOfUser(id_user);
    }

    public Optional<File> findById(String id){
        return fileRepository.findById(id);
    }

    public void deleteById(String id) {
        fileRepository.deleteById(id);
    }
    public File save(File file) {
        return fileRepository.save(file);
    }

    public List<File> getFileByName(String file_name) {
        return fileRepository.getFileByName(file_name);
    }

}
