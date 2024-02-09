
package com.partyevent.partyevent.Mapper;

import com.partyevent.partyevent.dto.Bookdto;
import com.partyevent.partyevent.Entity.Book;

public class Bookmap{

    public static Bookdto maptoServicedto(Book ser) {
        // Implement the mapping logic
        return new Bookdto(
                ser.getBookingID(),
                ser.getSubmissionDate(),
                ser.getEventDate(),
                ser.getBookingStatus(),
                ser.getHeadcount(),
                ser.getEventType()
        );
    }

    public static Book maptoServiceentity(Bookdto serdto) {
        // Implement the mapping logic
        return new Book(
            serdto.getBookingID(),
            serdto.getSubmissionDate(),
            serdto.getEventDate(),
            serdto.getBookingStatus(),
            serdto.getHeadcount(),
            serdto.getEventType()
        );
    }
}