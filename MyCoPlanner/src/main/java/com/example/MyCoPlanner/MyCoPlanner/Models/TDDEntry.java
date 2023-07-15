package com.example.MyCoPlanner.MyCoPlanner.Models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;

@Document("TDDEntry")
public class TDDEntry {

    @Id
    private String id;

    @Field(name = "testName")
    private String testName;

    @Field(name = "testCode")
    private String testCode;

    @Field(name = "testStatus")
    private String testStatus;

    public TDDEntry(String id, String testName, String testCode, String testStatus) {
        this.id = id;
        this.testName = testName;
        this.testCode = testCode;
        this.testStatus = testStatus;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public String getTestCode() {
        return testCode;
    }

    public void setTestCode(String testCode) {
        this.testCode = testCode;
    }

    public String getTestStatus() {
        return testStatus;
    }

    public void setTestStatus(String testStatus) {
        this.testStatus = testStatus;
    }
}
