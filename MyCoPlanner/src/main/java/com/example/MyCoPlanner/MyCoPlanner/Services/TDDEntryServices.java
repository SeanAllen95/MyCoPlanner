package com.example.MyCoPlanner.MyCoPlanner.Services;


import com.example.MyCoPlanner.MyCoPlanner.Models.TDDEntry;
import com.example.MyCoPlanner.MyCoPlanner.Repositories.TDDEntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TDDEntryServices {

    private final TDDEntryRepository tddEntryRepository;

    public TDDEntryServices(TDDEntryRepository tddEntryRepository) {
        this.tddEntryRepository = tddEntryRepository;
    }

    public void addEntry(TDDEntry tddEntry){
        tddEntryRepository.insert(tddEntry);
    }

    public void updateEntry(TDDEntry tddEntry){
        TDDEntry savedTDDEntry = tddEntryRepository.findById(tddEntry.getId())
                .orElseThrow(() -> new RuntimeException(String.format("Cannot find Project Entry by id %s", tddEntry.getId())));

        savedTDDEntry.setTestName(tddEntry.getTestName());
        savedTDDEntry.setTestCode(tddEntry.getTestCode());
        savedTDDEntry.setTestStatus(tddEntry.getTestStatus());

        tddEntryRepository.save(savedTDDEntry);
    }

    public List<TDDEntry> getAllEntries(){
        return tddEntryRepository.findAll();
    }
    public void deleteEntry(String id){
        tddEntryRepository.deleteById(id);
    }

}
