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
    private HashMap<String, String> entry;

    @Field(name= "notes")
    private ArrayList<String> notes;

    public Entry() {
    }

    public Entry(String id, String category, HashMap<String, String> entry, ArrayList<String> notes) {
        this.id = id;
        this.category = category;
        this.entry = entry;
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

    public HashMap<String, String> getEntry() {
        return entry;
    }

    public void setEntry(HashMap<String, String> entry) {
        this.entry = entry;
    }

    public ArrayList<String> getNotes() {
        return notes;
    }

    public void setNotes(ArrayList<String> notes) {
        this.notes = notes;
    }
}

