package com.example.MyCoPlanner.MyCoPlanner.Services;

import com.example.MyCoPlanner.MyCoPlanner.Models.ProjectEntry;
import com.example.MyCoPlanner.MyCoPlanner.Repositories.ProjectEntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectEntryServices {

    private final ProjectEntryRepository projectEntryRepository;

    public ProjectEntryServices(ProjectEntryRepository projectEntryRepository) {
        this.projectEntryRepository = projectEntryRepository;
    }

    public void addEntry(ProjectEntry projectEntry){
        projectEntryRepository.insert(projectEntry);
    }

    public void updateEntry(ProjectEntry projectEntry){
        ProjectEntry savedProjectEntry = projectEntryRepository.findById(projectEntry.getId())
                .orElseThrow(() -> new RuntimeException(String.format("Cannot find Project Entry by id %s", projectEntry.getId())));

        savedProjectEntry.setCategory(projectEntry.getCategory());
        savedProjectEntry.setEntry1(projectEntry.getEntry1());
        savedProjectEntry.setEntry2(projectEntry.getEntry2());
        savedProjectEntry.setEntry3(projectEntry.getEntry3());
        savedProjectEntry.setEntry4(projectEntry.getEntry4());
        savedProjectEntry.setEntry5(projectEntry.getEntry5());
        savedProjectEntry.setEntry6(projectEntry.getEntry6());
        savedProjectEntry.setEntry7(projectEntry.getEntry7());
        savedProjectEntry.setEntry8(projectEntry.getEntry8());
        savedProjectEntry.setEntryNotes(projectEntry.getEntryNotes());
        projectEntryRepository.save(savedProjectEntry);
    }

    public List<ProjectEntry> getAllEntries(){
        return projectEntryRepository.findAll();
    }
    public void deleteEntry(String id){
        projectEntryRepository.deleteById(id);
    }
}
