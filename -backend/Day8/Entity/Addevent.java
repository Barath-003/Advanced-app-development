package com.partyevent.partyevent.Entity;

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
@Table(name = "addevent")
public class Addevent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventid;

    @Column(name="eventtype", nullable = false)
    private String eventtype;

    @Column(name="description", nullable = false )
    private String description;

    @Column(name="eventpackage", nullable = false)
    private String epackage;

    @Column(name="count", nullable = false)
    private String count;

    @Column(name="charge", nullable = false)
    private String charge;
}
