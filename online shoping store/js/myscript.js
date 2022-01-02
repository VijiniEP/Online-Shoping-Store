function loadData(name){
	if(name=="button1"){

	document.getElementById("image1").src="picture1.jpg";
	document.getElementById("para").innerHTML="The iPhone XS and iPhone Xs Max,introdused on september 12,2018,are Appple's two new flagship iPhone<br>featuring the most advanced technology Apple has ever introdused in an iPhone.Both of the new iPhone look similar<br>to the iPhone X,but it addition to the 5,8-inch model,there is also now a larger 6.5-inch model.iPhone XS and iPhone<br>XS Max feature the sharepest OLED displays and highest pixel density of any Apple device,with support for Dolby<br>Vision,HDR 10,and Wide Color.iPhone XS Max,the 6.5-inch iPhone,is the largest display Apple has offered,but in<br>a body that's the size of the iPhone 8 plus.According to Apple,the iPhone XS Max have the most durable glass<br>ever in a smarphone with better scratch resistance.";

	}
	else if(name=="button2"){

	document.getElementById("image1").src="picture2.jpg";
	document.getElementById("para").innerHTML="The iPhone XS and iPhone Xs Max,introdused on september 12,2018,are Appple's two new flagship iPhone<br>featuring the most advanced technology Apple has ever introdused in an iPhone.Both of the new iPhone look similar<br>to the iPhone X,but it addition to the 5,8-inch model,there is also now a larger 6.5-inch model.iPhone XS and iPhone<br>XS Max feature the sharepest OLED displays and highest pixel density of any Apple device,with support for Dolby<br>Vision,HDR 10,and Wide Color.iPhone XS Max,the 6.5-inch iPhone,is the largest display Apple has offered,but in<br>a body that's the size of the iPhone 8 plus.According to Apple,the iPhone XS Max have the most durable glass<br>ever in a smarphone with better scratch resistance.";



	}
	else if(name=="button3"){

	document.getElementById("image1").src="picture3.jpg";
	document.getElementById("para").innerHTML="The iPhone XS and iPhone Xs Max,introdused on september 12,2018,are Appple's two new flagship iPhone<br>featuring the most advanced technology Apple has ever introdused in an iPhone.Both of the new iPhone look similar<br>to the iPhone X,but it addition to the 5,8-inch model,there is also now a larger 6.5-inch model.iPhone XS and iPhone<br>XS Max feature the sharepest OLED displays and highest pixel density of any Apple device,with support for Dolby<br>Vision,HDR 10,and Wide Color.iPhone XS Max,the 6.5-inch iPhone,is the largest display Apple has offered,but in<br>a body that's the size of the iPhone 8 plus.According to Apple,the iPhone XS Max have the most durable glass<br>ever in a smarphone with better scratch resistance.";


	
	}
	else if(name=="button4"){

	document.getElementById("image1").src="picture4.jpg";
	document.getElementById("para").innerHTML="The iPhone XS and iPhone Xs Max,introdused on september 12,2018,are Appple's two new flagship iPhone<br>featuring the most advanced technology Apple has ever introdused in an iPhone.Both of the new iPhone look similar<br>to the iPhone X,but it addition to the 5,8-inch model,there is also now a larger 6.5-inch model.iPhone XS and iPhone<br>XS Max feature the sharepest OLED displays and highest pixel density of any Apple device,with support for Dolby<br>Vision,HDR 10,and Wide Color.iPhone XS Max,the 6.5-inch iPhone,is the largest display Apple has offered,but in<br>a body that's the size of the iPhone 8 plus.According to Apple,the iPhone XS Max have the most durable glass<br>ever in a smarphone with better scratch resistance.";


	}
	else{
		alert("Invalid");
	}



}



function priceloop(){

	var news=["phone1=100000.00/=","phone2=200000.00","phone3=350000.00","phone4=400000.00","phone5=500000.00"];
	var txt="";

	for(var i in news)
	
			
		{
			txt+=news[i]+"<br/>";
		}
		
		document.getElementById("image1").src="picture5.jpg";
		document.getElementById("para").innerHTML=txt;	


		

}


function hprice(){

	var news=[];
	var txt="";
	news["phone1"]="600000.00";
	news["phone2"]="800000.00";
	news["phone3"]="900000.00";
	news["phone4"]="1000000.00";
	news["phone5"]="200000.00";
	news["phone6"]="3400000.00";
	news["phone7"]="700000.00";
	news["phone8"]="800000.00";

	
	for(var item in news)
	{
		if(news[item]>1000)
		{
			txt+=item+":"+news[item]+"<br/>";
		}

	}
	document.getElementById("image1").src="picture7.jpg";
	document.getElementById("para").innerHTML=txt;	
	
}

function lprice(){

	var news=[];
	var txt="";
	news["phone1"]="2000.00";
	news["phone2"]="8000.00";
	news["phone3"]="1500.00";
	news["phone4"]="4000.00";
	news["phone5"]="8700.00";
	news["phone6"]="6000.00";
	news["phone7"]="4500.00";
	news["phone8"]="7000.00";

	
	for(var item in news)
	{
		if(news[item]>1000)
		{
			txt+=item+":"+news[item]+"<br/>";
		}

	}
	document.getElementById("image1").src="picture6.jpg";
	document.getElementById("para").innerHTML=txt;	
	
}
function checkPasswords(){

	if(document.getElementById("pass").value != document.getElementById("rpass").value){
	
	alert("passwords are mismatched ! !");
	return false;


	}
	else{

		alert("password matched!!");
		return true;
	
	}

}

function enableButton(){

	if(document.getElementById("policy").checked){
	
		document.getElementById("btn").disabled=false;

	}
	else{
		document.getElementById("btn").disabled=true;

	}



}





















