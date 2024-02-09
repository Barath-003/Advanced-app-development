package com.partyevent.partyevent.service1;

import com.partyevent.partyevent.dto.Addevdto;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

import com.partyevent.partyevent.Entity.Addevent;
import com.partyevent.partyevent.Mapper.Addmap;
import com.partyevent.partyevent.Repository.Addrepo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Addservice {

    private final Addrepo serviceRepo;

    public Addservice(Addrepo serviceRepo) {
        this.serviceRepo = serviceRepo;
    }

    public List<Addevdto> getAllServices() {
        List<Addevent> services = serviceRepo.findAll();
        return services.stream()
                .map(Addmap::maptoServicedto)
                .collect(Collectors.toList());
    }

    // public Addevdto getServiceByName(String eventid) {
    //     Addevent serviceentity = serviceRepo.findByEventtype(eventid);
    //     return Addmap.maptoServicedto(serviceentity);
    // }

    
    @SuppressWarnings("null")
    public Addevdto createService(Addevdto servicedto) {
        Addevent serviceentity = Addmap.maptoServiceentity(servicedto);
        serviceentity = serviceRepo.save(serviceentity);
        return Addmap.maptoServicedto(serviceentity);
    }
    @Transactional
    public Addevdto updateServiceByEventId(Long eventid, Addevdto updatedServicedto) {
        Addevent existingService = serviceRepo.findById(eventid)
                .orElseThrow(() -> new EntityNotFoundException("Service not found for event ID: " + eventid));
        existingService.setEventtype(updatedServicedto.getEventtype());
        existingService.setDescription(updatedServicedto.getDescription());
        existingService.setEpackage(updatedServicedto.getEpackage());
        existingService.setCount(updatedServicedto.getCount());
        existingService.setCharge(updatedServicedto.getCharge());

        existingService = serviceRepo.save(existingService);
        return Addmap.maptoServicedto(existingService);
    }
    public Addevdto getServiceByEventId(Long eventid) {
        Addevent addentity = serviceRepo.findById(eventid)
                .orElseThrow(() -> new EntityNotFoundException("Service not found for event ID: " + eventid));
        return Addmap.maptoServicedto(addentity);
    }
    @Transactional
    public void deleteServiceByEventId(Long eventid) {
        if (!serviceRepo.existsById(eventid)) {
            throw new EntityNotFoundException("Service not found for event ID: " + eventid);
        }
        serviceRepo.deleteById(eventid);
    }
    // public Addevdto updateServiceByName(String name, Servicedto updatedServicedto) {
    //     Serviceentity existingService = serviceRepo.findByName(name);

    //     if (existingService != null) {
    //         // Update the fields you want to allow updating
    //         existingService.setEmail(updatedServicedto.getEmail());
    //         existingService.setMobile(updatedServicedto.getMobile());
    //         existingService.setTrainer(updatedServicedto.getTrainer());
    //         existingService.setGoal(updatedServicedto.getGoal());

    //         existingService = serviceRepo.save(existingService);
    //         return Servicemapper.maptoServicedto(existingService);
    //     } else {
    //         // Handle not found scenario
    //         return null;
    //     }
    // }

    // public void deleteServiceByName(String eventid) {
    //     serviceRepo.deleteById(eventid);
    // }
}