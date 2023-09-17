let namee = document.querySelector(
  "section.sixth div.right div.photo_card p.name"
);


let i_name = document.querySelector(".username input");
let i_btn = document.querySelector(".number button");

function print() {
  if (i_name.value === 'mohammed') {
    namee.textContent = i_name.value;
    document.querySelector('.phone_number').textContent ='location: palastine street'
    document.querySelector('.a_date').textContent = 'subscribed on 21/8/2023';
    document.querySelector('.b_date').textContent = 'subscribed on 20/9/2023';
  }
  else {
    namee.textContent = 'unknown name';
        document.querySelector(".phone_number").textContent =
          "";
        document.querySelector(".a_date").textContent =
          "";
        document.querySelector(".b_date").textContent =
          "";
  }

}
i_btn.addEventListener("click", print);

