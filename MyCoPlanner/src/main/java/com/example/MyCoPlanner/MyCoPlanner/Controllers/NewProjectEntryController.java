package com.example.MyCoPlanner.MyCoPlanner.Controllers;

import com.example.MyCoPlanner.MyCoPlanner.Models.NewProjectEntry;
import com.example.MyCoPlanner.MyCoPlanner.Services.NewProjectEntryServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/NewProjectInformation")
public class NewProjectEntryController {

    private final NewProjectEntryServices newProjectEntryServices;

    public NewProjectEntryController(NewProjectEntryServices newProjectEntryServices){
        this.newProjectEntryServices = newProjectEntryServices;
    }

    @PostMapping
    public ResponseEntity addEntry(@RequestBody NewProjectEntry newProjectEntry){
        newProjectEntryServices.addEntry(newProjectEntry);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping(value = "/edit/{id}")
    public ResponseEntity updateEntry(@RequestBody NewProjectEntry newProjectEntry){
        newProjectEntryServices.updateEntry(newProjectEntry);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<NewProjectEntry>> getAllEntries(){
        return ResponseEntity.ok(newProjectEntryServices.getAllEntries());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteEntry(@PathVariable String id){
        newProjectEntryServices.deleteEntry(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
