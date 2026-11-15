function setSpacerHeight() {
  const spacer = document.querySelector('.scroll-spacer');
  const finalTrigger = 2400;
  const buffer = 100;
  const total = finalTrigger + buffer;
  spacer.style.height = (total + window.innerHeight) + 'px';
}
setSpacerHeight();
window.addEventListener('resize', setSpacerHeight);

document.addEventListener('scroll', () => {
  const t1 = document.getElementById('text1');
  const t2 = document.getElementById('text2');
  const t3 = document.getElementById('text3');
  const t4 = document.getElementById('text4');
  const t5 = document.getElementById('text5');
  const t6 = document.getElementById('text6');
  const menu = document.getElementById('mainMenu');
  const bg = document.querySelector('.bg-wrapper');

  let scrollY = window.scrollY;

  // Menu and background
  if (scrollY > 100) menu.classList.add('show');
  else menu.classList.remove('show');

  // Fade background out on the final section
  if (scrollY >= 2300) {
    bg.classList.add('hide-bg');
  } else {
    bg.classList.remove('hide-bg');
  }

  // Toggle text states
  if (scrollY < 400) {
    t1.className = 'text-node visible';
    t2.className = 'text-node hidden';
  } else if (scrollY >= 400 && scrollY < 900) {
    t1.className = 'text-node up';
    t2.className = 'text-node visible';
    t3.className = 'text-node hidden';
  } else if (scrollY >= 900 && scrollY < 1400) {
    t2.className = 'text-node up';
    t3.className = 'text-node visible';
    t4.className = 'text-node hidden';
  } else if (scrollY >= 1400 && scrollY < 1900) {
    t3.className = 'text-node up';
    t4.className = 'text-node visible';
    t5.className = 'text-node hidden';
  } else if (scrollY >= 1900 && scrollY < 2400) {
    t4.className = 'text-node up';
    t5.className = 'text-node visible';
    t6.className = 'text-node hidden';
  } else if (scrollY >= 2400) {
    t5.className = 'text-node up';
    t6.className = 'text-node visible';
  }
});

// Blob animation
const blobs = document.querySelectorAll('.blob');
let offset = 0;
function animateBlobs() {
  offset += 0.005;
  blobs.forEach((blob, i) => {
    const x = Math.sin(offset + i) * 60;
    const y = Math.cos(offset + i) * 60;
    blob.style.transform = `translate(${x}px, ${y}px)`;
  });
  requestAnimationFrame(animateBlobs);
}
animateBlobs();
