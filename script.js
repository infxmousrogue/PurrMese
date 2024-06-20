// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    var anchorLinks = document.querySelectorAll('header nav ul li a[href^="#"]');
    
    for (var i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        if (answer.style.maxHeight) {
            // Collapse the current answer
            answer.style.maxHeight = null;
            answer.style.padding = '0 20px';
            button.style.backgroundColor = '#ff3300';
        } else {
            // Expand the current answer
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.maxHeight = null;
                ans.style.padding = '0 20px';
                ans.previousElementSibling.style.backgroundColor = '#ff3300';
            });
            answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
            answer.style.padding = '15px 20px';
            button.style.backgroundColor = '#b63313';
        }
    });
});

document.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.pageYOffset;
    const maxParallax = 100;  // Maximum parallax value in pixels
    const minParallax = 0;    // Minimum parallax value in pixels

    // Calculate the parallax effect within bounds
    const parallaxValue = Math.min(maxParallax, Math.max(minParallax, scrollPosition * 0.1));

    parallax.style.backgroundPositionY = parallaxValue + 'px';
});

// document.addEventListener('scroll', function () {
//     const roadmapSection = document.querySelector('.roadmap-section');
//     const scrollPosition = window.pageYOffset;
//     const parallaxEffect = scrollPosition * 0.3;  // Adjust the multiplier for desired effect
//     roadmapSection.style.backgroundPositionY = `${parallaxEffect}px`;
// });

document.addEventListener('DOMContentLoaded', function () {
    const points = document.querySelectorAll('.point');

    function revealPoints() {
        points.forEach(point => {
            const windowHeight = window.innerHeight;
            const elementTop = point.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                point.style.opacity = '1';
                point.style.transform = 'translateX(-50%) translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', revealPoints);
    revealPoints(); // Initial check
});

// document.addEventListener('scroll', function () {
//     const video = document.querySelector('.about-video');
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     video.style.transform = `translateY(${scrollTop * 0.2}px)`; // Adjust multiplier for subtlety
// });

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('about-video');
    const videoSource = video.querySelector('source');

    // List of video sources
    const videos = [
        'img/cat1.mp4',
        'img/cat2.mp4',
        'img/cat3.mp4',
        'img/cat4.mp4'
    ];

    // Randomly select a video
    const randomIndex = Math.floor(Math.random() * videos.length);
    const selectedVideo = videos[randomIndex];

    // Update the video source and load the video
    videoSource.src = selectedVideo;
    video.load();
});

