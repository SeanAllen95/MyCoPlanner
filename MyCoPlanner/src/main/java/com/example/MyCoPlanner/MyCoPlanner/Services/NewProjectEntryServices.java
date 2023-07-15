package com.example.MyCoPlanner.MyCoPlanner.Services;

import com.example.MyCoPlanner.MyCoPlanner.Models.NewProjectEntry;
import com.example.MyCoPlanner.MyCoPlanner.Repositories.NewProjectEntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewProjectEntryServices {

    private final NewProjectEntryRepository newProjectEntryRepository;

    public NewProjectEntryServices(NewProjectEntryRepository newProjectEntryRepository) {
        this.newProjectEntryRepository = newProjectEntryRepository;
    }

    public void addEntry(NewProjectEntry newProjectEntry){
        newProjectEntryRepository.insert(newProjectEntry);
    }

    public void updateEntry(NewProjectEntry newProjectEntry){
        NewProjectEntry savedNewProjectEntry = newProjectEntryRepository.findById(newProjectEntry.getId())
                .orElseThrow(() -> new RuntimeException(String.format("Cannot find Project Entry by id %s", newProjectEntry.getId())));

        savedNewProjectEntry.setProjectName(newProjectEntry.getProjectName());
        savedNewProjectEntry.setProjectDescription(newProjectEntry.getProjectDescription());
        savedNewProjectEntry.setProjectAim1(newProjectEntry.getProjectAim1());
        savedNewProjectEntry.setProjectAim2(newProjectEntry.getProjectAim2());
        savedNewProjectEntry.setProjectAim3(newProjectEntry.getProjectAim3());
        savedNewProjectEntry.setProjectNotes(newProjectEntry.getProjectNotes());
    }

    public List<NewProjectEntry> getAllEntries(){
        return newProjectEntryRepository.findAll();
    }
    public void deleteEntry(String id){
        newProjectEntryRepository.deleteById(id);
    }

}
