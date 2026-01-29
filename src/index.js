function updateTime() { 

let joburgElement = document.querySelector("#joburg");
let joburgDateElement = joburgElement.querySelector(".date");
let joburgTimeElement = joburgElement.querySelector(".time");
let joburgTime = moment().tz("Africa/Johannesburg");
joburgDateElement.innerHTML = joburgTime.format("MMMM Do YYYY");
joburgTimeElement.innerHTML = joburgTime.format("h:mm:ss [<small>]A[</small>]");


let hiroshimaElement = document.querySelector("#hiroshima");
let hiroshimaDateElement = hiroshimaElement.querySelector(".date");
let hiroshimaTimeElement = hiroshimaElement.querySelector(".time");
let hiroshimaTime = moment().tz("Asia/Tokyo");
hiroshimaDateElement.innerHTML = hiroshimaTime.format("MMMM Do YYYY");
hiroshimaTimeElement.innerHTML = hiroshimaTime.format(
  "h:mm:ss [<small>]A[</small>]");
}

updateTime()
setInterval(updateTime, 1000);