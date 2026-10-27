
package com.wandervista.wandervista.repository;

import com.wandervista.wandervista.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}

