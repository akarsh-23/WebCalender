var month = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
var weekday = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
var weekdayShort = [
	"sun",
	"mon",
	"tue",
	"wed",
	"thu",
	"fri",
	"sat"
];

var date = new Date();
var today = new Date();

function renderDate(){
	var firstdate = date.getDay(date.setDate(1));
	var endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	document.getElementById("month").innerHTML = month[date.getMonth()];
	document.getElementById("year").innerHTML = date.getFullYear();
	
	for(i=1,j=firstdate;i<=endDate;i++,j++){
		if(i==today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear()== today.getFullYear()){
			document.getElementsByClassName("date")[j].style.color = "white";
			document.getElementsByClassName("date")[j].style.textShadow = "0px 0px 2px white";
			document.getElementsByClassName("date")[j].style.backgroundColor = "blueViolet";
		}
		document.getElementsByClassName("date")[j].innerHTML = i;
	}
	activeDate();
}

function moveDate(para)
{
	if(para=='prev')
	{
		date.setMonth(date.getMonth()-1);
		clearCalender();
		renderDate();
	}
	else if(para == 'next')
	{
		date.setMonth(date.getMonth()+1);
		clearCalender();
		renderDate();
	}
}

function clearCalender()
{
	for(i=0;i<42;i++)
	{
		document.getElementsByClassName("date")[i].innerHTML = "";
		document.getElementsByClassName("date")[i].style.color = "blueViolet";
		document.getElementsByClassName("date")[i].style.textShadow = "0px 0px 0px white";
		document.getElementsByClassName("date")[i].style.backgroundColor = "whitesmoke";
	}
}