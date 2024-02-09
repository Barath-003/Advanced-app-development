package com.partyevent.partyevent.service1;

import com.partyevent.partyevent.dto.Bookdto;
import com.partyevent.partyevent.Entity.Book;
import com.partyevent.partyevent.Mapper.Bookmap;
import com.partyevent.partyevent.Repository.Bookrepo;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class Bookservice {

    private final Bookrepo bookRepo;

    public Bookservice(Bookrepo bookRepo) {
        this.bookRepo = bookRepo;
    }

    public List<Bookdto> getAllServices() {
        List<Book> services = bookRepo.findAll();
        return services.stream()
                .map(Bookmap::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Bookdto getServiceByName(String eventType) {
        Book serviceentity = bookRepo.findByEventType(eventType);
        return Bookmap.maptoServicedto(serviceentity);
    }

    @SuppressWarnings("null")
    public Bookdto createService(Bookdto servicedto) {
        Book serviceentity = Bookmap.maptoServiceentity(servicedto);
        serviceentity = bookRepo.save(serviceentity);
        return Bookmap.maptoServicedto(serviceentity);
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

    // public void deleteServiceByName(String eventtype) {
    //     serviceRepo.deleteByEventtype(eventtype);
    // }
}