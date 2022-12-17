package com.tmdt.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "File")
public class File {
    @Id
    private String id;
    private String file_name;
    private String owner;
    private long size;


    public File(String name, String owner, long size) {
        super();
        this.file_name = name;
        this.owner = owner;
        this.size = size;
    }

    public File(){
        super();
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFile_name() {
        return file_name;
    }

    public void setFile_name(String file_name) {
        this.file_name = file_name;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }


    @Override
    public String toString() {
        return "File{" +
                "name='" + file_name + '\'' +
                ", owner='" + owner + '\'' +
                ", size=" + size +
                '}';
    }
}