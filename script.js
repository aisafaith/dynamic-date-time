//date and time
const date = document.getElementById("date");
const time = document.getElementById("time");


const optionsDate = { 
	weekday: 'long', 
	year: 'numeric', 
	month: 'short', 
	day: 'numeric' };

const optionsTime = {
	hour: 'numeric',
  	minute: 'numeric',
  	hour12: true
}


function updateTime() {
	const currentDate = new Date();
	currentTime = currentDate.toLocaleTimeString('en-us', optionsTime);
	date.innerHTML = currentDate.toLocaleDateString('en-us', optionsDate);
	time.innerHTML = currentTime;
};


//greeting

const greeting = document.getElementById("greeting");
const name = document.getElementById("name");


function stylingNight(){
	greeting.innerHTML = "Good evening,";
	document.body.style.backgroundImage = "url('./img2/evening.jpg')";
	time.style.color = "lightpink";
	date.style.color = "white";
	name.style.color = "lightpink";
};

function stylingAfternoon(){
	greeting.innerHTML = "Good afternoon,"
	document.body.style.backgroundImage = "url('./img2/afternoon.jpg')";
	name.style.color = "#428181";
};

function updateBackground() {
	const currentDate = new Date();

	const currentHour = currentDate.getHours();
	if (currentHour > 17 || hour < 6) {
		stylingNight();
	} else if (currentHour >= 12) {
		stylingAfternoon();
	}
};


function updateDateTime() {
  updateBackground();
  updateTime();
  setTimeout(updateDateTime, 60000); // update every 1 minute
}

updateDateTime();


	
	



