package com.example.MyCoPlanner.MyCoPlanner;

import com.example.MyCoPlanner.MyCoPlanner.Models.Entry;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class EntryTests {

    private Entry entry;

    @Before
    public void before(){
        entry = new Entry("1234", "Decide on a Name", "false");
    }

    @Test
    public void hasAnId(){
        assertEquals("1234", entry.getId());
    }

    @Test
    public void hasAnEntry(){
        assertEquals("Decide on a Name", entry.getEntry());
    }

    @Test
    public void hasCompletedStatus(){
        assertEquals("false", entry.getCompleted());
    }

}
