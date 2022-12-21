package com.tmdt.backend.controller;

import com.tmdt.backend.model.File;
import com.tmdt.backend.model.UserFile;
import com.tmdt.backend.service.FileService;
import com.tmdt.backend.service.UserFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/user-file")
public class UserFileController {
    @Autowired
    UserFileService userFileService;
    @Autowired
    FileService fileService;


    @PostMapping("/upload/{id_user}")
    public ResponseEntity<File> upload(@PathVariable("id_user") String id_user ,@RequestBody File file){
        try {
            file.setOwner(id_user);
            File fileUpload = fileService.save(file);
            if(fileUpload==null){
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }else {
                return new ResponseEntity<File>(fileUpload ,HttpStatus.OK);
            }
        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @DeleteMapping("/deleteFiles/{id_file}")
//    public ResponseEntity<HttpStatus> deleteFile(@PathVariable("id_file") String id_file) {
//        System.out.println("Connected!!!");
//        try {
//            userFileService.deleteById(id_file);
//            return new ResponseEntity<>(HttpStatus.OK);
//
//        }catch (Exception e) {
//            e.printStackTrace();
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }




}
