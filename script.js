
document.addEventListener("DOMContentLoaded", () => {
  // Active navbar item
  const currentPage = document.body.dataset.page;
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });

  // Mobile menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Back to top
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("show", window.scrollY > 450);
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Testimonials
  const testimonials = [
    {
      name: "Ananya Sharma",
      trip: "Maldives Luxury Escape",
      rating: 5,
      text: "WanderVista made our Maldives vacation smooth and memorable. The resort was beautiful and the planning was excellent.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85"
    },
    {
      name: "Rahul Verma",
      trip: "Bali Tropical Adventure",
      rating: 5,
      text: "The Bali itinerary was perfectly planned. We enjoyed the villa, waterfalls, temples and every activity without any stress.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85"
    },
    {
      name: "Priya Reddy",
      trip: "European Grand Tour",
      rating: 5,
      text: "Our Europe trip was fantastic. Hotels, sightseeing and transfers were well organized. I would happily travel with WanderVista again.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=85"
    },
    {
      name: "Arjun Mehta",
      trip: "Dubai Holiday",
      rating: 4,
      text: "Great support and a very comfortable Dubai experience. The desert safari and city tour were the highlights of our trip.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85"
    }
  ];

  const image = document.getElementById("testimonialImage");
  const name = document.getElementById("testimonialName");
  const trip = document.getElementById("testimonialTrip");
  const rating = document.getElementById("testimonialRating");
  const text = document.getElementById("testimonialText");
  const dots = document.getElementById("testimonialDots");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");

  if (image && name && trip && rating && text && dots) {
    let index = 0;

    const renderDots = () => {
      dots.innerHTML = "";
      testimonials.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = "testimonial-dot" + (i === index ? " active" : "");
        dot.setAttribute("aria-label", `Show testimonial ${i + 1}`);
        dot.addEventListener("click", () => {
          index = i;
          renderTestimonial();
        });
        dots.appendChild(dot);
      });
    };

    const renderTestimonial = () => {
      const item = testimonials[index];
      image.src = item.image;
      image.alt = item.name;
      name.textContent = item.name;
      trip.textContent = item.trip;
      rating.textContent = "★".repeat(item.rating) + "☆".repeat(5 - item.rating);
      text.textContent = item.text;
      renderDots();
    };

    if (prev) {
      prev.addEventListener("click", () => {
        index = (index - 1 + testimonials.length) % testimonials.length;
        renderTestimonial();
      });
    }

    if (next) {
      next.addEventListener("click", () => {
        index = (index + 1) % testimonials.length;
        renderTestimonial();
      });
    }

    renderTestimonial();

    setInterval(() => {
      index = (index + 1) % testimonials.length;
      renderTestimonial();
    }, 6000);
  }

  // Booking form validation
  const bookingForm = document.getElementById("bookingForm");

  if (bookingForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const destinationInput = document.getElementById("destination");
    const dateInput = document.getElementById("travelDate");

    const setError = (id, message) => {
      const el = document.getElementById(id);
      if (el) el.textContent = message;
    };

    const clearErrors = () => {
      ["nameError", "emailError", "phoneError", "destinationError", "dateError"]
        .forEach(id => setError(id, ""));
    };

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    if (dateInput) dateInput.min = `${yyyy}-${mm}-${dd}`;

    bookingForm.addEventListener("submit", event => {
      event.preventDefault();
      clearErrors();

      let valid = true;

      if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
        setError("nameError", "Please enter at least 3 characters.");
        valid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        setError("emailError", "Please enter a valid email address.");
        valid = false;
      }

      const phonePattern = /^[6-9]\d{9}$/;
      if (!phonePattern.test(phoneInput.value.trim())) {
        setError("phoneError", "Enter a valid 10-digit Indian mobile number.");
        valid = false;
      }

      if (!destinationInput.value) {
        setError("destinationError", "Please select a destination.");
        valid = false;
      }

      if (!dateInput.value) {
        setError("dateError", "Please select your travel date.");
        valid = false;
      } else {
        const selectedDate = new Date(dateInput.value + "T00:00:00");
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        if (selectedDate < currentDate) {
          setError("dateError", "Travel date cannot be in the past.");
          valid = false;
        }
      }

      if (valid) {
        const popup = document.getElementById("successPopup");
        popup?.classList.add("show");
        popup?.setAttribute("aria-hidden", "false");
        bookingForm.reset();
      }
    });

    const closeSuccess = document.getElementById("closeSuccess");
    const popup = document.getElementById("successPopup");

    closeSuccess?.addEventListener("click", () => {
      popup?.classList.remove("show");
      popup?.setAttribute("aria-hidden", "true");
    });

    popup?.addEventListener("click", event => {
      if (event.target === popup) {
        popup.classList.remove("show");
        popup.setAttribute("aria-hidden", "true");
      }
    });
  }

  // Newsletter
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const input = form.querySelector(".newsletter-email");
      const message = form.parentElement.querySelector(".newsletter-message");

      if (input && input.checkValidity()) {
        message.textContent = "Thanks for subscribing!";
        form.reset();
      } else {
        message.textContent = "Please enter a valid email.";
      }
    });
  });
});

// Premium scroll reveal animations
(() => {
  const revealTargets = document.querySelectorAll(
    ".destination-card, .package-card, .service-card, .quick-card, " +
    ".testimonial-card, .gallery-card, .about-images, .about-content, " +
    ".contact-info, .booking-form, .stats-grid"
  );

  revealTargets.forEach(el => el.classList.add("reveal-item"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add("reveal-visible"));
  }
})();
/* ==============================
   PAGE CAROUSEL TRANSITION
============================== */

const nextPage = document.querySelector(".page-next");
const prevPage = document.querySelector(".page-prev");
const mainContent = document.querySelector("main");


if (nextPage) {

    nextPage.addEventListener("click", function (event) {

        event.preventDefault();

        const nextLink = this.href;

        mainContent.classList.add("page-slide-left");

        setTimeout(function () {

            window.location.href = nextLink;

        }, 400);

    });

}


if (prevPage) {

    prevPage.addEventListener("click", function (event) {

        event.preventDefault();

        const prevLink = this.href;

        mainContent.classList.add("page-slide-right");

        setTimeout(function () {

            window.location.href = prevLink;

        }, 400);

    });

}