console.log('Hello World!');


let form = document.getElementById("form");
form.addEventListener('submit', (e) => {
     
        e.preventDefault();
        alert("Form Successfully Submitted");
        form.submit();

}

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
    "Backend developer specializing in Java, Spring Boot, Hibernate, and J2EE.",
    "I build scalable RESTful APIs with robust exception handling, input validation, and efficient database interaction using MySQL.",
    "Passionate about clean code, API design, and delivering high-performance backend systems."
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
