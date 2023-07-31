package com.example.MyCoPlanner.MyCoPlanner;


import com.example.MyCoPlanner.MyCoPlanner.Models.ProjectEntry;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class EntryTests {

    private ProjectEntry projectEntry;

    @Before
    public void before(){
        projectEntry = new ProjectEntry("1234", "NewProject", "OnlyPlans", "An app for making plans with friends", "So friends can organise plans", "Friends can create groups", "Friends can organise events", "Friends can add friends to groups", "Friends can remove friends from groups", "Friends can view a calender of events", "I need this app");
    }

    @Test
    public void hasAnId(){
        assertEquals("1234", projectEntry.getId());
    }

    @Test
    public void haACategory(){
        assertEquals("NewProject", projectEntry.getCategory());
    }

    @Test
    public void hasAnEntry1(){
        assertEquals("OnlyPlans", projectEntry.getEntry1());
    }

    @Test
    public void hasAnEntry2(){
        assertEquals("An app for making plans with friends", projectEntry.getEntry2());
    }

    @Test
    public void hasAnEntry3(){
        assertEquals("So friends can organise plans", projectEntry.getEntry3());
    }

    @Test
    public void hasAnEntry4(){
        assertEquals("Friends can create groups", projectEntry.getEntry4());
    }

    @Test
    public void hasAnEntry5(){
        assertEquals("Friends can organise events", projectEntry.getEntry5());
    }

    @Test
    public void hasAnEntry6(){
        assertEquals("Friends can add friends to groups", projectEntry.getEntry6());
    }

    @Test
    public void hasAnEntry7(){
        assertEquals("Friends can remove friends from groups", projectEntry.getEntry7());
    }

    @Test
    public void hasAnEntry8(){
        assertEquals("Friends can view a calender of events", projectEntry.getEntry8());
    }



    @Test
    public void hasNotes(){
        assertEquals("I need this app", projectEntry.getEntryNotes());
    }

}
