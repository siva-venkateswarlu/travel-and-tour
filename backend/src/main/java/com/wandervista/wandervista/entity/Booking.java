
package com.wandervista.wandervista.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String phone;

    private String destination;

    private LocalDate travelDate;

    private Integer travelers;

    private String tripStyle;

    @Column(length = 1000)
    private String message;

    // NEW: Booking status
    @Column(nullable = false)
    private String status = "PENDING";

    // Default constructor
    public Booking() {
    }

    // Booking ID
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Customer name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Customer email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Customer phone
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    // Destination
    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    // Travel date
    public LocalDate getTravelDate() {
        return travelDate;
    }

    public void setTravelDate(LocalDate travelDate) {
        this.travelDate = travelDate;
    }

    // Number of travelers
    public Integer getTravelers() {
        return travelers;
    }

    public void setTravelers(Integer travelers) {
        this.travelers = travelers;
    }

    // Trip style
    public String getTripStyle() {
        return tripStyle;
    }

    public void setTripStyle(String tripStyle) {
        this.tripStyle = tripStyle;
    }

    // Customer message
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    // NEW: Get booking status
    public String getStatus() {
        return status;
    }

    // NEW: Update booking status
    public void setStatus(String status) {
        this.status = status;
    }
}
