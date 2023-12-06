$(document).ready(function(){
    var  api = [[ [{"title" : "Domains"},{"span" : ""},{"p":"Get started with a .com domain, which comes with free domain privacy protection forever."}],[],[]  ]]

    let text2 =""
    for(let i = 0; i < 7; i++){
        let text = `
        <div class="img___sell">
            <div class="img_bg____sell flex-column opacity-0 ">
                
                <button class="btn_anime2 text">Start Editing<i class="fa-solid fa-arrow-right-long"></i></button>
                <a href="#" class="a_anime2 text2">preview</a>
                
            </div>
            <img src="home/imgs/img_sell/${i}.png" alt="" >
        </div>`
        text2 += text;
    }
    for(let i = 0; i < 3; i++){
        let img = `<div class="img___sell">
            <div class="img_bg____sell  d-flex flex-column  opacity-0 ">
                <button class="btn_anime2 text">Start Editing<i class="fa-solid fa-arrow-right-long"></i></button>
                <a href="#" class="a_anime2 text2">preview</a>
            </div>
            <img src="home/imgs/img_sell/${i}.png" alt="" >
        </div>`
        text2 += img
    }

    $(".box_sell").html(text2)


    $(".box_sell").mouseover(function(){
        let imgs = $(".box_sell .img___sell")
        for(let i = 0; i < imgs.length; i++ ){
            $(".box_sell .img___sell")[i].style.animationPlayState = "paused"
        }

    })
    $(".box_sell").mouseout(function(){
        let imgs = $(".box_sell .img___sell")
        for(let i = 0; i < imgs.length; i++ ){
            $(".box_sell .img___sell")[i].style.animationPlayState = ""
        }
            
    })

    $(".box_sell .img___sell").mouseover(function(){
        let text_img = $(this).find(".img_bg____sell");

        text_img.removeClass("opacity-0");
        text_img.addClass(" opacity-100 ");
        
    })
    $(".box_sell .img___sell").mouseout(function(){
        let text_img = $(this).find(".img_bg____sell");
        text_img.removeClass("opacity-100");
        text_img.addClass("opacity-0");
    })



    var num = 0;
    $(".box_sell__play_and_puse").click(function(){
        let togglePlay = $(this).find(".fa-solid")
        num++;
        if(num % 2 == 0){
            togglePlay.removeClass("fa-play");
            togglePlay.addClass("fa-pause");
            let imgs = $(".box_sell .img___sell")
            for(let i = 0; i < imgs.length; i++ ){
                $(".box_sell .img___sell")[i].style.animationPlayState = ""
            }
        }else{
            togglePlay.removeClass("fa-pause");
            togglePlay.addClass("fa-play");
            let imgs = $(".box_sell .img___sell")
            for(let i = 0; i < imgs.length; i++ ){
                $(".box_sell .img___sell")[i].style.animationPlayState = "paused"
            }

        }

    })


    $(".crad__success").mousemove(function(){
    
        // console.log()    
        if($(this).hasClass("active") == false){
            $(".img_success img")[0].src = $(this).attr("data-src")

            $(".crad__success").removeClass("active")
            $(this).addClass("active")
        }
    })


    // quion
    $(".items_quion").click(function(){
        $(this).toggleClass("active")
    })



    const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });
})