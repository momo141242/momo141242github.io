$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="吳妍伶" &&  pwd=="0918"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="BirthdayCake.html";},2000);
		}
	else{
		alert("帳號或密碼錯誤");
	}
});