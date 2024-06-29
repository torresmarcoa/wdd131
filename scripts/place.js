function calculateWindChill(temperature, windSpeed) {
    const windChill = (13.12 + 0.6215 * temperature - 11.37 * (windSpeed / 1.5) ** 0.16 + 0.3965 * temperature * (windSpeed / 1.5) ** 0.16).toFixed(2);
    return windChill;
  }

  const temperature = 14;
  const windSpeed = 4.12;

  document.getElementById("temp").innerHTML = temperature + " °C";
  document.getElementById("wind").innerHTML = windSpeed + " km/h";

  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill").innerHTML = windChill + " °C";
  }
  else {
    document.getElementById("wind-chill").innerHTML = "N/A";
  }