function updateTime() {
  let joburgElement = document.querySelector("#joburg");
  if (joburgElement) {
    let joburgDateElement = joburgElement.querySelector(".date");
    let joburgTimeElement = joburgElement.querySelector(".time");
    let joburgTime = moment().tz("Africa/Johannesburg");
    joburgDateElement.innerHTML = joburgTime.format("MMMM Do YYYY");
    joburgTimeElement.innerHTML = joburgTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  let hiroshimaElement = document.querySelector("#hiroshima");
  if (hiroshimaElement) {
    let hiroshimaDateElement = hiroshimaElement.querySelector(".date");
    let hiroshimaTimeElement = hiroshimaElement.querySelector(".time");
    let hiroshimaTime = moment().tz("Asia/Tokyo");
    hiroshimaDateElement.innerHTML = hiroshimaTime.format("MMMM Do YYYY");
    hiroshimaTimeElement.innerHTML = hiroshimaTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.split("/").pop().replace("_", " ");
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
        </div>
        <a href="/">Homepage</a>`;
}
updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
