$(function(){

  // header
  $("#a1").mouseenter(function(){
    $("#list").css({
      display: "block"
    })
    
  })
  $("#list").mousemove(function(){
    $(this).css({
      display: "block"
    })
  }).mouseleave(function(){
    $(this).css({
      display: "none"
    })
  })



  //search
  $(".search").find("input").focus(function(){
    this.placeholder = ""
  }).blur(function(){
    this.placeholder = "请选择游戏搜索道具"
  })

  $(".search").find("div .searchA1").mouseenter(function(){
    this.style.background = "url(../images/index/search04.png) no-repeat 95px 15px";
    $(".searchSection").css({
      display: "block"
    })
  }).mouseleave(function(){
    this.style.background = "url(../images/index/search03.png) no-repeat 95px 15px";
    $(".searchSection").css({
      display: "none"
    })
  })

  $(".searchSection").mouseenter(function(){
    $(this).css({
      display: "block"
    })
  }).mouseleave(function(){
    $(this).css({
      display: "none"
    })
  })


  //nav
  $(".nav .navli1").mouseenter(function(){
    $(this).css({
      backgroundColor: "#f55656",
      borderBottom: "3px solid #e43333",
      color:"white"
    })
  }).mouseleave(function(){
    $(this).css({
      backgroundColor: "#3a3f4a",
      borderBottom: "none",
      color:"#acb1bb"
    })
  })

  $(".nav .navA1").mouseenter(function(){
    $(this).css({
      backgroundColor: "#e43333"
    })
  }).mouseleave(function(){
    $(this).css({
      backgroundColor: "#f74a4a"
    })
  })



  $(".navli2").add(".navDiv").mouseenter(function(){
    $(".navDiv").css({
      display: "block",
    })
  }).mouseleave(function(){
    $(".navDiv").css({
      display: "none"
    })
  })
  $(".navDiv a").mouseenter(function(){
    $(this).css({
      color: "red",
    })
  }).mouseleave(function(){
    $(this).css({
      color: "black"
    })
  })
  


  $(".navA1").add(".navDiv2").mouseenter(function(){
    $(".navDiv2").css({
      display: "block"
    })
  }).mouseleave(function(){
    $(".navDiv2").css({
      display: "none"
    })
  })




  //banner轮播图
  $(".banner .hot").add(".hot1").mouseenter(function(){
    $(".hot1").css({
      display: "block"
    })
    $(".hot").find(".iconfont").css({
      color: "#3a3f4a"
    })
    $(".hot").css({
      background: "url(../images/index/banner02.png) no-repeat 170px 30px",
      backgroundColor: "white",
      color: "#3a3f4a"
    })
  }).mouseleave(function(){
    $(".hot1").css({
      display: "none"
    })
    $(".banner .iconfont").css({
      color: "#f58383"
    })
    $(".hot").css({
      background: "url(../images/index/banner01.png) no-repeat 170px 30px",
      backgroundColor: "#f55656",
      color: "white",
      
    })
  })

  $(".banner .role").add(".role1").mouseenter(function(){
    $(".role1").css({
      display: "block"
    })
    $(".role").find(".iconfont").css({
      color: "#3a3f4a"
    })
    $(".role").css({
      background: "url(../images/index/banner02.png) no-repeat 170px 30px",
      backgroundColor: "white",
      color: "#3a3f4a"
    })
  }).mouseleave(function(){
    $(".role1").css({
      display: "none"
    })
    $(".banner .iconfont").css({
      color: "#f58383"
    })
    $(".role").css({
      background: "url(../images/index/banner01.png) no-repeat 170px 30px",
      backgroundColor: "#f55656",
      color: "white",
      
    })
  })
  
  $(".banner .athletics").add(".athletics1").mouseenter(function(){
    $(".athletics1").css({
      display: "block"
    })
    $(".athletics").find(".iconfont").css({
      color: "#3a3f4a"
    })
    $(".athletics").css({
      background: "url(../images/index/banner02.png) no-repeat 170px 30px",
      backgroundColor: "white",
      color: "#3a3f4a"
    })
  }).mouseleave(function(){
    $(".athletics1").css({
      display: "none"
    })
    $(".banner .iconfont").css({
      color: "#f58383"
    })
    $(".athletics").css({
      background: "url(../images/index/banner01.png) no-repeat 170px 30px",
      backgroundColor: "#f55656",
      color: "white",
      
    })
  })

  $(".banner .relax").add(".relax1").mouseenter(function(){
    $(".relax1").css({
      display: "block"
    })
    $(".relax").find(".iconfont").css({
      color: "#3a3f4a"
    })
    $(".relax").css({
      background: "url(../images/index/banner02.png) no-repeat 170px 30px",
      backgroundColor: "white",
      color: "#3a3f4a"
    })
  }).mouseleave(function(){
    $(".relax1").css({
      display: "none"
    })
    $(".banner .iconfont").css({
      color: "#f58383"
    })
    $(".relax").css({
      background: "url(../images/index/banner01.png) no-repeat 170px 30px",
      backgroundColor: "#f55656",
      color: "white",
      
    })
  })

  $(".banner .webpage").add(".webpage1").mouseenter(function(){
    $(".webpage1").css({
      display: "block"
    })
    $(".webpage").find(".iconfont").css({
      color: "#3a3f4a"
    })
    $(".webpage").css({
      background: "url(../images/index/banner02.png) no-repeat 170px 30px",
      backgroundColor: "white",
      color: "#3a3f4a"
    })
  }).mouseleave(function(){
    $(".webpage1").css({
      display: "none"
    })
    $(".banner .iconfont").css({
      color: "#f58383"
    })
    $(".webpage").css({
      background: "url(../images/index/banner01.png) no-repeat 170px 30px",
      backgroundColor: "#f55656",
      color: "white",
      
    })
  })
      //轮播图js：
  //（
  const aBtns = document.querySelectorAll(".bannerImgAll aside a");
  const oBanner = document.querySelector(".bannerImgAll");
  const oUl = document.querySelector(".bannerImg")
  let iNow = 0;
  let timer = null;
  

  timerInner();

  for (var i = 0; i < aBtns.length; i++) {
    aBtns[i].index = i;
    aBtns[i].onmouseenter = function(){
      iNow = this.index + 1;
      tab();
    }
  }

  function timerInner(){
    timer = setInterval(function(){
      iNow++;
      tab()
    }, 2000)
  }

  function tab(){
    console.log(iNow);
    for (var i = 0; i < aBtns.length; i++) {
      aBtns[i].className = "";
    }
    if(iNow == aBtns.length + 1){
      aBtns[0].className = "active";
    }else if(iNow == 0){
      aBtns[aBtns.length - 1].className = "active";
    }else{
      aBtns[iNow - 1].className = "active"
    }


    startMove(oUl, {left: iNow * -770}, function(){
      if(iNow == aBtns.length ){
        iNow = 0;
        oUl.style.left = "0px";
      }else if(iNow == 1){
        oUl.style.left = "-770px";
      }
    })
  }

  oBanner.onmouseenter = function () {
    clearInterval(timer);
  };
  oBanner.onmouseleave = function () {
    //重新启动动画
    timerInner();
  };

  //）

  $(".rightUl").find("li a").mouseenter(function(){
    $(this).css({
      color: "red",
    })
  }).mouseleave(function(){
    $(this).css({
      color: "#3a3f4a",
    })
  })



  


  //content1
  $(".content1 .content1Div2 section a").mouseenter(function(){
    $(this).css({
      backgroundColor: "#e43333"
    })
  }).mouseleave(function(){
    $(this).css({
      backgroundColor: "#f74a4a"
    })
  })


  //content2
  $(".content2Div3 a").mouseenter(function(){
    $(this).css({
      background: "url(./images/index/ia_100000018.png) no-repeat 20px 20px white",
      backgroundSize: "80% 80%"
    })
  }).mouseleave(function(){
    $(this).css({
      background: "url(./images/index/content202.png) no-repeat",
    })
  })



  //content4
  $(".content4Div2 .content4Div2Li1 a img").mouseenter(function(){
    $(this).css({
      marginLeft: "20px"
    })
  }).mouseleave(function(){
    $(this).css({
      marginLeft: "0px"
    })
  })

  $(".content4Div2 .content4Div2Li2 section a img").mouseenter(function(){
    $(this).css({
      marginTop: "10px"
    })
  }).mouseleave(function(){
    $(this).css({
      marginTop: "0px"
    })
  })

  $(".content4Div2 .content4Div2Li3 a img").mouseenter(function(){
    $(this).css({
      marginTop: "10px"
    })
  }).mouseleave(function(){
    $(this).css({
      marginTop: "0px"
    })
  })


  //fixButton
  $(".fixButton .fixButtonDiv1").mouseenter(function(){
    $(this).css({
      backgroundColor: "#f75757",
      color: "white"
    })
    $( ".fixButtonDiv1 aside").css({
      color: "white"
    })
  }).mouseleave(function(){
    $(this).css({
      backgroundColor: "white",
      color: "#3a3f4a"
    })
    $( ".fixButtonDiv1 aside").css({
      color: "#3a3f4a"
    })
  })

  $(".fixButton .fixButtonA").mouseenter(function(){
    $(this).css({
      backgroundColor: "#f75757",
      color: "white"
    })
  }).mouseleave(function(){
    $(this).css({
      backgroundColor: "white",
      color: "#3a3f4a"
    })
  })






  //content3 ajax
  $.ajax({
    url: "./data/data.json",
    success: function(arr){
      var str = ``;
      for (var i = 0; i < arr[0].length; i++) {
        str += `<li><a href="${arr[0][i].target}" target="blank"><img src="${arr[0][i].image}" alt=""></a></li>
        `
      }
      $(".content3Div2 ul").html(str);
    },
    error: function(msg){
      console.log(msg);
    }
  })


  //content1 ajax   (将content1跟commodity的数据链接)
  $.ajax({
    type: "get",
    url: "./data/data.json",
    dataType: "json",
    success: function(arr){
      // console.log(arr[1]);
      var str = ``;
      for (var i = 0; i < arr[1].length; i++) {
        str += `<li>
        <section>
          <p>${arr[1][i].title}</p>
          <p>QB价：<span>${arr[1][i].money}QB</span></p>
          <p>热卖推荐</p>
          <a id="${arr[1][i].id}" href="commodity.html?goodsId=${arr[1][i].id}" class="aaa" target="_blank">立即抢购</a>
        </section>
        <a href="" class="img1"><img src="${arr[1][i].image}" alt=""></a>
      </li>`
      }
      $(".content1Div2 ul").html(str);
    },
    error: function(msg){
      console.log(msg);
    }
  })


  //content2 ajax
  $.ajax({
    type: "get",
    url: "./data/data.json",
    dataType: "json",
    success: function(arr){
      var str = ``;
      for (var i = 0; i < arr[2].length; i++) {
        str += `<li>
        <section>
          <p>${arr[2][i].title}</p>
          <p>${arr[2][i].name}</p>
          <aside>商城价：<span>${arr[2][i].money} QB</span></aside>
        </section>
        <a id="${arr[2][i].id}" href="commodity.html?goodsId=${arr[2][i].id}" target="_blank"><img src="${arr[2][i].image}" alt=""></a>
      </li>`
      }
      $(".content2Div2 ul").html(str);
    },
    error: function(msg){
      console.log(msg);
    }
  })






  



  

})