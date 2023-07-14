package com.example.MyCoPlanner.MyCoPlanner.Models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;
import java.util.ArrayList;
import java.util.HashMap;


@Document("entries")
public class Entry {

    @Id
    private String id;

    @Field(name ="category")
    private String category;

    @Field(name= "entry")
    private String entry;

    @Field(name= "complete")
    private String complete;

    @Field(name= "notes")
    private String notes;

    public Entry() {
    }

    public Entry(String id, String category, String entry, String complete, String notes) {
        this.id = id;
        this.category = category;
        this.entry = entry;
        this.complete = complete;
        this.notes = notes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getEntry() {
        return entry;
    }

    public void setEntry(String entry) {
        this.entry = entry;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getComplete() {
        return complete;
    }

    public void setComplete(String complete) {
        this.complete = complete;
    }
}

