package com.example.MyCoPlanner.MyCoPlanner.Controllers;

import com.example.MyCoPlanner.MyCoPlanner.Models.ProjectEntry;
import com.example.MyCoPlanner.MyCoPlanner.Services.ProjectEntryServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ProjectInformation")
public class ProjectEntryController {

    private final ProjectEntryServices projectEntryServices;

    public ProjectEntryController(ProjectEntryServices projectEntryServices){
        this.projectEntryServices = projectEntryServices;
    }

    @PostMapping
    public ResponseEntity addEntry(@RequestBody ProjectEntry projectEntry){
        projectEntryServices.addEntry(projectEntry);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping(value = "/edit/{id}")
    public ResponseEntity updateEntry(@RequestBody ProjectEntry projectEntry, @PathVariable(name = "id") String id){
        projectEntry.setId(id);
        projectEntryServices.updateEntry(projectEntry);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<ProjectEntry>> getAllEntries(){
        return ResponseEntity.ok(projectEntryServices.getAllEntries());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteEntry(@PathVariable String id){
        projectEntryServices.deleteEntry(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
