package com.example.MyCoPlanner.MyCoPlanner.Repositories;

import com.example.MyCoPlanner.MyCoPlanner.Models.NewProjectEntry;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewProjectEntryRepository extends MongoRepository<NewProjectEntry, String> {
}
