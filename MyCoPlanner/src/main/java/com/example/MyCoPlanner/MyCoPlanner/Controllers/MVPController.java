package com.example.MyCoPlanner.MyCoPlanner.Controllers;

import com.example.MyCoPlanner.MyCoPlanner.Models.MVPEntries;
import com.example.MyCoPlanner.MyCoPlanner.Services.MVPEntriesServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mvp")
public class MVPController {

    private final MVPEntriesServices mvpEntriesServices;

    public MVPController(MVPEntriesServices mvpEntriesServices){
        this.mvpEntriesServices = mvpEntriesServices;
    }

    @PostMapping
    public ResponseEntity addMVPEntry(@RequestBody MVPEntries mvpEntry){
        mvpEntriesServices.addMVPEntry(mvpEntry);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity updateMVPEntry(@RequestBody MVPEntries MVPEntry){
        mvpEntriesServices.updateMVPEntry(MVPEntry);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<MVPEntries>> getAllMVPEntries(){
        return ResponseEntity.ok(mvpEntriesServices.getAllMVPEntries());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteMVPEntry(@PathVariable String id){
        mvpEntriesServices.deleteMVPEntry(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }

}
