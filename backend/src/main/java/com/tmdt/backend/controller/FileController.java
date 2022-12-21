package com.tmdt.backend.controller;


import com.tmdt.backend.model.File;
import com.tmdt.backend.service.FileService;
import com.tmdt.backend.service.UserFileService;
import com.tmdt.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//@RequestMapping("/files")
public class FileController {
    @Autowired
    FileService fileService;
    @Autowired
    UserService userService;
    @Autowired
    UserFileService userFileService;

    @GetMapping("/fileManager/{id_user}")
    public ResponseEntity<List<File>> getAllFile(@PathVariable("id_user") String id_user) {
        System.out.println("Đã connected");
        try {
            List<File> listFile = fileService.getAllFileOfUser(id_user);
            System.out.println(listFile);
            if(listFile.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }else {
                return new ResponseEntity<List<File>>(listFile, HttpStatus.OK);
            }
        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/file/{id_file}")
    public ResponseEntity<File> getFileById(@PathVariable("id_file") String id_file){
        try {
            Optional<File> file = fileService.findById(id_file);
            if(file.isPresent()) {
                File fileNew = file.get();
                return new ResponseEntity<File>(fileNew , HttpStatus.OK);
            }else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/fileByName/{file_name}")
    public ResponseEntity<List<File>> getFileByName(@PathVariable("file_name") String file_name){
        try {
            List<File> lisFile = fileService.getFileByName(file_name);
            if(lisFile.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }else {
                return new ResponseEntity<List<File>>(lisFile,HttpStatus.OK);
            }
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteFile/{id_file}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable("id_file") String id_file) {
        try {
            fileService.deleteById(id_file);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @PostMapping("/file")


}
