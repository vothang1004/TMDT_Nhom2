package com.tmdt.backend.model;

import com.tmdt.backend.model.Product;
import com.tmdt.backend.model.User;
import com.tmdt.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;



    //admin
    //lay tat ca user
    @GetMapping("/list-user")
    public ResponseEntity<List<User>> getAllUser() {
        try {
            List<User> list = userService.getAllUser();
            System.out.println(list);

            if(list.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<List<User>>(list,HttpStatus.OK);

        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //lay user theo id
    @GetMapping(value = "/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") String id) {
        try {
            Optional<User> user = userService.findById(id);

            if(user.isPresent()) {
                return new ResponseEntity(user.get(), HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //tạo mới user trong hệ thống
    @PostMapping("/user")
    public ResponseEntity<User> create (@RequestBody User userNew) {
        try {
            User user = userService.save(userNew);
            if(user == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }else {
                return new ResponseEntity<>(user, HttpStatus.CREATED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //customer
    //cap nhat mat khau moi
    @PutMapping("/user/{id})")
    public ResponseEntity<User> changePass(@RequestBody User user, @PathVariable("id") String id ){
        try {
            Optional<User> getUser = userService.findById(id);
            if(getUser.isPresent()) {
                User userNew = getUser.get();
                userNew.setPassword(user.getPassword());
                return new ResponseEntity<>(userService.save(userNew), HttpStatus.OK);
            }else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Tich diem khi mua hang

    @PutMapping("/payment/{id_user}")
    public ResponseEntity<User> updateScore(@PathVariable("id_user") String id_user,@RequestBody Product product) {
        try {
            Optional<User> user = userService.findById(id_user);
            if(user.isPresent()) {
                User userNew = user.get();
                userNew.updateScore(product.getScore());
                return new ResponseEntity<User>(userService.save(userNew),HttpStatus.OK);
            }else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }

        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }


}
