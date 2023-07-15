package com.example.MyCoPlanner.MyCoPlanner;

import com.example.MyCoPlanner.MyCoPlanner.Models.NewProjectEntry;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class EntryTests {

    private NewProjectEntry entry;

    @Before
    public void before(){
        entry = new NewProjectEntry("1234", "MVP", {"Decide on a Name":"Incomplete"}, ["I hope this test passes"]);
    }

    @Test
    public void hasAnId(){
        assertEquals("1234", entry.getId());
    }

    @Test
    public void hasAnEntry1(){
        assertEquals("Decide on a Name", entry.getEntry());
    }



    @Test
    public void hasNotes(){
        assertEquals("I hope this test passes", entry.getNotes());
    }

}
