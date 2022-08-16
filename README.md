# restful-countries-api

A REST API for getting country information including country name, flag icons, continent, and a population count.

**Link to project:** [here](https://restful-countries-api.herokuapp.com/)

## Tech used: ![HTML5 Badge](https://img.shields.io/badge/-HTML5-E34F26?logo=HTML5&logoColor=white&style=flat) ![JavaScript Badge](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=CSS3&logoColor=white&style=flat) ![NodeJS Badge](https://img.shields.io/badge/-NodeJS-339933?logo=Node.js&logoColor=white&style=flat) ![Express Badeg](https://img.shields.io/badge/-Express-ffffff?logo=Express&logoColor=000000&style=flat)

Practiced creating basic endpoints and sending data from the server in the JSON format.

Tried web scraping for the first time to get data from the webpage table.

## Lessons Learned:

- Including an external JSON file in NodeJS
- Scraping data from a webpage table
- Deploying a project to heroku

## Endpoints:

The endpoint for connecting: `https://restful-countries-api.herokuapp.com`


| Endpoint                      | Response                                                                                   |
| ------------------------------| -------------------------------------------------------------------------------------------|
| `/api/countries`              | Gets list a of all countries with country name, flag icons, continent and population count.|
| `/api/countries/random`       | Gets random country with country name, flag icons, continent and population count.         |
| `/api/countries/{countryName}`| Gets a country with country name, flag icons, continent and population count.              |


**All country data used in the API is from [this Wiki page](https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population).**
