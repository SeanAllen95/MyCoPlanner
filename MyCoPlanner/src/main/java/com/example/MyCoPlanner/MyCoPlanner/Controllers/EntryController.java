package com.example.MyCoPlanner.MyCoPlanner.Controllers;

import com.example.MyCoPlanner.MyCoPlanner.Models.Entry;
import com.example.MyCoPlanner.MyCoPlanner.Services.EntryServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/entries")
public class EntryController {

    private final EntryServices entryServices;

    public EntryController(EntryServices entryServices){
        this.entryServices = entryServices;
    }

    @PostMapping
    public ResponseEntity addEntry(@RequestBody Entry entry){
        entryServices.addEntry(entry);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping(value = "/edit/{id}")
    public ResponseEntity updateEntry(@RequestBody Entry entry){
        entryServices.updateEntry(entry);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Entry>> getAllEntries(){
        return ResponseEntity.ok(entryServices.getAllEntries());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteEntry(@PathVariable String id){
        entryServices.deleteEntry(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
