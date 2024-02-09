package com.partyevent.partyevent.Entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingID;
    
    @Column(name="submission", nullable = false)
    private Date submissionDate;

    @Column(name="date", nullable = false )
    private Date eventDate;

    @Column(name="bookstatus", nullable = false)
    private Integer bookingStatus;

    @Column(name="headcount", nullable = false)
    private Integer headcount;

    @Column(name="eventtype", nullable = false)
    private String eventType;
}
