package com.example.MyCoPlanner.MyCoPlanner.Services;

import com.example.MyCoPlanner.MyCoPlanner.Models.Entry;
import com.example.MyCoPlanner.MyCoPlanner.Repositories.EntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntryServices {

    private final EntryRepository entryRepository;

    public EntryServices(EntryRepository entryRepository) {
        this.entryRepository = entryRepository;
    }

    public void addEntry(Entry entry){
        entryRepository.insert(entry);
    }

    public void updateEntry(Entry entry){
        Entry savedEntry = entryRepository.findById(entry.getId())
                .orElseThrow(() -> new RuntimeException(String.format("Cannot find Entry by id %s", entry.getId())));

        savedEntry.setEntry(entry.getEntry());
        entryRepository.save(entry);
    }

    public List<Entry> getAllEntries(){
        return entryRepository.findAll();
    }
    public void deleteEntry(String id){
        entryRepository.deleteById(id);
    }




}
