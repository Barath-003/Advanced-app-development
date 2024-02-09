
package com.partyevent.partyevent.Repository;

import com.partyevent.partyevent.Entity.Book;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
// import java.util.List;


@Repository
public interface Bookrepo extends JpaRepository<Book, Long> {
    Book findByEventType(String eventType);
    // void deleteByEventtype(String eventtype);
    // Other methods...
}