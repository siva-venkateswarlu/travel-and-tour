
package com.wandervista.wandervista.controller;

import com.wandervista.wandervista.entity.Booking;
import com.wandervista.wandervista.service.BookingService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "*")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    // =====================================
    // 1. CREATE NEW BOOKING
    // =====================================
    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.saveBooking(booking);
    }

    // =====================================
    // 2. GET ALL BOOKINGS
    // =====================================
    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    // =====================================
    // 3. GET BOOKING BY ID
    // =====================================
    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(
            @PathVariable Long id
    ) {
        Booking booking = bookingService.getBookingById(id);

        if (booking == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(booking);
    }

    // =====================================
    // 4. ACCEPT BOOKING
    // =====================================
    @PutMapping("/{id}/accept")
    public ResponseEntity<?> acceptBooking(
            @PathVariable Long id
    ) {
        try {
            Booking booking = bookingService.acceptBooking(id);

            return ResponseEntity.ok(booking);

        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());

        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(e.getMessage());
        }
    }

    // =====================================
    // 5. CANCEL BOOKING
    // =====================================
    @PutMapping("/{id}/cancel")
    public ResponseEntity<?> cancelBooking(
            @PathVariable Long id
    ) {
        try {
            Booking booking = bookingService.cancelBooking(id);

            return ResponseEntity.ok(booking);

        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());

        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(e.getMessage());
        }
    }

    // =====================================
    // 6. DELETE BOOKING
    // =====================================
    @DeleteMapping("/{id}")
    public String deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);

        return "Booking deleted successfully";
    }
}
