package com.partyevent.partyevent.dto;
import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Bookdto {
    private Long bookingID;
    private Date submissionDate;
    private Date eventDate;
    private Integer bookingStatus;
    private Integer headcount;
    private String eventType;
}