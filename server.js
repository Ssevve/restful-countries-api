const express = require('express');
const app = express();
const cors = require('cors');
const countriesData = require('./countries.json');

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/countries', (req, res) => {
  res.json(countriesData);
});

app.get('/api/countries/random', (req, res) => {
  const countryCount = countriesData.length;
  const randomIndex = Math.floor(Math.random() * countryCount);
  const randomCountry = countriesData[randomIndex];
  res.json(randomCountry);
});

app.get('/api/countries/:countryName', (req, res) => {
  const countryName = req.params.countryName.toLowerCase();
  const country = countriesData.find(country => country.countryName.toLowerCase() === countryName);

  if (country) res.json(country);
  else res.status(404).json({ "error": "country not found" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});