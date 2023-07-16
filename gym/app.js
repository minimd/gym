let namee = document.querySelector(
  "section.sixth div.right div.photo_card p.name"
);
let number = document.querySelector(
  "section.sixth div.right div.photo_card p.phone_number"
);

let i_name = document.querySelector(".username input");
let i_number = document.querySelector(".number input");
let i_btn = document.querySelector(".number button");

function print() {
  namee.textContent = i_name.value;
  number.textContent = i_number.value;
}
i_btn.addEventListener("click", print);
