package com.tmdt.backend.service;

import com.tmdt.backend.model.UserProduct;
import com.tmdt.backend.repository.ProductRepository;
import com.tmdt.backend.repository.UserProductRepository;
import com.tmdt.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class UserProductService {
    @Autowired
    private UserProductRepository userProductRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;

//get list product of customer
    public List<UserProduct> getAllProductOfUser(String id_user) {
        return userProductRepository.getAllProductOfUser(id_user);
    }

    //Get a list of expired products
    public List<UserProduct> getExpiredProducts(String id_user) {
        List<UserProduct> list = userProductRepository.getAllProductOfUser(id_user);
        List<UserProduct> listEP = new ArrayList<>();
        for(UserProduct userProduct : list) {
            if((userProduct.getExtend_date().getTime() - userProduct.getActivated_date().getTime()) > 0) {
                listEP.add(userProduct);
            }
        }
        return listEP;
    }

    public UserProduct order(UserProduct userProduct) {
        autoAccumulateScore(userProduct);
        return userProductRepository.save(userProduct);
    }

    private void autoAccumulateScore(UserProduct userProduct) {
    }

}
