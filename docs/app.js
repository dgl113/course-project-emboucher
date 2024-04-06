'use strict'
/*
   Author: Emily Boucher
   Purpose: javascript to add user interactions to the page
   Last Modified: April 2, 2024
*/

//CAROUSEL JAVASCRIPT ON OURMARKETS PAGE
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Move to the selected slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// Update the navigation dots
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// Show or hide navigation arrows
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// Handle click on left arrow button
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// Handle click on right arrow button
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// Handle click on navigation dots
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button')

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

// SCROLL TO TOP JAVASCRIPT CODE

       // Show or hide the scroll-to-top button based on scroll position
       window.addEventListener('scroll', () => {
        const goTopBtn = document.querySelector('.go-top-btn');
        if (window.scrollY > 20) {
            goTopBtn.classList.add("show");
        } else {
            goTopBtn.classList.remove("show");
        }
    });

    // Scroll smoothly to the top of the page with custom animation
    function scrollToTop() {
        const scrollingElement = document.scrollingElement || document.documentElement;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        const startTop = scrollingElement.scrollTop;

        const easeInOutCubic = (t, b, c, d) => {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        };

        const scroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const duration = 800; // Adjust scroll duration here (in milliseconds)
            const top = easeInOutCubic(elapsedTime, startTop, -startTop, duration);

            scrollingElement.scrollTop = top;

            if (elapsedTime < duration) {
                // Continue scrolling
                requestAnimationFrame(scroll);
            } else {
                // Animation finished
                scrollingElement.scrollTop = 0;
            }
        };

        // Start scrolling animation
        requestAnimationFrame(scroll);
    }

// FORM VALIDATION

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
  
    // Handle form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        // Display success messages and submit the form
        displaySuccessMessage(firstNameInput);
        displaySuccessMessage(lastNameInput);
        displaySuccessMessage(emailInput);
        // Uncomment the following line if you want to submit the form
        // form.submit();
        // Reset form after submission
        form.reset();
      }
    });
  
    // Validate form inputs
    function validateForm() {
      let isValid = true;
  
      // Validate first name
      if (firstNameInput.value.trim() === '') {
        displayError(firstNameInput, 'First name is required');
        isValid = false;
      } else {
        hideError(firstNameInput);
      }
  
      // Validate last name
      if (lastNameInput.value.trim() === '') {
        displayError(lastNameInput, 'Last name is required');
        isValid = false;
      } else {
        hideError(lastNameInput);
      }
  
      // Validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        displayError(emailInput, 'Invalid email address');
        isValid = false;
      } else {
        hideError(emailInput);
      }
  
      return isValid;
    }
  
    // Display error message
    function displayError(inputElement, errorMessage) {
      const errorContainer = inputElement.nextElementSibling;
      errorContainer.textContent = errorMessage;
      errorContainer.style.display = 'block';
    }
  
    // Hide error message
    function hideError(inputElement) {
      const errorContainer = inputElement.nextElementSibling;
      errorContainer.textContent = '';
      errorContainer.style.display = 'none';
    }
  
    // Display success message
    function displaySuccessMessage(inputElement) {
      alert(`${inputElement.name} submitted successfully!`);
    }
});