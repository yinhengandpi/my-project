$li=$(".download");
$span=$(".download>span");
$em=$(".download em");
$li.mouseover(function(){
	$span.css("display","block");
	$em.css("display","block");
});
$li.mouseout(function(){
	$span.css("display","none");
	$em.css("display","none");
});
$div=$(".shopcar div");
$(".shopcar").mouseover(function(){
	$(this).css("background","#fff")
	$div.css("height","100px");
	$div.html("购物车中还没有商品，赶紧选购吧！")
})
$(".shopcar").mouseout(function(){
	$(this).css("background","#424242")
	$div.css("height","0");
	$div.html("");
})

//全部分类
$subnav=$(".subnav>li:first");
$subnav.mouseover(function(e){
	$($(this).children()[1]).css("display","block");	
})
$subnav.mouseout(function(e){
	$($(this).children()[1]).css("display","none");

	
})
//后面的导航
$subnav1=$(".subnav>li:gt(0) ");
$subnav1.mouseover(function(e){
	$($(this).children()[1]).css({"height":"243px","padding-bottom":"0px"});
})
$subnav1.mouseout(function(e){
	$($(this).children()[1]).css({"height":"0px","padding-bottom":"0px"});	
})








//二级导航的js
$subgoods=$(".subgoods>li");
$subnav1=$(".subnav1");
$subgoods.mouseover(function(e){
//	e=e||window.event;
//	var target=e.target||e.srcElement;
	$subnav1.css("display","none");
	$($(this).children()[2]).css("display","block");

})

//轮播图
$lunbo=$(".lunbo")
$but=$(".lunbo div")
$butr=$(".lunbo .butr")
$butl=$(".lunbo .butl")
$img=$(".lunbo img")
$li=$(".lunbo ul li");
var img_index=0;

$butr.click(function(){
			img_index++;
//			console.log(img_index)
			if(img_index==4){
				img_index=0;
			}
			$($img[img_index]).attr("class","active");
			$($img[img_index]).siblings().removeClass();
			$($li[img_index]).attr("class","active");
			$($li[img_index]).siblings().removeClass();
})
$butl.click(function(){
		img_index--;
		if(img_index==-1){
			img_index=3;
		}
		$($img[img_index]).attr("class","active");
		$($img[img_index]).siblings().removeClass();
		$($li[img_index]).attr("class","active");
		$($li[img_index]).siblings().removeClass();
})
$li.click(function(){
		img_index=$(this).attr("yh");
		$(this).attr("class","active");
		$(this).siblings().removeClass();
		$($img[img_index]).attr("class","active");
		$($img[img_index]).siblings().removeClass();
})

//定时器
timer=setInterval(function(){
			$butr.click();
	},5000)

$lunbo.mouseover(function(){
	clearInterval(timer);
})
$lunbo.mouseout(function(){
			timer=setInterval(function(){
			$butr.click();
	},5000)
})



//滚动监听
var $lunbo1=$(".body_left")
var $bottom=($(".submi").offset().top)
$(document).scroll(function(){
var $x=$(window).scrollTop()//当前滚动的高度
var $h=parseInt($lunbo1.css("height"))
var p=$bottom-$h
	if($x>100 && $x<1200){
		$lunbo1.css({
			position:"fixed",
			top:'100px',
		})
		console.log($(".body_left").offset().top)
	}else{
		$lunbo1.css({
			position:"",
			top:'100px',
		})
		
	}
	if($x>=1150){
		$lunbo1.css({
			position:"relative",
			top:'1000px',
		})
	}

	
})


//点击切换不同颜色的轮播图
var arr=["img/purplephone.jpg","img/lunbo2.jpg","img/lunbo3.jpg","img/lunbo4.jpg"]//紫色轮播
var arr1=["img/bluephone.jpg","img/blue2.jpg","img/blue3.jpg","img/blue4.jpg"]//蓝色轮播
var arr2=["img/black1.jpg","img/black2.jpg","img/black3.jpg","img/black4.jpg"]//黑色轮播
var $cho=$(".body_right .choice_color div")
var $chospan=$(".body_right .choice_color div>span:nth-of-type(2)")
var $body_left=$(".body_left")
var $lunbo_img=$(".lunbo>img")
var $lunbo=$(".lunbo")
$color=$(".color")
$cho.click(function(){
	$(this).addClass("active")
	$(this).siblings().removeClass();
	$chospan.removeClass();
	$($(this).children()[1]).addClass("active");
	var $colorC=$($(this).children()[1]).html()
	$color.html($colorC);							//点击切换颜色数值
	var $yh=$(this).attr("yh");
	if($yh==0){
		for(var i=0;i<arr.length;i++){
			$($img[i]).attr("src",`${arr[i]}`)
			$($img[0]).attr("class","active")
			
		}
		img_index=3;                         //污染轮播的index，让下一次轮播重新开始
	}
	if($yh==1){
		for(var i=0;i<arr1.length;i++){
			$($img[i]).attr("src",`${arr1[i]}`)
			$($img[0]).attr("class","active")
			
		}
		img_index=3;
	}
	if($yh==2){
		for(var i=0;i<arr2.length;i++){
			$($img[i]).attr("src",`${arr2[i]}`)
			$($img[0]).attr("class","active")
			
		}
		img_index=3;
	}	
})

//点击增加增值服务
$protect=$(".mi_protect_block")
$precieA=$(".priceA")//增值服务里面的所有价格
$allprice=$(".allprice")	;	
//console.log($allprice)//总价
$pro_span=$(".mi_protect_block span")
$protect.click(function(){
	$(this).toggleClass("active");
	$(this).children().toggleClass("active");
	$($(this).children()[2]).children().toggleClass("active");
	$($($(this).children()[2]).children()[2]).children().toggleClass("active");
	$(this).siblings().removeClass("active");
	$(this).siblings().children().removeClass("active");
	$(this).siblings().children().children().removeClass("active");
	$(this).siblings().children().children().children().removeClass("active");
	var $pro_yh=$(this).attr("yh");
	if($(this).hasClass("active")){
		$($precieA[$pro_yh]).css("display","block");
	}
	
	for(var i=0;i<$precieA.length;i++){
			if($($protect[i]).hasClass("active")==false){	
			$($precieA[i]).css("display","none");
		}
	}	
//	手机总价
    var $precie1=parseInt($precieC.html())
	for(var i=0,precie2=0;i<$precieA.length;i++){
			if($($precieA[i]).css("display")!="none"){	
			precie2+=parseInt($($($precieA[i]).children()[1]).html())
		}
	}
	$allprice.html(precie2+$precie1)	
})

//点击切换套餐
$ice=$(".choice_ben>div")
$ice_span=$(".choice_ben>div span")

$precieC=$(".priceC")//总价里面的价格
$phonetype=$(".type")

$ice.click(function(){
	$ice.siblings().removeClass();
	$(this).addClass("active");
	$ice_span.removeClass();
	$($(this).children()[0]).addClass("active");
	$($(this).children()[1]).addClass("active1");
//	console.log($ice.index())
	var $type1=$($(this).children()[0]).html();
	var $pricrB=$($(this).children()[1]).html();
	$phonetype.html($type1);
	$precieC.html(parseInt($pricrB));
	var $precie1=parseInt($precieC.html())
	for(var i=0,precie2=0;i<$precieA.length;i++){
			if($($precieA[i]).css("display")!="none"){	
			precie2+=parseInt($($($precieA[i]).children()[1]).html())
		}
	}
	$allprice.html(precie2+$precie1)
})











































