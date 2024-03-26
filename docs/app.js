'use strict'
/*
   Author: Emily Boucher
   Purpose: javascript to add user interactions to the page
   Last Modified: February 18, 2024
*/

document.addEventListener("DOMContentLoaded", function() {
   const prevBtn = document.getElementById("prevBtn");
   const nextBtn = document.getElementById("nextBtn");
   const carouselWrapper = document.querySelector(".carousel-wrapper");
   const slides = document.querySelectorAll(".carousel-slide");
   let currentIndex = 0;

   // Calculate slide width based on the first slide
   const slideWidth = slides[0].clientWidth;

   // Event listener for the previous button
   prevBtn.addEventListener("click", () => {
       // Update current index to move to the previous slide
       currentIndex = (currentIndex - 1 + slides.length) % slides.length;
       updateCarousel();
   });

   // Event listener for the next button
   nextBtn.addEventListener("click", () => {
       // Update current index to move to the next slide
       currentIndex = (currentIndex + 1) % slides.length;
       updateCarousel();
   });

   // Function to update the carousel display
   function updateCarousel() {
       // Calculate the horizontal offset based on the current index and slide width
       const offset = -currentIndex * slideWidth;
       // Apply the transformation to the carousel wrapper to display the desired slide
       carouselWrapper.style.transform = `translateX(${offset}px)`;
   }
   
   // Call updateCarousel() initially to display the first slide
   updateCarousel();
});