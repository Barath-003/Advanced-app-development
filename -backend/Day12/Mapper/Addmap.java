package com.partyevent.partyevent.Mapper;

import com.partyevent.partyevent.dto.Addevdto;
import com.partyevent.partyevent.Entity.Addevent;

public class Addmap{

    public static Addevdto maptoServicedto(Addevent serviceentity) {
        // Implement the mapping logic
        return new Addevdto(
                serviceentity.getEventid(),
                serviceentity.getEventtype(),
                serviceentity.getDescription(),
                serviceentity.getCharge(),
                serviceentity.getCount(),
                serviceentity.getCharge()
        );
    }

    public static Addevent maptoServiceentity(Addevdto servicedto) {
        // Implement the mapping logic
        return new Addevent(
                servicedto.getEventid(),
                servicedto.getEventtype(),
                servicedto.getDescription(),
                servicedto.getCharge(),
                servicedto.getCount(),
                servicedto.getCharge()
        );
    }
}