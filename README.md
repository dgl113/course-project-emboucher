[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/swIBozRZ)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=13724574)
# DGL113 Course Project
1. This is the initial DGL113 project repository readme file. When you view this file, it means you have accepted the project and cloned the initial repository. There is no starting file other than this readme for the project. You will create your own files based on your proposal and design, add them to the docs/ folder, then push your work back to GitHub.
1. Write your project proposal directly in this file in the section below. At a minimum, you should describe what a website you are going to work on and the 3 features that you plan to implement. See the project description on Brightspace for more details.
1. <b>This part of the project is due Mon. Feb. 26 at 11:59pm.</b>
# Project Proposal

## Website Overview

The website I hvae chosen to work on was my final project for DGL103 CSS & HTML, and was made for the Comox Valley Farmer's Market. It showcases 3 pages, inclusive of a homepage, a page about the upcoming markets, and a page with details on how to join the community as a shopper, vendor, or volunteer. The three JS features I want to add are a carousel, a form validation, and a top/bottom scroll. These features will add value to the website and improve user interface and experience. 

### UI feature 1 Carousel

1. Market Carousel on the "Our Markets Page"
1. Turning the different market tiles into a carasol will improve the user interface and user experience by allowing users to view multiple market tiles by scrolling horizontally.
1. sliding carousel using JavaScript, users visiting the "Our Markets" page will be able to easily navigate through the various market tiles to explore different markets and their details.

- HTML Structure: First, I'll ensure that the market tiles are structured within a container element, such as a <div>, with the appropriate class or ID for targeting in JavaScript.
- CSS Styling: I'll style the container element and the individual market tiles using CSS, setting their widths, heights, margins, and any other necessary properties to ensure they display properly within the carousel.
- Initialize Variables: I'll define variables to store references to the container element, individual market tiles, and any other relevant elements.
- attach event listeners, such as click handlers, to arrow buttons or navigation indicators to control the sliding motion of the carousel.
- calculate the amount by which to translate the container element horizontally when the user navigates to the next or previous set of market tiles. This will create the sliding effect.
- implement logic to handle boundary conditions, ensuring that the carousel loops back to the beginning or end when the user reaches the end or beginning of the market tiles.
- test the carousel functionality across different devices and browsers to ensure a smooth user experience. I'll refine the JavaScript code and CSS styles as needed to address any issues or improve performance.

### UI feature 2 Form Validation
1. Located on the home page
1. Will involve validating the form inputs, and ensuring that users provide accurate information before submitting the form
1. Will be done in real-time as users interact with the form fields
1. Real-time form validation using JavaScript
1. helping to correct any errors before submitting the information.
1. enhances the user experience and ensures the accuracy of the data submitted through the form.


- Attach event listeners to the form inputs to detect user interactions such as typing, focusing, or blurring.
- Create JavaScript functions to validate each form field based on specific criteria, such as required fields, email format, or character limits.
- As users interact with the form fields, trigger the validation functions to check the input values. Display error messages dynamically next to invalid fields or as a summary above the form.
- Prevent form submission if any validation errors are detected. Only allow submission when all inputs are valid.
- Provide visual indicators such as colored borders or icons to indicate the validation status of each field (valid, invalid, or pending).

### UI Feature 3 Scroll to Top Button
1. located on all pages of the farmers market website 
1. add a "Scroll to Top" button where users are able to quickly navigate back to the top of the page
1. Enhancing user experience by providing convenient access to the top of the page without manual scrolling.

- Detect Scroll Position by attaching a scroll event listener to the window object to detect when the user scrolls down the page
- Monitor the scroll position and dynamically show or hide the "Scroll to Top" button based on a predefined threshold. When the user scrolls past a certain point, display/hide the button.
- implement smooth scrolling functionality when the button is clicked. Upon clicking the button, smoothly animate the page back to the top using JavaScript's scrollTo or animate methods.
- Ensure the button is accessible to all users, including those using assistive technologies such as screen readers. Use semantic HTML and ARIA attributes to enhance accessibility.