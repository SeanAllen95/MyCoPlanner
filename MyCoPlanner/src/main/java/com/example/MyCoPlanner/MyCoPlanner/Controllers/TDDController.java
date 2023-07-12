package com.example.MyCoPlanner.MyCoPlanner.Controllers;

import com.example.MyCoPlanner.MyCoPlanner.Models.TDDEntries;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.MyCoPlanner.MyCoPlanner.Services.MVPEntriesServices;
import com.example.MyCoPlanner.MyCoPlanner.Services.TDDEntriesServices;

import java.util.List;

@RestController
@RequestMapping("/tdd")
public class TDDController {

    private final TDDEntriesServices tddEntriesServices;

    public TDDController(TDDEntriesServices tddEntriesServices){
        this.tddEntriesServices = tddEntriesServices;
    }

    @PostMapping
    public ResponseEntity addTDDEntry(@RequestBody TDDEntries tddEntry){
        tddEntriesServices.addTDDEntry(tddEntry);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity updateTDDEntry(@RequestBody TDDEntries TDDEntry){
        tddEntriesServices.updateTDDEntry(TDDEntry);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<TDDEntries>> getAllTDDEntries(){
        return ResponseEntity.ok(tddEntriesServices.getAllTDDEntries());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteTDDEntry(@PathVariable String id){
        tddEntriesServices.deleteTDDEntry(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }

}

