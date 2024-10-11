const toplinks = document.querySelectorAll('.toplink');

toplinks.forEach(link => {
    const dropdown = link.querySelector('.dropdown');

    link.addEventListener('mouseover', () => {
        dropdown.style.visibility = 'visible'; // visible
        dropdown.style.opacity = '1'; // fade in
    });

    link.addEventListener('mouseleave', () => {
        dropdown.style.opacity = '0'; 
        setTimeout(() => {
            dropdown.style.visibility = 'hidden'; // visibility fading out
        }, 200); // Adjust timeout if needed for a smoother effect
    });
});

const topbar = document.querySelector('.topbar');
// Topbar scroll color change
function changeTopbarColorOnScroll() {
    if (window.scrollY > 5) {
        topbar.style.backgroundColor = '#1b1b1b';
    } else {
        topbar.style.backgroundColor = 'transparent'; 
    }
}

window.addEventListener('scroll', changeTopbarColorOnScroll);




//leftnavlist





const leftnavlist = document.querySelector('.leftnavlist');
const rightnavlist = document.querySelector('.rightnavlist'); // Add this line
const triggerElement = document.querySelector('#madesimple'); // Change to your specific selector

window.addEventListener('scroll', () => {
    // Get the position of the trigger element
    const triggerPosition = triggerElement.getBoundingClientRect().top + window.scrollY;

    // Check if the user has scrolled past the trigger element
    if (window.scrollY > triggerPosition) {
        // Add the 'visible' class to leftnavlist after a delay of 0.5 seconds if not already visible
        if (!leftnavlist.classList.contains('visible')) {
            setTimeout(() => {
                leftnavlist.classList.add('visible');
            }, 800);
        }
        // Add the 'visible' class to rightnavlist after a delay of 0.5 seconds if not already visible
        if (!rightnavlist.classList.contains('visible')) {
            setTimeout(() => {
                rightnavlist.classList.add('visible');
            }, 800);
        }
    } else {
        // Remove the 'visible' class if the user scrolls back up
        leftnavlist.classList.remove('visible');
        rightnavlist.classList.remove('visible');
    }
});


// Select the elements where the scroll percentage and estimated time will be displayed
const percentScrolledElement = document.getElementById('percentscrolled');
const estFinishedElement = document.getElementById('estFinished');
let loadTime;

window.onload = () => {
    loadTime = performance.now();
};

// Function to calculate and display scroll information and estimated finish time
function updateScrollInfo() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = parseFloat(((scrollTop / docHeight) * 100).toFixed(1)); // Ensure this is a number

    // Calculate time since page load
    const currentTime = performance.now();
    const timeElapsed = (currentTime - loadTime) / 1000; // Convert to seconds

    // Calculate scroll percent per second
    const scrollRate = scrollPercent / timeElapsed;

    // Estimate time remaining to reach 100%
    const timeRemaining = scrollRate > 0 ? ((100 - scrollPercent) / scrollRate) : Infinity;

    // Convert time remaining from seconds to minutes and seconds
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = Math.floor(timeRemaining % 60);

    // Format as mm:ss
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds} left`;

    // Display estimated finish time in minutes:seconds format
    estFinishedElement.textContent = formattedTime;
}


window.addEventListener('scroll', updateScrollInfo);




