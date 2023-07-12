package com.example.MyCoPlanner.MyCoPlanner;

import com.example.MyCoPlanner.MyCoPlanner.Models.MVPEntries;

import com.example.MyCoPlanner.MyCoPlanner.Models.TDDEntries;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TDDTests {

    private TDDEntries tddEntries;

    @Before
    public void before(){
        tddEntries = new TDDEntries("1234", "Can return a string", false);
    }

    @Test
    public void hasAnId(){
        assertEquals("1234", tddEntries.getId());
    }

    @Test
    public void hasAnEntry(){
        assertEquals("Can return a string", tddEntries.getEntry());
    }

    @Test
    public void hasCompletedStatus(){
        assertEquals(false, tddEntries.getCompleted());
    }
}
