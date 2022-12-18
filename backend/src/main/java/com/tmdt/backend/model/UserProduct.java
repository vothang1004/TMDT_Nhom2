package com.tmdt.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "UserProduct")
public class UserProduct {

    @Id
    private String id;
    private String id_user;
    private String id_product;
    private Date activated_date;
    private Date extend_date;
    private String status;

    public String getId() {
        return id;
    }
    public UserProduct(String id_user, String id_product, Date activated_date, Date extend_date, String status) {
        this.id_user = id_user;
        this.id_product = id_product;
        this.activated_date = activated_date;
        this.extend_date = extend_date;
        this.status = status;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getId_user() {
        return id_user;
    }

    public void setId_user(String id_user) {
        this.id_user = id_user;
    }

    public String getId_product() {
        return id_product;
    }

    public void setId_product(String id_product) {
        this.id_product = id_product;
    }

    public Date getActivated_date() {
        return activated_date;
    }

    public void setActivated_date(Date activated_date) {
        this.activated_date = activated_date;
    }

    public Date getExtend_date() {
        return extend_date;
    }

    public void setExtend_date(Date extend_date) {
        this.extend_date = extend_date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public UserProduct(){

    }

    @Override
    public String toString() {
        return "UserProduct{" +
                "id='" + id + '\'' +
                ", id_user='" + id_user + '\'' +
                ", id_product='" + id_product + '\'' +
                ", activated_date=" + activated_date +
                ", extend_date=" + extend_date +
                ", status='" + status + '\'' +
                '}';
    }
}
