package com.example.MyCoPlanner.MyCoPlanner.Models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;


@Document("NewProjectEntry")
public class NewProjectEntry {

    @Id
    private String id;

    @Field(name ="projectForm")
    private String projectForm;

    @Field(name ="projectName")
    private String projectName;

    @Field(name= "projectDescription")
    private String projectDescription;

    @Field(name= "projectAim1")
    private String projectAim1;

    @Field(name= "projectAim2")
    private String projectAim2;

    @Field(name= "projectAim3")
    private String projectAim3;

    @Field(name= "projectNotes")
    private String projectNotes;

    public NewProjectEntry() {
    }

    public NewProjectEntry(String id, String projectForm, String projectName, String projectDescription, String projectAim1, String projectAim2, String projectAim3, String projectNotes) {
        this.id = id;
        this.projectForm = projectForm;
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.projectAim1 = projectAim1;
        this.projectAim2 = projectAim2;
        this.projectAim3 = projectAim3;
        this.projectNotes = projectNotes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProjectForm() {
        return projectForm;
    }

    public void setProjectForm(String projectForm) {
        this.projectForm = projectForm;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public String getProjectAim1() {
        return projectAim1;
    }

    public void setProjectAim1(String projectAim1) {
        this.projectAim1 = projectAim1;
    }

    public String getProjectAim2() {
        return projectAim2;
    }

    public void setProjectAim2(String projectAim2) {
        this.projectAim2 = projectAim2;
    }

    public String getProjectAim3() {
        return projectAim3;
    }

    public void setProjectAim3(String projectAim3) {
        this.projectAim3 = projectAim3;
    }

    public String getProjectNotes() {
        return projectNotes;
    }

    public void setProjectNotes(String projectNotes) {
        this.projectNotes = projectNotes;
    }
}

