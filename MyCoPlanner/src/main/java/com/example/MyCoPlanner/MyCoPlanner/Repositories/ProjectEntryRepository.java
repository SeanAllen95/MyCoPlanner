package com.example.MyCoPlanner.MyCoPlanner.Repositories;

import com.example.MyCoPlanner.MyCoPlanner.Models.ProjectEntry;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectEntryRepository extends MongoRepository<ProjectEntry, String> {
}
