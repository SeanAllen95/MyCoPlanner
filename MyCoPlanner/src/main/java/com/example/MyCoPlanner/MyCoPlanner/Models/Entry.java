package com.example.MyCoPlanner.MyCoPlanner.Models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;


@Document("entries")
public class Entry {

    @Id
    private String id;

    @Field(name ="entry")
    private String entry;

    @Field(name = "completed")
    private String completed;

    public Entry() {
    }

    public Entry(String id, String entry, String completed) {
        this.id = id;
        this.entry = entry;
        this.completed = completed;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEntry() {
        return entry;
    }

    public void setEntry(String entry) {
        this.entry = entry;
    }

    public String getCompleted() {
        return completed;
    }

    public void setCompleted (String completed) {
        this.completed = completed;
    }
}

