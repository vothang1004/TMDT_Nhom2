package com.tmdt.backend.controller;

import com.tmdt.backend.model.Product;
import com.tmdt.backend.model.UserProduct;
import com.tmdt.backend.repository.ProductRepository;
import com.tmdt.backend.repository.UserProductRepository;
import com.tmdt.backend.service.UserProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
//@RequestMapping("/user-product")
public class UserProductController {

    @Autowired
    UserProductService userProductService;
    @Autowired
    UserProductRepository userProductRepository;
    @Autowired
    ProductRepository productRepository;

    @GetMapping("/list-product/{id_user}")
    public ResponseEntity<List<UserProduct>> getAllProductOfUserrr(@PathVariable("id_user") String id_user) {
        System.out.println("Connected!!!!!" + id_user);
        try {
            System.out.println(id_user);
            List<UserProduct> userProductList = userProductService.getAllProductOfUsers(id_user);
            System.out.println(userProductList);

            if (userProductList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<List<UserProduct>>(userProductList, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/list/{id_user}")
    public ResponseEntity<List<UserProduct>> getAllProductOfUser(@PathVariable String id_user) {
        System.out.println("Connected!!!!!" + id_user);
        try {
            List<UserProduct> list = new ArrayList<>();
            userProductService.getAllProductOfUsers(id_user).forEach(list::add);
            if (list.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<List<UserProduct>>(list, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/expired-products/{id_user}")
    public ResponseEntity<List<UserProduct>> getExpiredProducts(@PathVariable("id_user") String id_user) {
        try {
            List<UserProduct> expiredProductsList = userProductService.getExpiredProducts(id_user);
            if (expiredProductsList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<List<UserProduct>>(expiredProductsList, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/order/{id_user}/{id_product}")
    public ResponseEntity<UserProduct> order(@PathVariable("id_user") String id_user,@PathVariable("id_product") String id_product) {
        try {
            int hour = getHOurByIdProduct(id_product);
            System.out.println("hour: "+hour);
            System.out.println("id_user: "+id_user);
            System.out.println("id_product: "+id_product);
            UserProduct u = new UserProduct(id_user,id_product,hour);
            UserProduct productOrder = userProductService.order(u);
            if (productOrder == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            } else {
                return new ResponseEntity<UserProduct>(productOrder, HttpStatus.OK);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private int getHOurByIdProduct(String id_product) {
        Optional<Product> p = productRepository.findById(id_product);
        return p.get().getPeriod();
    }

    @GetMapping("/order/getPriceAfterBonus/{id_user}/{id_product}")
    public ResponseEntity<Double> getPriceAfterBonus(@PathVariable("id_user") String id_user, @PathVariable("id_product") String id_product){
        try {
            double price = userProductService.getScoreBonus(id_user,id_product);
            System.out.println("Giá sau khi giảm: "+ price);
            return new ResponseEntity<Double>(price,HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/order/checkExpiredProduct/{id_user}/{id_product}")
    public ResponseEntity<Boolean> checkExpiredProduct(@PathVariable("id_user") String id_user, @PathVariable("id_product") String id_product) {
        try {
            boolean result = userProductService.checkExpiredProduct(id_user,id_product);
            return new ResponseEntity<Boolean>(result,HttpStatus.OK);
        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
