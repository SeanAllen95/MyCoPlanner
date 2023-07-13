package com.example.MyCoPlanner.MyCoPlanner.Repositories;

import com.example.MyCoPlanner.MyCoPlanner.Models.Entry;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntryRepository extends MongoRepository<Entry, String> {
}
