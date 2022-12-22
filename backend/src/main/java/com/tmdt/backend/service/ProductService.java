package com.tmdt.backend.service;

import com.tmdt.backend.model.Product;
import com.tmdt.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProduct () {
        return productRepository.findAll();
    }

    public Optional<Product> findById(String id) {
        return productRepository.findById(id);
    }

    //them,sua,xoa
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }



}
