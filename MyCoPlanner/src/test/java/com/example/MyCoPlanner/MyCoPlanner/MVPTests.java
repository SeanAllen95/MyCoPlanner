package com.example.MyCoPlanner.MyCoPlanner;

import com.example.MyCoPlanner.MyCoPlanner.Models.MVPEntries;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MVPTests {

    private MVPEntries mvpEntries;

    @Before
    public void before(){
        mvpEntries = new MVPEntries("1234", "Decide on a Name", false);
    }

    @Test
    public void hasAnId(){
        assertEquals("1234", mvpEntries.getId());
    }

    @Test
    public void hasAnEntry(){
        assertEquals("Decide on a Name", mvpEntries.getEntry());
    }

    @Test
    public void hasCompletedStatus(){
        assertEquals(false, mvpEntries.getCompleted());
    }

}
