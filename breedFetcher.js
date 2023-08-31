const request = require("request");

const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  if (response.statusCode !== 200) {
    console.log("Request Failed");
    process.exit();
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("Breed not found");
    process.exit();
  }

  console.log(data[0].description);
});