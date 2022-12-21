package com.tmdt.backend.paypal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderNew {

    private double price;
    private String currency;
    private String method;
    private String intent;
    private String description;
    private String idUser;
    private String idProduct;
}