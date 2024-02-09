package com.partyevent.partyevent.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Addevdto {
    private Long eventid;
    private String eventtype;
    private String description;
    private String epackage;
    private String count;
    private String charge;
}