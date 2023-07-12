package com.example.MyCoPlanner.MyCoPlanner.Services;

import com.example.MyCoPlanner.MyCoPlanner.Models.MVPEntries;
import com.example.MyCoPlanner.MyCoPlanner.Repositories.MVPEntriesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MVPEntriesServices {

    private final MVPEntriesRepository mvpEntriesRepository;

    public MVPEntriesServices(MVPEntriesRepository mvpEntriesRepository) {
        this.mvpEntriesRepository = mvpEntriesRepository;
    }

    public void addMVPEntry(MVPEntries MVPEntry){
        mvpEntriesRepository.insert(MVPEntry);
    }

    public void updateMVPEntry(MVPEntries MVPEntry){
        MVPEntries savedMVPEntry = mvpEntriesRepository.findById(MVPEntry.getId())
                .orElseThrow(() -> new RuntimeException(String.format("Cannot find MVPEntry by id %s", MVPEntry.getId())));

        savedMVPEntry.setEntry(MVPEntry.getEntry());
        mvpEntriesRepository.save(MVPEntry);
    }

    public List<MVPEntries> getAllMVPEntries(){
        return mvpEntriesRepository.findAll();
    }
    public void deleteMVPEntry(String id){
        mvpEntriesRepository.deleteById(id);
    }




}
