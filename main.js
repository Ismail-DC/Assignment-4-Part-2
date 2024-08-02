// Array of image filenames for the gallery
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Array of alternative text for each image
const imageAltTexts = [
  'Closeup of a blue human eye',
  'A rocky mountain scenery',
  'A beautiful sunset over the ocean',
  'A dense forest with tall trees',
  'A city skyline at night'
];

// Reference to the thumb-bar container where thumbnails will be added
const thumbBar = document.querySelector('.thumb-bar');

// Reference to the full-size displayed image
const displayedImage = document.querySelector('.displayed-img');

// Reference to the overlay div used for darken/lighten effect
const overlay = document.querySelector('.overlay');

// Reference to the darken/lighten button
const btn = document.querySelector('button');

// Loop through image filenames to create and append thumbnail images
for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img'); // Create a new img element
  newImage.setAttribute('src', `images/${imageFilenames[i]}`); // Set src attribute
  newImage.setAttribute('alt', imageAltTexts[i]); // Set alt attribute
  thumbBar.appendChild(newImage); // Append the new img element to thumb-bar

  // Add click event listener to each thumbnail image
  newImage.addEventListener('click', (e) => {
    // Update the displayed image src and alt attributes based on clicked thumbnail
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
    displayedImage.setAttribute('alt', e.target.getAttribute('alt'));
  });
}

// Add click event listener to the darken/lighten button
btn.addEventListener('click', () => {
  // Get the current class of the button
  const btnClass = btn.getAttribute('class');
  
  if (btnClass === 'dark') {
    // If the button is in 'dark' state, switch to 'light' state
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten'; // Change button text
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'; // Set overlay to semi-transparent
  } else {
    // If the button is in 'light' state, switch to 'dark' state
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken'; // Change button text back
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'; // Remove the overlay
  }
});
