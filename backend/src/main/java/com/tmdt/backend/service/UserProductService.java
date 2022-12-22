package com.tmdt.backend.service;

import com.tmdt.backend.model.Product;
import com.tmdt.backend.model.User;
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
    public List<UserProduct> getAllProductOfUsers(String id_user) {
        return userProductRepository.getAllProductOfUser(id_user);
    }

    public List<UserProduct> getAllProductOfUser(String usernamme) {
        return userProductRepository.findUserById(usernamme);
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
        if(!checkExpiredProduct(userProduct.getId_user(),userProduct.getId_product())){
            paymentSuccess();
            autoAccumulateScore(userProduct);
            return userProductRepository.save(userProduct);
        }
        return null;
    }

    private void paymentSuccess() {
    }

    private void autoAccumulateScore(UserProduct userProduct) {
        User user = userRepository.findById(userProduct.getId_user()).get();
        Product product = productRepository.findById(userProduct.getId_product()).get();
        user.updateScore(product.getScore());
        userRepository.save(user);
    }

    public boolean checkExpiredProduct(String id_user,String id_product) {
        List<UserProduct> listEP = getExpiredProducts(id_user);
        for(UserProduct userProduct : listEP) {
            if(id_product.equals(userProduct.getId_product())){
                return true;
            }
        }
        return false;
    }

    public double getScoreBonus(String id_user,String id_product ){
        int score = userRepository.findById(id_user).get().getScore();
        double price = productRepository.findById(id_product).get().getPrice();
        double priceBonus=0;
        if(score >= 20){
            priceBonus = price - 5;
        }
        if(score >= 50){
            priceBonus = price - 10;
        }
        if(score >= 100){
            priceBonus = price - 15;
        }
        if(score >= 200){
            priceBonus = price - 25;
        }
        if(score >= 300){
            priceBonus = price - 35;
        }
        if(score >= 500){
            priceBonus = price - (35 + price*0.5);
        }
        return priceBonus;
    }

}
