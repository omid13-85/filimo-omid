let plusicon = document.querySelector(".plus");
let plusicon2 = document.querySelector(".plus-2");
let plusicon3 = document.querySelector(".plus-3");
let plusicon4 = document.querySelector(".plus-4");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let question1 = document.querySelector(".question-1");
let question2 = document.querySelector(".question-2");
let question3 = document.querySelector(".question-3");
let question4 = document.querySelector(".question-4");
let titleq1 = document.querySelector(".title-q1");
let titleq2 = document.querySelector(".title-q2");
let titleq3 = document.querySelector(".title-q3");
let titleq4 = document.querySelector(".title-q4");
let flag = true;
plusicon.addEventListener("click" , ()=>{
        if (flag === true) {
            answer1.classList.remove("hidden");
            titleq1.classList.add("text-orange-600"); 
            answer1.classList.add("block");
            question1.classList.add("transition-all","duration-1000","ease-linear");
            plusicon.classList.add("rotate-45","transition-all" ,"duration-500");
            flag = false
        } else {
            answer1.classList.remove("block");
            answer1.classList.add("hidden");
            titleq1.classList.remove("text-orange-600");
            plusicon.classList.remove("rotate-45","transition-all"); 
            flag = true
        }
               
      
    });
plusicon2.addEventListener("click" , ()=>{
        if (flag === true) {
            answer2.classList.remove("hidden");
            titleq2.classList.add("text-orange-600"); 
            answer2.classList.add("block");
            plusicon2.classList.add("rotate-45","transition-all" ,"duration-500");
            flag = false
        } else {
            answer2.classList.remove("block");
            answer2.classList.add("hidden");
            titleq2.classList.remove("text-orange-600");
            plusicon2.classList.remove("rotate-45","transition-all"); 
            flag = true
        }
               
      
    });plusicon3.addEventListener("click" , ()=>{
        if (flag === true) {
            answer3.classList.remove("hidden");
            titleq3.classList.add("text-orange-600"); 
            answer3.classList.add("block");
            plusicon3.classList.add("rotate-45","transition-all" ,"duration-500");
            flag = false
        } else {
            answer3.classList.remove("block");
            answer3.classList.add("hidden");
            titleq3.classList.remove("text-orange-600");
            plusicon3.classList.remove("rotate-45","transition-all"); 
            flag = true
        }
               
      
    });
    plusicon4.addEventListener("click" , ()=>{
        if (flag === true) {
            answer4.classList.remove("hidden");
            titleq4.classList.add("text-orange-600"); 
            answer4.classList.add("block");
            plusicon4.classList.add("rotate-45","transition-all" ,"duration-500");
            flag = false
        } else {
            answer4.classList.remove("block");
            answer4.classList.add("hidden");
            titleq4.classList.remove("text-orange-600");
            plusicon4.classList.remove("rotate-45","transition-all"); 
            flag = true
        }
               
      
    })

