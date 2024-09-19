let COMENT = async () =>{
  let comment = ""
  try {
      let data = await fetch("https://aliahanin.github.io/github.api/json/Comment.json");
      let res = await data.json();
      comment = res.map((comment)=>{
          return`<div class="swiper-slide mt-20 desktop:movement   ">
          <div class="w-[338px] h-[190px] bg-[#1A1A1A] pt-3 border-[#25262A] border-2    rounded-lg ">
                      <div class="top w-[full] h-[35px]   flex flex-row justify-between  ">
                        <div class="flex flex-row items-center gap-2 pr-2">
                          <img class="bg-cover " src="https://www.filimo.com/assets/web/ui/img-ybJkyDBDw3nC5xN6weY6w/campaigns/big-screen_v2/1.png" alt="">
                          <h5 class=" text-[16px] text-[#74787D]">${comment.Name}</h5>
                        </div>
                        <div class="w-fit pl-2">
                          <img class="w-[10px] h-[10px]" src="https://www.filimo.com/assets/web/ui/img-ybJkyDBDw3nC5xN6weY6w/campaigns/big-screen_v2/virgol.png" alt="">
                        </div>
                      </div>
                      <div class="buttom w-fit">
                        <p class=" text-[12px] p-3 text-justify pr-4 pt-5 text-[#ffffff]">${comment.coment}</p>
                      </div>
                    </div>
          </div>`
      })
      document.querySelector("#Comment-wrapper").insertAdjacentHTML("afterbegin" , comment.join(""));
  } catch (error) {
      console.log(error.message);
  }
}
COMENT();
