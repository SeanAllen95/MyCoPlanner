package com.example.MyCoPlanner.MyCoPlanner.Services;

import com.example.MyCoPlanner.MyCoPlanner.Models.MVPEntries;
import com.example.MyCoPlanner.MyCoPlanner.Models.TDDEntries;
import com.example.MyCoPlanner.MyCoPlanner.Repositories.TDDEntriesRepository;
import com.example.MyCoPlanner.MyCoPlanner.Repositories.TDDEntriesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TDDEntriesServices {

    private final TDDEntriesRepository tddEntriesRepository;

    public TDDEntriesServices(TDDEntriesRepository tddEntriesRepository) {
        this.tddEntriesRepository = tddEntriesRepository;
    }

    public void addTDDEntry(TDDEntries TDDEntry){
        tddEntriesRepository.insert(TDDEntry);
    }

    public void updateTDDEntry(TDDEntries TDDEntry){
        TDDEntries savedTDDEntry = tddEntriesRepository.findById(TDDEntry.getId())
                .orElseThrow(() -> new RuntimeException(String.format("Cannot find MVPEntry by id %s", TDDEntry.getId())));

        savedTDDEntry.setEntry(TDDEntry.getEntry());
        tddEntriesRepository.save(TDDEntry);
    }

    public List<TDDEntries> getAllTDDEntries(){
        return tddEntriesRepository.findAll();
    }
    public void deleteTDDEntry(String id){
        tddEntriesRepository.deleteById(id);
    }




}
