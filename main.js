const random = document.querySelector(".random");
const userText = document.querySelector(".txtContainer");
const btn = document.querySelector(".btn");
const end = document.querySelector(".gameEnd");

userText.addEventListener("focus" , timerRun);
btn.addEventListener("click", reload);



const texts = ["the text to test","this is a text","we are learning js"];
const randomWord = texts[Math.floor(Math.random() * texts.length)];
random.innerText = randomWord;




function timerRun () {
  let ms = 0  , s = 0  , m = 0 ;
  function timerR () {
     
      ms += 1;
      if(ms >= 100){
          ms = 0;
          s += 1;
         
  
      }
      
      if(s >= 60){
          s = 0;
          m += 1;
      }
      s
      let time = `${m}:${s}:${ms}`
      document.querySelector(".timer").innerHTML = time;
  }
  userText.addEventListener("keydown",check);
  function check (event) {
    let usertype = event.target.value;
    if (usertype == randomWord){
      clearInterval(timer);
      btn.style.display = "block";
      userText.style.display = "none";
      end.innerText = `your type speed is ${document.querySelector(".timer").innerText}`;
      end.style.display = "block"
    }
  };
   const timer = setInterval(timerR,10);
}

function reload () {
  location.reload();
}

