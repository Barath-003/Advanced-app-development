package com.partyevent.partyevent.Controller;

import com.partyevent.partyevent.dto.Bookdto;
import com.partyevent.partyevent.service1.Bookservice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookevent")
public class Bookcontrooler {

    private final Bookservice bookservice;

    public Bookcontrooler(Bookservice bookservice) {
        this.bookservice = bookservice;
    }
    
    @GetMapping
    public ResponseEntity<List<Bookdto>> getAllServices() {
        List<Bookdto> services = bookservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{eve}")
    public ResponseEntity<Bookdto> getServiceByEntity(@PathVariable String eventType) {
        Bookdto service = bookservice.getServiceByName(eventType);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Bookdto> createService(@RequestBody Bookdto service) {
        Bookdto createdService = bookservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
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
    // public ResponseEntity<Void> deleteServiceByEv(@PathVariable String eventtype) {
    //     addservice.deleteServiceByName(eventtype);
    //     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    // }
}