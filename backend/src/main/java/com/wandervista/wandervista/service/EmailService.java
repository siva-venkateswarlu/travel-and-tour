package com.wandervista.wandervista.service;

import com.wandervista.wandervista.entity.Booking;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;
    @Value("${app.admin.email}")
    private String adminEmail;

    @Value("${spring.mail.username}")
    private String senderEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // Send email when a booking is received
    public void sendBookingReceivedEmail(
            String customerEmail,
            String customerName,
            String destination
    ) {

        String subject = "WanderVista - Booking Request Received";

        String message =
                "Dear " + customerName + ",\n\n" +
                        "Thank you for choosing WanderVista!\n\n" +
                        "We have received your booking request.\n\n" +
                        "Destination: " + destination + "\n" +
                        "Status: PENDING\n\n" +
                        "Our team will review your booking request " +
                        "and contact you shortly.\n\n" +
                        "Best Regards,\n" +
                        "WanderVista Team";

        sendEmail(customerEmail, subject, message);
    }

    // Send email when admin accepts booking
    public void sendBookingAcceptedEmail(
            String customerEmail,
            String customerName,
            String destination
    ) {

        String subject = "WanderVista - Booking Accepted";

        String message =
                "Dear " + customerName + ",\n\n" +
                        "Good news! Your booking request has been accepted.\n\n" +
                        "Destination: " + destination + "\n" +
                        "Status: ACCEPTED\n\n" +
                        "Our team will contact you with the next steps.\n\n" +
                        "Best Regards,\n" +
                        "WanderVista Team";

        sendEmail(customerEmail, subject, message);
    }

    // Send email when admin cancels booking
    public void sendBookingCancelledEmail(
            String customerEmail,
            String customerName,
            String destination
    ) {

        String subject = "WanderVista - Booking Cancelled";

        String message =
                "Dear " + customerName + ",\n\n" +
                        "Your booking request has been cancelled.\n\n" +
                        "Destination: " + destination + "\n" +
                        "Status: CANCELLED\n\n" +
                        "For assistance, please contact our team.\n\n" +
                        "Best Regards,\n" +
                        "WanderVista Team";

        sendEmail(customerEmail, subject, message);
    }

    // Notify admin when a customer submits a booking
    public void sendAdminBookingNotification(Booking booking) {

        String subject =
                "WanderVista - New Booking Request #" + booking.getId();

        String message =
                "New Booking Request\n\n" +
                        "Booking ID: " + booking.getId() + "\n" +
                        "Customer Name: " + booking.getName() + "\n" +
                        "Email: " + booking.getEmail() + "\n" +
                        "Phone: " + booking.getPhone() + "\n" +
                        "Destination: " + booking.getDestination() + "\n" +
                        "Travel Date: " + booking.getTravelDate() + "\n" +
                        "Travelers: " + booking.getTravelers() + "\n" +
                        "Trip Style: " + booking.getTripStyle() + "\n" +
                        "Message: " + booking.getMessage() + "\n\n" +
                        "Please check the WanderVista Admin Dashboard."+
                        "http://localhost:8080/admin-dashboard.html";

        sendEmail(adminEmail, subject, message);
    }

    // Common method for sending emails
    private void sendEmail(
            String to,
            String subject,
            String message
    ) {

        SimpleMailMessage email = new SimpleMailMessage();

        email.setFrom(senderEmail);
        email.setTo(to);
        email.setSubject(subject);
        email.setText(message);

        mailSender.send(email);
    }
}
