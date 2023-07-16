package com.example.MyCoPlanner.MyCoPlanner.Controllers;


import com.example.MyCoPlanner.MyCoPlanner.Models.TDDEntry;
import com.example.MyCoPlanner.MyCoPlanner.Services.TDDEntryServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/TDDInformation")
public class TDDEntryController {

    private final TDDEntryServices tddEntryServices;

    public TDDEntryController(TDDEntryServices tddEntryServices) {
        this.tddEntryServices = tddEntryServices;
    }

    @PostMapping
    public ResponseEntity addEntry(@RequestBody TDDEntry tddEntry){
        tddEntryServices.addEntry(tddEntry);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping(value = "/edit/{id}")
    public ResponseEntity updateEntry(@RequestBody TDDEntry tddEntry){
        tddEntryServices.updateEntry(tddEntry);
        return ResponseEntity.ok().build();
    }
    @GetMapping
    public ResponseEntity<List<TDDEntry>> getAllEntries(){
        return ResponseEntity.ok(tddEntryServices.getAllEntries());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteEntry(@PathVariable String id){
        tddEntryServices.deleteEntry(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
