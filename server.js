const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const countriesData = require('./countries.json');


const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.set('trust proxy', 1);
app.use(limiter);
app.use(helmet());
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