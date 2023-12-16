const apiKey = "eab8f3712a444b07b64110536231212";
const city = "Kolkata";

const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("API response:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });
