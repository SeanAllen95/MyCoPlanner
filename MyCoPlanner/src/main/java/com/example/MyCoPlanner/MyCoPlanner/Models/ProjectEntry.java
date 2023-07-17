package com.example.MyCoPlanner.MyCoPlanner.Models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;


@Document("ProjectEntry")
public class ProjectEntry {

    @Id
    private String id;

    @Field(name ="category")
    private String category;

    @Field(name ="entry1")
    private String entry1;

    @Field(name ="entry2")
    private String entry2;

    @Field(name ="entry3")
    private String entry3;

    @Field(name ="entry4")
    private String entry4;

    @Field(name ="entry5")
    private String entry5;

    @Field(name ="entry6")
    private String entry6;

    @Field(name ="entry7")
    private String entry7;

    @Field(name ="entry8")
    private String entry8;

    @Field(name= "entryNotes")
    private String entryNotes;

    public ProjectEntry() {
    }

    public ProjectEntry(String id, String category, String entry1, String entry2, String entry3, String entry4, String entry5, String entry6, String entry7, String entry8, String entryNotes) {
        this.id = id;
        this.category = category;
        this.entry1 = entry1;
        this.entry2 = entry2;
        this.entry3 = entry3;
        this.entry4 = entry4;
        this.entry5 = entry5;
        this.entry6 = entry6;
        this.entry7 = entry7;
        this.entry8 = entry8;
        this.entryNotes = entryNotes;
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

    public String getEntry1() {
        return entry1;
    }

    public void setEntry1(String entry1) {
        this.entry1 = entry1;
    }

    public String getEntry2() {
        return entry2;
    }

    public void setEntry2(String entry2) {
        this.entry2 = entry2;
    }

    public String getEntry3() {
        return entry3;
    }

    public void setEntry3(String entry3) {
        this.entry3 = entry3;
    }

    public String getEntry4() {
        return entry4;
    }

    public void setEntry4(String entry4) {
        this.entry4 = entry4;
    }

    public String getEntry5() {
        return entry5;
    }

    public void setEntry5(String entry5) {
        this.entry5 = entry5;
    }

    public String getEntry6() {
        return entry6;
    }

    public void setEntry6(String entry6) {
        this.entry6 = entry6;
    }

    public String getEntry7() {
        return entry7;
    }

    public void setEntry7(String entry7) {
        this.entry7 = entry7;
    }

    public String getEntry8() {
        return entry8;
    }

    public void setEntry8(String entry8) {
        this.entry8 = entry8;
    }

    public String getEntryNotes() {
        return entryNotes;
    }

    public void setEntryNotes(String entryNotes) {
        this.entryNotes = entryNotes;
    }
}

