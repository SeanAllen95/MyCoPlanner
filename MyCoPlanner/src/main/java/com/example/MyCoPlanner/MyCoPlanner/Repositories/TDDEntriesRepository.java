package com.example.MyCoPlanner.MyCoPlanner.Repositories;

import com.example.MyCoPlanner.MyCoPlanner.Models.TDDEntries;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TDDEntriesRepository extends MongoRepository<TDDEntries, String> {
}
