package com.partyevent.partyevent.Controller;

import com.partyevent.partyevent.dto.Addevdto;
import com.partyevent.partyevent.service1.Addservice;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/addevent")
public class Addcontroller {

    private final Addservice addservice;

    public Addcontroller(Addservice addservice) {
        this.addservice = addservice;
    }
    @Tag(name="Get",description="Get Event details")
    @GetMapping
    public ResponseEntity<List<Addevdto>> getAllServices() {
        List<Addevdto> services = addservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
    @Tag(name="Post",description="Add the events details")
    @PostMapping
    public ResponseEntity<Addevdto> createService(@RequestBody Addevdto service) {
        Addevdto createdService = addservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }
    @Tag(name="Update",description="Update the details")
@PutMapping("/{eventid}")
    public ResponseEntity<Addevdto> updateServiceByEventId(@PathVariable String eventid, @RequestBody Addevdto updatedServiceDto) {
        // Convert eventid from String to Long
        Long eventIdLong;
        try {
            eventIdLong = Long.parseLong(eventid);
        } catch (NumberFormatException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Addevdto updatedService = addservice.updateServiceByEventId(eventIdLong, updatedServiceDto);
        if (updatedService != null) {
            return new ResponseEntity<>(updatedService, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Tag(name="Delete",description="Delete the event details")
    @DeleteMapping("/{eventid}")
    public ResponseEntity<Void> deleteServiceByEventId(@PathVariable String eventid) {
        // Convert eventid from String to Long
        Long eventIdLong;
        try {
            eventIdLong = Long.parseLong(eventid);
        } catch (NumberFormatException e) {
            // If the conversion fails, respond with a 400 Bad Request
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            addservice.deleteServiceByEventId(eventIdLong);
            // If deletion is successful, respond with a 204 No Content
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (EntityNotFoundException e) {
            // If the service to delete is not found, respond with a 404 Not Found
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @Tag(name="Get",description="Get the details by id")
    @GetMapping("/{eventid}")
    public ResponseEntity<Addevdto> getServiceByEventId(@PathVariable String eventid) {
        // Convert eventid from String to Long
        Long eventIdLong;
        try {
            eventIdLong = Long.parseLong(eventid);
        } catch (NumberFormatException e) {
            // If the conversion fails, respond with a 400 Bad Request
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            Addevdto service = addservice.getServiceByEventId(eventIdLong);
            return new ResponseEntity<>(service, HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            // If the service is not found, respond with a 404 Not Found
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // @PutMapping("/{name}")
    // public ResponseEntity<Addevdto> updateServiceByName(@PathVariable String name, @RequestBody Addevdto updatedService) {
    //     Addevdto updatedServiceDto = addservice.updateServiceByName(name, updatedService);
    //     if (updatedServiceDto != null) {
    //         return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
    //     } else {
    //         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    //     }
    // }

    // @DeleteMapping("/de")
    // public ResponseEntity<Void> deleteServiceByid(@PathVariable String eventid) {
    //     addservice.deleteServiceByid(eventid);
    //     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    // }
}