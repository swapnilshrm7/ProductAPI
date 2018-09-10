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

function bookProduct(Type,id) {
	var url = "http://localhost:49256/api/"+Type;
	var Product ={};
	var xhr = new XMLHttpRequest();
	Product.BookOrSave="book";
	Product.Id=id;
	var json = JSON.stringify(Product);
	xhr.open("PUT",url,true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.send(json);
}
function saveProduct(Type,id) {
	var url = "http://localhost:49256/api/"+Type;
	var Product ={};
	var xhr = new XMLHttpRequest();
	Product.BookOrSave="save";
	Product.Id=id;
	var json = JSON.stringify(Product);
	xhr.open("PUT",url,true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.send(json);
}
function getAllCarProducts()
{
	var xhttp = new XMLHttpRequest();
	var result = document.getElementById("Car");
	result.innerHTML="";
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			productresult = JSON.parse(this.responseText);
			productresult.forEach(currentproduct => {
				var content;
				content=
				"<div class='card'>"+
				"<div class='row card-body'>"+
				"<div class='col'><h3 class='card-title'>"+ currentproduct.Id + "</h3></div>"+
				"<div class='col'>"+
				" Name : "+ currentproduct.Name +
				"</div>"+
				"<div class='col' >"+
				" Price: " + currentproduct.Price +
				"</div>"+
				"<div class='col' >"+" Start Time:" + currentproduct.StartTime +"</div>"+
				"<div class='col' >"+" End Time:" + currentproduct.EndTime +"</div>";
				if(currentproduct.IsBooked==false) {
					content += "<input style='margin:10px' class='col' type='button' value='Book' OnClick=\"bookProduct(\'Car\',"+ currentproduct.Id + ")\" >"; 
				}
				else {
					content += "<input style='margin:10px;' class='col' type='button' value='Booked' disabled>"; 
				}
				if(currentproduct.IsSaved==false) {
					content += "<input style='margin:10px' class='col' type='button' value='Save' OnClick=\"saveProduct(\'Car\',"+ currentproduct.Id + ")\">";
				}
				else {
					content += "<input style='margin:10px' class='col' type='button' value='Saved' disabled>";
				}
				"</div>"+
				"</div>"
				result.innerHTML += content; 
				"</div>"+
				"</div>"
			});
		}
	};
	xhttp.open("GET", "http://localhost:49256/api/Car", true);
	xhttp.send();
}
function getAllAirProducts()
{
	var xhttp = new XMLHttpRequest();
	var result = document.getElementById("Air");
	result.innerHTML="";
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			productresult = JSON.parse(this.responseText);
			productresult.forEach(currentproduct => {
				var content;
				content=
				"<div class='card'>"+
				"<div class='row card-body'>"+
				"<div class='col'><h3 class='card-title'>"+ currentproduct.Id + "</h3></div>"+
				"<div class='col'>"+
				" Name : "+ currentproduct.Name +
				"</div>"+
				"<div class='col' >"+
				" Price: " + currentproduct.Price +
				"</div>"+
				"<div class='col' >"+" Departure Time:" + currentproduct.DepartureTime +"</div>"+
				"<div class='col' >"+" Arrival Time:" + currentproduct.ArrivalTime +"</div>";
				if(currentproduct.IsBooked==false) {
					content += "<input style='margin:10px' class='col' type='button' value='Book' OnClick=\"bookProduct(\'Air\',"+ currentproduct.Id + ")\" >"; 
				}
				else {
					content += "<input style='margin:10px;' class='col' type='button' value='Booked' disabled>"; 
				}
				if(currentproduct.IsSaved==false) {
					content += "<input style='margin:10px' class='col' type='button' value='Save' OnClick=\"saveProduct(\'Air\',"+ currentproduct.Id + ")\">";
				}
				else {
					content += "<input style='margin:10px' class='col' type='button' value='Saved' disabled>";
				}
				"</div>"+
				"</div>"
				result.innerHTML += content; 
				"</div>"+
				"</div>"
			});
		}
	};
	xhttp.open("GET", "http://localhost:49256/api/Air", true);
	xhttp.send();
}
function getAllActivityProducts()
{
	var xhttp = new XMLHttpRequest();
	var result = document.getElementById("Activity");
	result.innerHTML="";
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			productresult = JSON.parse(this.responseText);
			productresult.forEach(currentproduct => {
				var content;
				content=
				"<div class='card'>"+
				"<div class='row card-body'>"+
				"<div class='col'><h3 class='card-title'>"+ currentproduct.Id + "</h3></div>"+
				"<div class='col'>"+
				" Name : "+ currentproduct.Name +
				"</div>"+
				"<div class='col' >"+
				" Price: " + currentproduct.Price +
				"</div>"+
				"<div class='col' >"+" Start Time:" + currentproduct.StartTime +"</div>"+
				"<div class='col' >"+" End Time:" + currentproduct.TotalTime +"</div>";
				if(currentproduct.IsBooked==false) {
					content += "<input style='margin:10px' class='col' type='button' value='Book' OnClick=\"bookProduct(\'Activity\',"+ currentproduct.Id + ")\" >"; 
				}
				else {
					content += "<input style='margin:10px;' class='col' type='button' value='Booked' disabled>"; 
				}
				if(currentproduct.IsSaved==false) {
					content += "<input style='margin:10px' class='col' type='button' value='Save' OnClick=\"saveProduct(\'Activity\',"+ currentproduct.Id + ")\">";
				}
				else {
					content += "<input style='margin:10px' class='col' type='button' value='Saved' disabled>";
				}
				"</div>"+
				"</div>"
				result.innerHTML += content; 
				"</div>"+
				"</div>"
			});
		}
	};
	xhttp.open("GET", "http://localhost:49256/api/Activity", true);
	xhttp.send();
}
function getAllHotelProducts()
{
	var xhttp = new XMLHttpRequest();
	var result = document.getElementById("Hotel");
	result.innerHTML="";
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			productresult = JSON.parse(this.responseText);
			productresult.forEach(currentproduct => {
				var content;
				content=
				"<div class='card'>"+
				"<div class='row card-body'>"+
				"<div class='col'><h3 class='card-title'>"+ currentproduct.Id + "</h3></div>"+
				"<div class='col'>"+
				" Name : "+ currentproduct.Name +
				"</div>"+
				"<div class='col' >"+
				" Price: " + currentproduct.Price +
				"</div>"+
				"<div class='col' >"+" Room Type:" + currentproduct.RoomType +"</div>"+
				"<div class='col' >"+" CheckIn Time:" + currentproduct.CheckIn +"</div>"+
				"<div class='col' >"+" CheckOut Time:" + currentproduct.CheckOut +"</div>"+
				"<div class='col' >"+" Rating:" + currentproduct.Rating +"</div>";
				if(currentproduct.IsBooked==false) {
					content += "<input style='margin:10px' class='col' type='button' value='Book' OnClick=\"bookProduct(\'Hotel\',"+ currentproduct.Id + ")\" >"; 
				}
				else {
					content += "<input style='margin:10px;' class='col' type='button' value='Booked' disabled>"; 
				}
				if(currentproduct.IsSaved==false) {
					content += "<input style='margin:10px' class='col' type='button' value='Save' OnClick=\"saveProduct(\'Hotel\',"+ currentproduct.Id + ")\">";
				}
				else {
					content += "<input style='margin:10px' class='col' type='button' value='Saved' disabled>";
				}
				"</div>"+
				"</div>"
				result.innerHTML += content; 
				"</div>"+
				"</div>"
			});
		}
	};
	xhttp.open("GET", "http://localhost:49256/api/Hotel", true);
	xhttp.send();
}