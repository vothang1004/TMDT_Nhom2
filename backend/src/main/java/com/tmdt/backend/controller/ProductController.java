package com.tmdt.backend.controller;


import com.tmdt.backend.model.Product;
import com.tmdt.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("Product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/listProduct")
    public ResponseEntity<List<Product>> getAllProduct() {
        try {
            List<Product> listProduct = productService.getAllProduct();
            if(listProduct.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }else {
                return new ResponseEntity<List<Product>>(listProduct,HttpStatus.OK);
            }
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/productDetail/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable String id) {
        try {
            Optional<Product> product = productService.findById(id);
            if (product.isPresent()) {
                Product productNew = product.get();
                return new ResponseEntity<>(productNew, HttpStatus.OK);
            }else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
