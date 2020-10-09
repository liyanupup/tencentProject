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


  // nav1
  $(".nav1All .nav1 ul li a").mouseenter(function(){
    $(this).css({
      color: "#ff5900"
    })
  }).mouseleave(function(){
    $(this).css({
      color: "#9f9f9f"
    })
  })

  //nav2
  $(".nav2 ul li a").mouseenter(function(){
    $(this).css({
      color: "#36ab87"
    })
  }).mouseleave(function(){
    $(this).css({
      color: "black"
    })
  })


  // content2
  $(".content2All .content2Div1 .content2Div1A").mouseenter(function(){
    $(this).find("p").css({
      color: "#36ab87",
      borderBottom: "1px solid #36ab87"
    })
  }).mouseleave(function(){
    $(this).find("p").css({
      color: "black",
      borderBottom: "none"
    })
  })


  // 放大镜
  $(".content2Div2Ajax").on("mouseenter", "#small", function(){
    $(".content2Div2Ajax").find("#mask, #big").show();
  }).on("mouseleave", "#small", function(){
    $(".content2Div2Ajax").find("#mask,#big").hide();
  }).on("mousemove", "#small", function(ev){
    var l = ev.pageX - $("#small").offset().left - 35;
    var t = ev.pageY - $("#small").offset().top - 35;
    l = Math.max(0, l);
    l = Math.min(190, l);
    t = Math.max(0, t);
    t = Math.min(84, t);

    $(".content2Div2Ajax").find("#mask").css({
      left: l,
      top: t
    })
    $(".content2Div2Ajax").find("#big img").css({
      left: -2 * l,
      top: -2 * t
    })
  })


  $(".content2Div2Btn1").mouseenter(function(){
    $(this).css({
      backgroundColor: "orange"
    })
  }).mouseleave(function(){
    $(this).css({
      backgroundColor: "#ff5900"
    })
  })
  $(".content2Div2Btn2").mouseenter(function(){
    $(this).css({
      backgroundColor: "blue"
    })
  }).mouseleave(function(){
    $(this).css({
      backgroundColor: "#259afe"
    })
  })


  $(".content2Div2A").mouseenter(function(){
    $(this).css({
      backgroundColor: "#299a74"
    })
  }).mouseleave(function(){
    $(this).css({
      backgroundColor: "#36ab87"
    })
  })




  //将index.html 里的 content1的数据跟commodity链接
  function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if(r != null) return unescape(r[2]);
    return null; //返回参数值
  }
  var id = getUrlParam("goodsId");
  if(id >= 106 && id <= 111){
    $.ajax({
      type: "get",
      url: "./data/data.json",
      dataType: "json",
      success: function(arr){
        var str = ``;
        for (var i = 0; i < arr[1].length; i++) {
          if(id == arr[1][i].id){
            str += `<div id="small">
            <img src="${arr[1][i].image2}" alt="">
            <div id="mask"></div>
          </div>
          <div id="big">
            <img src="${arr[1][i].image2}" alt="">
          </div>
          <div class="msg">
            <p>${arr[1][i].title}</p>
            <section>
              <div>
                <span>Q币价：</span>
                <span>${arr[1][i].money}</span>
                <span>Q币</span>
              </div>
              <div>
                <span>微信价：</span>
                <span>￥</span>
                <span>${arr[1][i].wechatMoney}</span>
              </div>
              <div></div>
            </section>
            <aside>期限：永久</aside>
            <div class="content2Div2Btn">
              <button class="content2Div2Btn1">加入购物车</button>
              <button class="content2Div2Btn2">赠送</button>
            </div>
          </div>`
          }
          
        }
        $(".content2Div2 .content2Div2Ajax").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
    })
  }


  //将index.html 里的 content2的数据跟commodity链接
  if(id >= 112 && id <= 116){
    $.ajax({
      type: "get",
      url: "./data/data.json",
      dataType: "json",
      success: function(arr){
        var str = ``;
        for (var i = 0; i < arr[2].length; i++) {
          if(id == arr[2][i].id){
            str += `<div id="small">
            <img src="${arr[2][i].image2}" alt="">
            <div id="mask"></div>
          </div>
          <div id="big">
            <img src="${arr[2][i].image2}" alt="">
          </div>
          <div class="msg">
            <p>${arr[2][i].name}</p>
            <section>
              <div>
                <span>Q币价：</span>
                <span>${arr[2][i].money}</span>
                <span>Q币</span>
              </div>
              <div>
                <span>微信价：</span>
                <span>￥</span>
                <span>${arr[2][i].wechatMoney}</span>
              </div>
              <div></div>
            </section>
            <aside>期限：永久</aside>
            <div class="content2Div2Btn">
              <button class="content2Div2Btn1">加入购物车</button>
              <button class="content2Div2Btn2">赠送</button>
            </div>
          </div>`
          }
          
        }
        $(".content2Div2 .content2Div2Ajax").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
    })
  }


  // shopList
  $(".shopList div ul").mouseenter(function(){
    $(this).css({
      backgroundColor: "#fffeee"
    }).mouseleave(function(){
      $(this).css({
        backgroundColor: "#f3f4f6"
      })
    })
  })




  //加载页面的时候调一次数据更新
  sc_msg();
  sc_num();

  //给购物车按钮添加点击
  $(".content2Div2Ajax").on("click", ".content2Div2Btn1", function(){
    var first = !($.cookie("goods"));
    if(first){
      $.cookie("goods", JSON.stringify([{id:id,num:1}]), {
        expires: 7
      })
    }else{
      var cookieArr = JSON.parse($.cookie("goods"));
      var same = false;
      for (var i = 0; i < cookieArr.length; i++) {
        if(cookieArr[i].id == id){
          same = true;
          break;
        }
      }
      same ? cookieArr[i].num++ : cookieArr.push({id:id, num: 1});

      $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
      })
    }
    


    sc_msg();
    sc_num();
  })


  //加载下边购物车里面的假数据
  function sc_msg(){
    var cookieStr = $.cookie("goods");
    if(!cookieStr){
      return;
    }
    //下载所有的商品数据
    $.ajax({
      url: "./data/data.json",
      success: function(arr){
        var cookieArr = JSON.parse(cookieStr);
        var newArr = [];
        for (var i = 0; i < arr[1].length; i++) {
          for (var j = 0; j < cookieArr.length; j++) {
            if(cookieArr[j].id == arr[1][i].id){
              arr[1][i].num = cookieArr[j].num;
              newArr.push(arr[1][i])
              break;
              
            }
          }
        }

        var str = ``;
        for (var i = 0; i < newArr.length; i++) {
          str += `<ul  id="${newArr[i].id}">
          <li>
            <input class="inputAlone" type="checkbox"> 
          </li>
          <li>
            <img src="${newArr[i].image}" alt="">
            ${newArr[i].title}
          </li>
          <li>皮肤</li>
          <li>
            <span>${newArr[i].money}</span>
            <span>Q币</span>
          </li>
          <li>永久</li>
          <li class="addAndMinus">
            <a href="" onclick="return false">-</a>
            <a href="" onclick="return false">+</a>
            <input type="text" value="${newArr[i].num}" class="newNum">
          </li>
          <li>
            <span>${newArr[i].money * newArr[i].num}</span>
            <span>Q币</span>
          </li>
          <li>
            <a  class="delete">删除</a>
          </li>
        </ul>`
        }
        $(".ajaxDiv").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
    })
  }

  // 处理数量
  function sc_num(){
    var cookieStr = $.cookie("goods");
    var sum = 0;
    if(cookieStr){
      var cookieArr = JSON.parse(cookieStr);
      for (var i = 0; i < cookieArr.length; i++) {
        sum += cookieArr[i].num;
      }
    }
    $(".shopListNum").html(sum);
  }

  // 给下侧购物车的删除按钮添加点击
  $(".ajaxDiv").on("click", ".delete", function(){
    var id = $(this).closest("ul").remove().attr("id");
    var cookieArr = JSON.parse($.cookie("goods"));
    for (var i = 0; i < cookieArr.length; i++) {
      if(cookieArr[i].id == id){
        cookieArr.splice(i, 1);
        break;
      }
    }
    if(cookieArr.length){
      $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
      })
    }else{
      $.cookie("goods", null);
    }

    sc_num();
  })
  //给加减按钮添加点击
  $(".ajaxDiv").on("click", ".addAndMinus a", function(){
    var id = $(this).closest("ul").attr("id");
    var cookieArr = JSON.parse($.cookie("goods"));
    for (var i = 0; i < cookieArr.length; i++) {
      if(cookieArr[i].id == id){
        break;
      }
    }
    if(this.innerHTML == "+"){
      cookieArr[i].num++;
    }else{
      cookieArr[i].num == 1 ? alert("不能再写了！") : cookieArr[i].num--;
  
    }
    $.cookie("goods", JSON.stringify(cookieArr), {
      expires: 7
    })
    //修改页面上的数量
    $(this).siblings("input").val(`${cookieArr[i].num}`);
    sc_num();
  })


  //购物车全选按钮实现
  const inputAll = document.querySelector(".inputAll");

  inputAll.addEventListener("click", function(){
    for (let i = 0; i < $(".ajaxDiv").find(".inputAlone").length; i++) {
      $(".ajaxDiv").find(".inputAlone")[i].checked = this.checked;
    }
  })
  
  $('.ajaxDiv').on('click', '.inputAlone',function(){

    var isyes = true;
    var aInputs = $(".ajaxDiv").find(".inputAlone").filter("[type=checkbox]");
    aInputs.each(function(index, item){
        
        if(!$(item).prop("checked")){
            isyes = false;
        }
    })
    console.log(isyes)
    if(isyes){
        $(inputAll).prop("checked" ,true)
    }else{
        $(inputAll).prop("checked" , false)
    }
    })
  
  

})