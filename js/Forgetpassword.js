
var verifyCode = new GVerify("v_container");
var $phone=$(".tellphone");
var $tuma=$(".tuma");
var $tishi1=$(".tishi1");
var $tishi2=$(".tishi2");
var $but=$("#my_button");
var phonebool=false;
var tuma=false;
var $p3=0;
		$phone.focus(function(){
			$tishi1.html("")
			$(this).css("borderColor","")
		})
		$tuma.focus(function(){
			$tishi2.html("")
			$(this).css("borderColor","")
		})
		
		$("button").click (function(){		
    	var reg = new RegExp(/^1[34578]\d{9}$/); //手机
		var reg1 = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
		var $val=$phone.val()
		console.log($val)
			if($phone.val()==""){
				$tishi1.html("请输入账号")
				$phone.css("borderColor","red");
				phonebool=false;
			}else if(reg.test($phone.val()) || reg1.test($phone.val())){
				phonebool=true;
			}else{
				$tishi1.html("帐号名称格式错误")
				$phone.css("borderColor","red");
				phonebool=false;
			}
			var res = verifyCode.validate(document.getElementById("code_input").value);
//			console.log(res)
			if(phonebool){	
				if($tuma.val()==""){
					$tishi2.html("请输入验证码")
					$tuma.css("borderColor","red")
					tuma=false;
				}else if(res){
					tuma=true;
				}else{
					$tishi2.html("验证码错误或已过期")
					$tuma.css("borderColor","red");
					tuma=false;
				}
			}
			
			if(tuma && phonebool){
//				$but.click(function(){
					location.replace("safe.html")
//					window.open("safe.html","_self")
//				})
//				$but.click();
			}
		}) 


var $help=$(".help")
var $motai=$(".motai")
var $jiantou=$(".jiantou")
var $list=$(".list>ul")
var $li=$(".list>ul li")
var $p=$(".cho")
var $ok=$(".ok")
var $canso=$(".canso")
$help.click(function(){
	$motai.css("display","block")
	$p.html("中国+86")
})
$jiantou.click(function(){
	$list.css("display","block")
})
$li.click(function(){
	$list.css("display","none")
	
	$p.html($(this).html())
})
$ok.click(function(){
	$motai.css("display","none")
})
$canso.click(function(){
	$motai.css("display","none")
})












