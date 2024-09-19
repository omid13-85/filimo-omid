let Online = async () =>{
   let online = ""
   try{
    let data = await fetch("https://aliahanin.github.io/github.api/json/online.json");
    let res = await data.json();
    online = res.map((item)=>{
      return`<div class="online-MOVIE mobile:w-[355px] mobile:h-[226px] desktop:w-[528px] desktop:h-[245px] bg-[#1E1113] rounded-lg mt-5 relative border  ">
                <div class="right w-fit flex pt-2 pr-2">
                  <img class="w-[100px] desktop:w-[165px] desktop:h-[220px] h-[133px] rounded-lg" src=${item.image} alt="">
                </div>
                
                  <p class="text-[14px] text-[#ffffff] font-bold pr-3 pt-2 absolute top-0 right-28 desktop:right-44">${item.title}</p>
                  <div class="w-fit flex flex-row bg-[#1B0C0E] rounded-xl px-3 absolute p-2 top-1  left-4  justify-center items-center">
                    <img class="w-[15px]" src="https://www.filimo.com/assets/web/ui/img-nhQbBQB8PcCL8uqRe4vStg/campaigns/nosub-v_new/ticket.png" alt="">
                    <p class="text-[#ffffff] text-[10px]">اکران آنلاین</p>
                  </div>
                 
                 <p class="text-[13px] text-[#CCCACA] flex pr-2 absolute top-12 right-28 desktop:right-44  mb-5">کارگردان:${item.director}</p>
                 <div class="w-full pr-2 ">
                  <span class="text-[12px] text-white bg-[#1B0C0E] px-3 font-medium  rounded-lg desktop:right-44 desktop:top-28 absolute top-20 right-28" >${item.sort}</span>
                  <span class="text-[12px] text-white bg-[#1B0C0E] px-3 font-medium rounded-lg desktop:right-60 desktop:top-28 absolute top-20 right-44" >${item.sort2}</span>
                 </div>
                
                <button class="w-[333px] h-[43px] desktop:w-[70px] desktop:h-[38px]   pr-2 border-white border-2 mt-1 absolute right-3 desktop:right-48 desktop:bottom-3  rounded-lg flex items-center">
                  <a class="text-white text-[13px] desktop:text-[10px] " href="">خرید بلیط</a>
                </button>
              </div>`
    });
    document.querySelector(".Cinema-API").insertAdjacentHTML("afterbegin" , online.join(""));
   }catch(error){
      console.log(error.message);
   }
}
Online();