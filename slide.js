
let second_section = document.querySelector("#second");


let binary1 = 0;

{
  let string1 = " scroll down";
  let str1 = string1.split("");
  let el = document.querySelector("p.f");
  (function animate() {
    str1.length > 0 ? (el.innerHTML += str1.shift()) : clearTimeout(running);
    let running = setTimeout(animate, 120);
  })();
  binary1 = 1;
}


let ts = document.querySelectorAll('.slide');
function movement(s) {
    gsap.set(s, {
        opacity: 0,
        
    });
    gsap.to(s, {
  scrollTrigger: {
    trigger: s,
    start: "top 60%",
    end: "+=40%",
    scrub: true,
  },
  opacity: 1,
    },);   
}
for (let i = 0; i < ts.length; i++){
  movement(ts[i]);
}
gsap.to('p.f', {
  opacity: 1,
  duration: 1.4,
  y: 40,
});



let binary = 0;

let observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      if (binary == 0) {
        console.log('yes');
        let string = " this is where i show people my work.";
        let str = string.split("");
        let el = document.getElementById("main");
        (function animate() {
          str.length > 0
            ? (el.innerHTML += str.shift())
            : clearTimeout(running);
          let running = setTimeout(animate, 80);
          binary = 1;
        })();
      }
    } else {
      console.log('no');
    }
  },
  { threshold: [0.4] }
);
observer.observe(second_section);

let binary2 = 0;
let observer1 = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      if (binary2 == 0) {
        
        let string =
          " i'm mohammed. an ambitious web designer and developer, an artist (check my instagram), on my last stage in engineering college, and a tall handsome guy :) ";
        let str = string.split("");
        let el = document.querySelector(".third p.text");
        (function animate() {
          str.length > 0
            ? (el.innerHTML += str.shift())
            : clearTimeout(running);
          let running = setTimeout(animate, 60);
          binary2 = 1;
          gsap.to
        })();
      }
    } else {
    }
  },
  { threshold: [0.5] }
);
let third_section = document.querySelector("section.third");
observer1.observe(third_section);
























