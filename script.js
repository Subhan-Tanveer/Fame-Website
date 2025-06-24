
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;


  
  let currentIndex = 0;

  function showSlide(index) {
    sliderTrack.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }
    showSlide(currentIndex);
  }

  document.querySelector('.right-arrow').addEventListener('click', nextSlide);
  document.querySelector('.left-arrow').addEventListener('click', prevSlide);

  setInterval(nextSlide, 2000);


  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.section5');
    const bars = section.querySelectorAll('.progress-bar');

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        bars.forEach(bar => {
          bar.style.width = bar.dataset.percent;
        });
        obs.unobserve(section);
      });
    }, { threshold: 0.3 });

    io.observe(section);
  });



  document.addEventListener('DOMContentLoaded', () => {
    const section7 = document.querySelector('.section7');
    const counters = section7.querySelectorAll('h1');

    // Animate a single counter from 0 → target over `duration` ms
    function animateCount(el, target, duration = 1500) {
      let start = null;
      const initial = 0;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        // easeOutQuad timing function
        const t = Math.min(progress / duration, 1);
        const eased = 1 - Math.pow(1 - t, 2);
        el.innerText = Math.floor(eased * (target - initial) + initial);
        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          el.innerText = target; // ensure exact final value
        }
      }
      requestAnimationFrame(step);
    }

    // IntersectionObserver to trigger when section7 scrolls into view
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        // Kick off each counter
        counters.forEach(el => {
          const finalValue = parseInt(el.innerText, 10);
          animateCount(el, finalValue, 2000);
        });
        obs.unobserve(section7); // only once
      });
    }, { threshold: 0.4 });

    io.observe(section7);
  });


    const people = [
    {
      name: "Jon Doe",
      role: "Organization Founder",
      image: "face_1.png",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit..."
    },
    {
      name: "Jane Doe",
      role: "Lead Developer",
      image: "face_2.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      name: "Jon Doe",
      role: "Honourable Customer",
      image: "face_3.png",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem..."
    }
  ];



let currentIndex1 = 0;
  const imgEl = document.getElementById("person-img");
  const nameEl = document.getElementById("person-name");
  const roleEl = document.getElementById("person-role");
  const descEl = document.getElementById("person-desc");
  const profileContainer = document.getElementById("profile");

  function updateProfile(index) {
    profileContainer.classList.add("fade-out");

    setTimeout(() => {
      imgEl.src = people[index].image;
      nameEl.textContent = people[index].name;
      roleEl.textContent = people[index].role;
      descEl.textContent = people[index].desc;

      profileContainer.classList.remove("fade-out");
    }, 500); // matches CSS transition time
  }

  function nextPerson() {
    currentIndex1 = (currentIndex1 + 1) % people.length;
    updateProfile(currentIndex1);
  }

  function prevPerson() {
    currentIndex1 = (currentIndex1 - 1 + people.length) % people.length;
    updateProfile(currentIndex1);
  }

  // Auto change every 2 seconds
  setInterval(nextPerson, 2000);

  // Initialize
  updateProfile(currentIndex1);

document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".navlinks");

        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    });


const slider = document.querySelector('.checkout');
  const cards = document.querySelectorAll('.checkout-container');
  const visibleCards = 3;
  const totalOriginal = cards.length;
  let index = 0;

  // Clone first few cards and append to end for smooth loop
  for (let i = 0; i < visibleCards; i++) {
    const clone = cards[i].cloneNode(true);
    slider.appendChild(clone);
  }

  // Calculate width dynamically
  const cardWidth = cards[0].offsetWidth;

  function slide() {
    index++;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${index * cardWidth}px)`;

    // Reset to original position after the last clone
    if (index === totalOriginal) {
      setTimeout(() => {
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
        index = 0;
      }, 500); // matches transition duration
    }
  }

  setInterval(slide, 2000);


  