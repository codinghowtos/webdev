const docs = document.querySelectorAll(".menubtn");

docs.forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("yellomainbtn");
  });
});


//about me wala section
 document.addEventListener('DOMContentLoaded', function() {
  const typingEffectSpan = document.querySelector('.typing-effect');
  const textsToType = ["Upcoming Developer.", "Problem Solver.", "Keen Learner."];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId;
  function type() {
      const currentText = textsToType[textIndex];
      let typeSpeed = isDeleting ? 75 : 150;
      if (isDeleting) {
          charIndex--;
      } else {
          charIndex++;
      }
      
      typingEffectSpan.textContent = currentText.substring(0, charIndex);
      if (!isDeleting && charIndex === currentText.length) {
          typeSpeed = 1500;
          isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % textsToType.length; 
          typeSpeed = 500; 
      }
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(type, typeSpeed);

    }
  const readMoreBtn = document.getElementById('read-more-btn');
  const moreTextSpan = document.querySelector('.more-text');
   const dotsSpan = document.querySelector('.dots');

  readMoreBtn.addEventListener('click', () => {
      if (moreTextSpan.style.display === 'none' || moreTextSpan.style.display === '') {
          moreTextSpan.style.display = 'inline';
          readMoreBtn.textContent = 'Read Less';
          dotsSpan.style.display = 'none';
      } else {
          moreTextSpan.style.display = 'none';
          readMoreBtn.textContent = 'Read More';
          dotsSpan.style.display = 'inline';
      }
  });
  
  type();
  });
