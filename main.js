console.log('Hello World!');

let form = document.getElementById("form");
form.addEventListener('submit', (e) => {
     
        e.preventDefault();
        alert("Form Successfully Submitted");
        form.submit();

});

let menu = document.getElementById('menu');
let menuIcon = document.querySelector('.menu-icon');
let i = 0;
menu.addEventListener('click',() => {
  if(i%2 == 0) {
     menuIcon.textContent = 'close';
    popup.style.display = 'block';
    i++;
  }
  else {
    menuIcon.textContent = 'menu';
    popup.style.display = 'none';
    i++;
  }
});


  const lines = [
    "Hi, I'm Fakorode Odunayo Henry, a passionate Backend Java Developer with focus on building scalable, high-performance systems using Java, Spring Boot, and RESTful APIs",
    "I enjoy solving real-world problems with clean, efficient code and designing systems that are both secure and maintainable."
  ];

  let lineIndex = 0;
  let charIndex = 0;
  const speed = 20;
  const element = document.getElementById("typewriter");

  function typeLine() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        element.textContent += lines[lineIndex][charIndex++];
        setTimeout(typeLine, speed);
      } else {
        element.textContent += "\n";
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 500);
      }
    }
  }

  typeLine();
