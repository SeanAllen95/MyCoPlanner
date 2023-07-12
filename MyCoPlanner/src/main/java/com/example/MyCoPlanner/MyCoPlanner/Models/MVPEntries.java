package com.example.MyCoPlanner.MyCoPlanner.Models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;


@Document("mvpentries")
public class MVPEntries {

    @Id
    private String id;

    @Field(name ="entry")
    private String entry;

    @Field(name = "completed")
    private Boolean completed;

    public MVPEntries() {
    }

    public MVPEntries(String id, String entry, Boolean completed) {
        this.id = id;
        this.entry = entry;
        this.completed = false;
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

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
}

