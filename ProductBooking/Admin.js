$(document).ready(function(){
    $("#AirClick").click(function(){
		$("#Hotel").css("display","none");
		$("#Activity").css("display","none");
		$("#Car").css("display","none");
		$("#Air").css("display","block");
	});
	$("#ActivityClick").click(function(){
		$("#Hotel").css("display","none");
		$("#Activity").css("display","block");
		$("#Car").css("display","none");
		$("#Air").css("display","none");
	});
	$("#CarClick").click(function(){
		$("#Hotel").css("display","none");
		$("#Activity").css("display","none");
		$("#Car").css("display","block");
		$("#Air").css("display","none");
	});
	$("#HotelClick").click(function(){
		$("#Hotel").css("display","block");
		$("#Activity").css("display","none");
		$("#Car").css("display","none");
		$("#Air").css("display","none");
	});
});
function addAirProduct()
{
	var url = "http://localhost:49256/api/Air";
	var airProduct ={};
	airProduct.Name=document.getElementById("AirName").value;
	airProduct.Price=document.getElementById("Airprice").value;
	airProduct.IsBooked=document.getElementById("IsBookedAir").value;
	airProduct.DepartureTime=document.getElementById("Departure").value;
	airProduct.IsSaved=document.getElementById("IsSavedAir").value;
	airProduct.ArrivalTime=document.getElementById("Arrival").value;
	var json = JSON.stringify(airProduct);
	var xhr = new XMLHttpRequest();
	xhr.open("POST",url,true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.send(json);
}
function addActivityProduct()
{
	var url = "http://localhost:49256/api/Activity";
	var airProduct ={};
	airProduct.Name=document.getElementById("ActName").value;
	airProduct.Price=document.getElementById("Actprice").value;
	airProduct.IsBooked=document.getElementById("IsBookedAct").value;
	airProduct.StartTime=document.getElementById("StartTimeAct").value;
	airProduct.IsSaved=document.getElementById("IsSavedAct").value;
	airProduct.TotalTime=document.getElementById("EndTimeAct").value;
	var json = JSON.stringify(airProduct);
	var xhr = new XMLHttpRequest();
	xhr.open("POST",url,true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.send(json);
}
function addCarProduct()
{
	var url = "http://localhost:49256/api/Car";
	var airProduct ={};
	airProduct.Name=document.getElementById("CarName").value;
	airProduct.Price=document.getElementById("Carprice").value;
	airProduct.IsBooked=document.getElementById("IsBookedCar").value;
	airProduct.StartTime=document.getElementById("StartTimeCar").value;
	airProduct.IsSaved=document.getElementById("IsSavedCar").value;
	airProduct.EndTime=document.getElementById("EndTimeCar").value;
	var json = JSON.stringify(airProduct);
	var xhr = new XMLHttpRequest();
	xhr.open("POST",url,true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.send(json);
}
function addHotelProduct()
{
	var url = "http://localhost:49256/api/Hotel";
	var airProduct ={};
	airProduct.Name=document.getElementById("HotelName").value;
	airProduct.Price=document.getElementById("Hotelprice").value;
	airProduct.Rating=document.getElementById("Rating").value;
	airProduct.RoomType=document.getElementById("RoomType").value;
	airProduct.IsBooked=document.getElementById("IsBookedHotel").value;
	airProduct.CheckIn=document.getElementById("CheckIn").value;
	airProduct.IsSaved=document.getElementById("IsSavedHotel").value;
	airProduct.CheckOut=document.getElementById("CheckOut").value;
	var json = JSON.stringify(airProduct);
	var xhr = new XMLHttpRequest();
	xhr.open("POST",url,true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.send(json);
}