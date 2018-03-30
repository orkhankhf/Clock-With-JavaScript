function clock(hour, minute, second){
	this.saat = hour;
	this.deqiqe = minute;
	this.saniye = second;
	
	/* Set time */
	var second_degree = second * 6;
	document.getElementsByClassName("second-hand")[0].style.transform = "rotate(" + second_degree + "deg)";
	var minute_degree = minute * 6;
	document.getElementsByClassName("minute-hand")[0].style.transform = "rotate(" + minute_degree + "deg)";
	var hour_degree = hour * 15;
	document.getElementsByClassName("hour-hand")[0].style.transform = "rotate(" + hour_degree + "deg)";

	setInterval(function(){
		second_degree += 6;
		document.getElementsByClassName("second-hand")[0].style.transform = "rotate(" + second_degree + "deg)";
		if(new Date().getSeconds() == 0){
			minute_degree += 6;
			document.getElementsByClassName("minute-hand")[0].style.transform = "rotate(" + minute_degree + "deg)";
		}
		if(new Date().getMinutes() == 1){
			hour_degree += 15;
			document.getElementsByClassName("hour-hand")[0].style.transform = "rotate(" + hour_degree + "deg)";
		}
	},1000);
}

now = new Date();
hour = now.getHours();
minute = now.getMinutes();
second = now.getSeconds();

var start = new clock(hour, minute, second);