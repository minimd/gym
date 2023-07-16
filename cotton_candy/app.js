// defining section
let discount_btn = document.querySelector("#fourth .home-btn");
let discount_image = document.querySelector("#fourth img");
let discount_text = document.querySelector("#fourth p");

let large_btns = document.querySelectorAll("#fifth button");
let work_time_btn = document.querySelector("#fifth .first_btn");
let locations_btn = document.querySelector("#fifth .mid_btn");
let flavors_btn = document.querySelector("#fifth .last_btn");
let description = document.querySelector("#fifth .description .var");
let w10 = document.querySelector("#fifth .description .w10");
let open_img = document.querySelector("#fifth .description .open");
let flavors_img = document.querySelector("#fifth .description .flavors");
let map = document.querySelector("#fifth .description iframe");
let yellow_btn = document.querySelector("#sixth .yellow");
let pink_btn = document.querySelector("#sixth .pink");
let blue_btn = document.querySelector("#sixth .blue");
let candy_img = document.querySelector("#sixth img");
let candy_color = 'blue';

let date = new Date();
let current_hour = date.getHours();

let yellow_counter = document.querySelector("#sixth .yellow_count");
let blue_counter = document.querySelector("#sixth .blue_count");
let pink_counter = document.querySelector("#sixth .pink_count");
let price_tag = document.querySelector("#sixth .final p");
let discount_tag = document.querySelector("#sixth .final_discount");
let reset_btn = document.querySelector("#sixth .left .reset-btn");
let checkout_btn = document.querySelector("#sixth .final .reset-btn");
let note = document.querySelector(".note");
let note_btn = document.querySelector(".note button");
let width_btn = document.querySelector("#fourth button");

//arrays
let discount_data = [
  { percent: 40, image_URL: "resources/images/3221399.jpg" },
  { percent: 50, image_URL: "resources/images/3221417.jpg" },
  { percent: 60, image_URL: "resources/images/3221443.jpg" },
];

// functions
let discount_percent = 0;
console.log(discount_percent);
function discount() {
  let x = Math.floor(Math.random() * 3);
  discount_image.setAttribute("src", discount_data[x].image_URL);
  discount_text.textContent = `congrats, you've won a ${discount_data[x].percent}% discount & it will be applied on your next checkout`;
  discount_btn.classList.add("disabled");
  discount_btn.classList.remove("home-btn");
  discount_percent = discount_data[x].percent;
  discount_tag.textContent = discount_percent + "% discount";
  total_price_update();
}

discount_btn.addEventListener("click", discount);

function color_swap0() {
  work_time_btn.classList.add("heavy_pink_colored");
  locations_btn.classList.remove("heavy_pink_colored");
  flavors_btn.classList.remove("heavy_pink_colored");
  if (current_hour > 10 && current_hour < 18) { description.textContent = "we are currently open."; }
  else { description.textContent = "we are currently closed."; }
  
  w10.classList.remove("disabled");
  open_img.classList.remove("disabled");
  map.classList.add("disabled");
  flavors_img.classList.add("disabled");
  console.log("work");
}
color_swap0();
work_time_btn.addEventListener("click", color_swap0);
function color_swap1() {
  locations_btn.classList.add("heavy_pink_colored");
  work_time_btn.classList.remove("heavy_pink_colored");
  flavors_btn.classList.remove("heavy_pink_colored");
  description.textContent =
    "you can find us here 📍, new locations opening soon.";
  w10.classList.add("disabled");
  open_img.classList.add("disabled");
  map.classList.remove("disabled");
  flavors_img.classList.add("disabled");
  console.log("locs");
}
locations_btn.addEventListener("click", color_swap1);
function color_swap2() {
  flavors_btn.classList.add("heavy_pink_colored");
  locations_btn.classList.remove("heavy_pink_colored");
  work_time_btn.classList.remove("heavy_pink_colored");
  description.textContent =
    "a plenty of flavors you can find here😎 try them ALL!!";
  w10.classList.add("disabled");
  open_img.classList.add("disabled");
  map.classList.add("disabled");
  flavors_img.classList.remove("disabled");
  console.log("flavs");
}
flavors_btn.addEventListener("click", color_swap2);
let total_price = 0;
let y = 0;
function choose_color0()
{
  setTimeout(function () { candy_img.setAttribute("src", "resources/icons/cotton-yellow.png"); }, 1000);  
  y++;
  yellow_counter.textContent = y + " yellow" + " 2$";
  total_price += 2;
  total_price_update();
    if (candy_color != "yellow") {
      gsap.to(candy_img, { x: "-50%", opacity: 0, duration: 1 });
      gsap.to(candy_img, { x: "0", opacity: 1, duration: 1 }, "<1");
  }
    candy_color = "yellow";

}
yellow_btn.addEventListener("click", choose_color0);
let b = 0;
function choose_color1() {
  setTimeout(function () {
    candy_img.setAttribute("src", "resources/icons/cotton-blue.png");
  }, 1000);  
  b++;
  blue_counter.textContent = b + " blue" + " 3$";
  total_price += 3;
  total_price_update();
  if (candy_color != "blue") {
    gsap.to(candy_img, { x: '-50%', opacity: 0, duration: 1 },);
    gsap.to(candy_img, { x: '0', opacity: 1, duration: 1 }, '<1');
  }
    candy_color = "blue";

}
blue_btn.addEventListener("click", choose_color1);
let p = 0;
function choose_color2() {
  setTimeout(function () {
    candy_img.setAttribute("src", "resources/icons/cotton-pink.png");
  }, 1000);  
  p++;
  pink_counter.textContent = p + "  pink" + " 5$";
  total_price += 5;
  total_price_update();
  
    if (candy_color != "pink") {
      gsap.to(candy_img, { x: "-50%", opacity: 0, duration: 1 });
      gsap.to(candy_img, { x: "0", opacity: 1, duration: 1 }, "<1");
  }
  candy_color = "pink";
}
pink_btn.addEventListener("click", choose_color2);

function total_price_update() {
  let s = total_price - total_price * (discount_percent / 100);
  let n = s.toFixed(2);
  price_tag.textContent = n + "$";
}
function reset_price() {
  p = 0;
  y = 0;
  b = 0;
  console.log(y, b, p);
  yellow_counter.textContent = "";
  blue_counter.textContent = "";
  pink_counter.textContent = "";
  total_price = 0;
  price_tag.textContent = 0 + "$";
}
reset_btn.addEventListener("click", reset_price);
function check() {
  note.classList.remove("disabled");
}
checkout_btn.addEventListener("click", check);
function show() {
  note.classList.add("disabled");
}
note_btn.addEventListener("click", show);

// Animation

var tl = gsap.timeline();
tl.from("nav", { duration: 1.4, x: "-100vw", opacity: 0.2, ease: "power2" });
tl.from(".first_left p", { duration: 1.2, x: "-100vw", opacity: 0.2 }, "<1");
tl.from(
  ".first_left button",
  { duration: 1.4, x: "-100vw", opacity: 0.2 },
  "<1"
);
tl.from(".first_right", { duration: 1.4, x: "100vw", opacity: 0.2 }, "2");
tl.from("#second", { duration: 1.6, y: "100%", opacity: 0 }, "2.9");
tl.from("#fourth", { duration: 1.6, y: "100%", opacity: 0 }, "2.6");
gsap.from("#fifth", {
  scrollTrigger: "#fourth", y: 800, duration: 1, opacity: 0.0,
  delay:0.4
});
