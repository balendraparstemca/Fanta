
  // Animate the h1 element
  gsap.timeline()
  .from('.fanta > .one > h1', { 
    xPercent: -10, 
    duration: 1 
  }, '<')

  // Animate the #fanta element
  .from('.fanta > .one > #fanta', { 
    xPercent: 100, 
    duration: 1 
  }, '<')
  .to('.fanta > .one > #fanta', { 
    rotation: 0, 
    duration: 1 
  }, '<')

  // Animate all img elements except #fanta
  .to('.fanta > .one > img:not(#fanta,#tree)', { 
    xPercent: 10, 
    rotation: 10, 
    duration: 3, 
    ease: "power1.inOut", 
    yoyo: true, 
    repeat: -1 
  }, '<')

  .to('.fanta > .one > #tree', { 
    // xPercent: 10, 
    rotation: -3, 
    duration: 3, 
    ease: "power1.inOut", 
    yoyo: true, 
    repeat: -1 
  }, '<')

  // Animate the #orange-cut2 element
  .to('.fanta > .one > #orange-cut2', { 
    xPercent: -150, 
    rotation: -160, 
    duration: 10, 
    ease: "power1.inOut", 
    yoyo: true, 
    repeat: -1 
  }, '<')
  

  function createChocoRain() {
    const leaves = ['#leaf', '#leaf2', '#leaf3'];
    const totalLeaves = 1000; // Increase the number of leaves for a dense rain effect
    const timeline = gsap.timeline();
    // Dynamically clone and add leaves to the DOM
    const container = document.querySelector('.fanta > .one');
    for (let i = 0; i < totalLeaves; i++) {
      const randomLeaf = leaves[Math.floor(Math.random() * leaves.length)];
      const newLeaf = document.createElement('img');
      newLeaf.src = document.querySelector(randomLeaf).src;
      newLeaf.className = 'falling-leaf';
      newLeaf.style.position = 'absolute';
      newLeaf.style.width = '50px'; // Adjust size if necessary
      newLeaf.style.pointerEvents = 'none';
      newLeaf.style.left = `${Math.random() * window.innerWidth - 70}px`;
      newLeaf.style.top = `-50px`;
      container.appendChild(newLeaf);
    }
    let yval=Math.random() * 2 + 100
    // Animate all the falling leaves
    timeline.to('.falling-leaf', {
      y: () => `${yval}vh`, // Fall to the bottom of the screen
      x:0,
      // x: , // Slightly randomize x during fall
      rotation: () => Math.random() * 360, // Random rotation
      duration: () => Math.random() * 2 + 1, // Faster fall duration (1-3 seconds)
      ease: "power1.out", // Smooth easing
      repeat: 0, // Infinite loop
      delay: () => Math.random() * 0.5, // Very small stagger for parallel rain
      onRepeat: function () {
        // Reset leaf to a random position at the top of the screen
        this.targets().forEach(target => {
          target.style.left = `${Math.random() * window.innerWidth - 70}px`;
          target.style.top = `-50px`; // Start above the visible screen
        });
      }
    });

  
  }
function createRepeatingChocoRain() {
    const leaves = ['#leaf', '#leaf2', '#leaf3'];
    const repeatingLeavesCount = 20; // Number of leaves that repeat
    const container = document.querySelector('.fanta > .one');
  
    // Function to create repeating leaves
    function createRepeatingChoco() {
      const randomLeaf = leaves[Math.floor(Math.random() * leaves.length)];
      const newLeaf = document.createElement('img');
      newLeaf.src = document.querySelector(randomLeaf).src;
      newLeaf.className = 'repeating-leaf';
      newLeaf.style.position = 'absolute';
      newLeaf.style.width = '50px';
      newLeaf.style.pointerEvents = 'none';
      newLeaf.style.left = `${Math.random() * window.innerWidth - 70}px`;
      newLeaf.style.top = `-50px`;
      container.appendChild(newLeaf);
    }
  
    // Create repeating leaves
    for (let i = 0; i < repeatingLeavesCount; i++) {
      createRepeatingChoco();
    }
  
    // Animate repeating leaves
    gsap.to('.repeating-leaf', {
      y: '100vh',
      x:0, // Randomize horizontal sway
      rotation: () => Math.random() * 360, // Random rotation
      duration: 5, // Fall duration
      ease: "power1.out",
      repeat: -1, // Infinite loop
      delay: () => Math.random() * 0.5, // Stagger the start time
      onRepeat: function () {
        // Reset leaf to random position at the top
        this.targets().forEach(target => {
          target.style.left = `${Math.random() * window.innerWidth - 70}px`;
          target.style.top = `-50px`;
        });
      }
    });
  }
  
  // Initialize the leaf rain effect
//   createLeafRain();
createChocoRain();
createRepeatingChocoRain();

  


var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

const radius = 100; // Adjust the radius of the circle
const centerX = 50; // X center position (percentage)
const centerY = 50; // Y center position (percentage)
const numItems = 1; // Number of Fanta bottles (adjust this number to match)

// Loop through each bottle and position it in a circle
for (let i = 0; i < numItems; i++) {
    const angle = (i / numItems) * 2 * Math.PI; // Evenly space the bottles
    const x = centerX + Math.cos(angle) * radius; // X position on circle
    const y = centerY + Math.sin(angle) * radius; // Y position on circle

    tl.to(`#fanta${i}`, {
        top: `${y}%`,  // Set the Y position
        left: `${x}%`, // Set the X position
        rotate: (angle * 180 / Math.PI), // Optionally rotate based on position
    }, 'orange');
}

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')
tl.to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')



var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 105%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')


gsap.fromTo(".fantatag", {
  scale: 0.5,        // Start small
  opacity: 0,        // Start invisible
  left: "10%",       // Start from 10% from the left
  bottom: "0%",      // Start at the bottom of the container
}, {
  scale: 1.5,        // End at 1.5x size
  opacity: 1,        // Fully visible at the end
  bottom: "16%",     // Move upwards (adjust as needed)
  left: "8%",       // Move horizontally (adjust as needed)
  ease: "power4.out", // Smooth easing
  scrollTrigger: {
    trigger: ".five",  // Trigger when `.four` is scrolled into view
    start: "0% 70%",   // Trigger when `.four` is just below the viewport
    end: "100% 50%",    // End when `.four` reaches the middle of the viewport
    scrub: true,        // Sync animation with scroll progress
    // markers: true,    // Uncomment for debugging scroll positions
  }
});

gsap.fromTo(".kartik", {
  scale: 1,        // Start small
  opacity: 0,        // Start invisible
  right: "24%",      // Start from the right side of the container
  bottom: "16%",      // Start at the bottom of the container
}, {
  scale: 2,        // End at 1.5x size
  opacity: 1,        // Fully visible at the end
  bottom: "24%",     // Move upwards (adjust as needed)
  // right: "20.5%",      // Move horizontally to the right (adjust as needed)
  ease: "power4.out", // Smooth easing
  scrollTrigger: {
    trigger: ".five",  // Trigger when `.four` is scrolled into view
    start: "0% 70%",   // Trigger when `.four` is just below the viewport
    end: "100% 50%",    // End when `.four` reaches the middle of the viewport
    scrub: true,        // Sync animation with scroll progress
    // markers: true,    // Uncomment for debugging scroll positions
  }
});


///Gallery
let iteration = 0; // keeps track of playhead iterations

// Set initial state of items
gsap.set('.cards li', {xPercent: 400, opacity: 0, scale: 0});

const spacing = 0.1, // spacing of the cards (stagger)
    snapTime = gsap.utils.snap(spacing), // we'll use this to snap the playhead on the seamless loop
    cards = gsap.utils.toArray('.cards li'),
    // Animation function for each card
    animateFunc = element => {
        const tl = gsap.timeline();
        tl.fromTo(element, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false})
          .fromTo(element, {xPercent: 400}, {xPercent: -400, duration: 1, ease: "none", immediateRender: false}, 0);
        return tl;
    },
    seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
    playhead = {offset: 0}, // proxy object for playhead position
    wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()), // ensures time wrapping
    scrub = gsap.to(playhead, {
        offset: 0,
        onUpdate() {
            seamlessLoop.time(wrapTime(playhead.offset)); // Updates seamless loop time based on offset
        },
        duration: 0.5,
        ease: "power3",
        paused: true
    });

// Automatically advance the carousel
let autoSlideInterval = setInterval(() => {
    slideToOffset(scrub.vars.offset + spacing);
}, 2000); // Adjust the interval duration (2000ms = 2 seconds)

// Move to the next or previous slide manually
document.querySelector(".next").addEventListener("click", () => {
    resetAutoSlide(); // Reset auto-slide interval
    slideToOffset(scrub.vars.offset + spacing);
});

document.querySelector(".prev").addEventListener("click", () => {
    resetAutoSlide(); // Reset auto-slide interval
    slideToOffset(scrub.vars.offset - spacing);
});

// Reset auto-slide timer when user interacts with controls
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        slideToOffset(scrub.vars.offset + spacing);
    }, 2000);
}

// Helper to slide to a specific offset
function slideToOffset(offset) {
    scrub.vars.offset = offset;
    scrub.invalidate().restart();
}

// Build seamless loop animation
function buildSeamlessLoop(items, spacing, animateFunc) {
    let rawSequence = gsap.timeline({paused: true}), // where all animations live
        seamlessLoop = gsap.timeline({
            paused: true,
            repeat: -1,
            onRepeat() {
                this._time === this._dur && (this._tTime += this._dur - 0.01);
            },
            onReverseComplete() {
                this.totalTime(this.rawTime() + this.duration() * 100); // seamless looping backwards
            }
        }),
        cycleDuration = spacing * items.length,
        dur; // duration of a single animation

    // Add extra cycles at the start and end
    items.concat(items).concat(items).forEach((item, i) => {
        let anim = animateFunc(items[i % items.length]);
        rawSequence.add(anim, i * spacing);
        dur || (dur = anim.duration());
    });

    seamlessLoop.fromTo(rawSequence, {
        time: cycleDuration + dur / 2
    }, {
        time: "+=" + cycleDuration,
        duration: cycleDuration,
        ease: "none"
    });

    return seamlessLoop;
}