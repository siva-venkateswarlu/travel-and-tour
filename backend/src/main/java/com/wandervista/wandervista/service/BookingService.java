
package com.wandervista.wandervista.service;

import com.wandervista.wandervista.entity.Booking;
import com.wandervista.wandervista.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final EmailService emailService;

    // Constructor injection
    public BookingService(
            BookingRepository bookingRepository,
            EmailService emailService
    ) {
        this.bookingRepository = bookingRepository;
        this.emailService = emailService;
    }

    // ==========================================
    // 1. SAVE CUSTOMER BOOKING
    // ==========================================
    public Booking saveBooking(Booking booking) {

        // New bookings must always start as PENDING
        booking.setId(null);
        booking.setStatus("PENDING");

        // Save booking in MySQL
        Booking savedBooking = bookingRepository.save(booking);

        // Send customer confirmation email
        try {
            emailService.sendBookingReceivedEmail(
                    savedBooking.getEmail(),
                    savedBooking.getName(),
                    savedBooking.getDestination()
            );

            System.out.println(
                    "Customer confirmation email sent."
            );

        } catch (Exception e) {
            System.err.println(
                    "Customer email failed: " + e.getMessage()
            );
        }

        // Send admin notification email
        try {
            emailService.sendAdminBookingNotification(savedBooking);

            System.out.println(
                    "Admin booking notification email sent."
            );

        } catch (Exception e) {
            System.err.println(
                    "Admin email failed: " + e.getMessage()
            );
        }

        return savedBooking;
    }

    // ==========================================
    // 2. GET ALL BOOKINGS
    // ==========================================
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // ==========================================
    // 3. GET BOOKING BY ID
    // ==========================================
    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    // ==========================================
    // 4. ACCEPT BOOKING
    // ==========================================
    public Booking acceptBooking(Long id) {

        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException(
                        "Booking not found with ID: " + id
                ));

        // Only pending bookings can be accepted
        if (!"PENDING".equals(booking.getStatus())) {
            throw new IllegalStateException(
                    "Only PENDING bookings can be accepted."
            );
        }

        // Update booking status
        booking.setStatus("ACCEPTED");

        // Save updated status in MySQL
        Booking updatedBooking = bookingRepository.save(booking);

        // Send acceptance email to customer
        try {
            emailService.sendBookingAcceptedEmail(
                    updatedBooking.getEmail(),
                    updatedBooking.getName(),
                    updatedBooking.getDestination()
            );

            System.out.println(
                    "Booking acceptance email sent."
            );

        } catch (Exception e) {
            System.err.println(
                    "Acceptance email failed: " + e.getMessage()
            );
        }

        return updatedBooking;
    }

    // ==========================================
    // 5. CANCEL BOOKING
    // ==========================================
    public Booking cancelBooking(Long id) {

        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException(
                        "Booking not found with ID: " + id
                ));

        // Only pending bookings can be cancelled
        if (!"PENDING".equals(booking.getStatus())) {
            throw new IllegalStateException(
                    "Only PENDING bookings can be cancelled."
            );
        }

        // Update booking status
        booking.setStatus("CANCELLED");

        // Save updated status in MySQL
        Booking updatedBooking = bookingRepository.save(booking);

        // Send cancellation email to customer
        try {
            emailService.sendBookingCancelledEmail(
                    updatedBooking.getEmail(),
                    updatedBooking.getName(),
                    updatedBooking.getDestination()
            );

            System.out.println(
                    "Booking cancellation email sent."
            );

        } catch (Exception e) {
            System.err.println(
                    "Cancellation email failed: " + e.getMessage()
            );
        }

        return updatedBooking;
    }

    // ==========================================
    // 6. DELETE BOOKING
    // ==========================================
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}

