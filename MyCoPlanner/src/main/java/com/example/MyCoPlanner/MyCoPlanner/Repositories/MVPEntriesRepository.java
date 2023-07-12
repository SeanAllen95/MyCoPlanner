package com.example.MyCoPlanner.MyCoPlanner.Repositories;

import com.example.MyCoPlanner.MyCoPlanner.Models.MVPEntries;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MVPEntriesRepository extends MongoRepository<MVPEntries, String> {

}
