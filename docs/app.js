'use strict'
/*
   Author: Emily Boucher
   Purpose: javascript to add user interactions to the page
   Last Modified: February 18, 2024
*/

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);
//when i click left, move slides to the left
// when i click right, move slides to the right
//when i click the nav indicators, move to that slide