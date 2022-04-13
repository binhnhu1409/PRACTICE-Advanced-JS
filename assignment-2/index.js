//A method to get list of all countries

async function getAllCountries() {
	try {
		const response = await fetch('https://restcountries.com/v3.1/all');
		const countries = await response.json();
		console.log(countries)
	} catch (err) {
		console.error(err);
	}
}

getAllCountries();

//A method that accept a country name as input and search for that country, either by international or native name (such as Finland or Suomi, the API has endpoint for this)

async function searchCountry(name) {
	try {
		const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
		const searchingCountry = await response.json();
		console.log(searchingCountry)
	} catch (err) {
		console.error(err);
	}
}

searchCountry('Finland');

//A method that accepts a country name, find out what other countries it's bordering with

async function findBorders(name) {
	try {
		const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
		const country = await response.json();
		const borders = country[0].borders;
		console.log(borders)
	} catch (err) {
		console.error(err);
	}
}

findBorders('Vietnam');

//A method that accepts the code (2 characters) of a language, find out what countries are speaking it (the API has endpoint for this)

async function countrySpeaking(language) {
	try {
		const response = await fetch(`https://restcountries.com/v3.1/lang/${language}`)
		const countriesByLanguage = await response.json();
		console.log(countriesByLanguage.map((country) => country.name.common))
	} catch (err) {
		console.error(err)
	}
}

countrySpeaking("swe");

//A method that accepts a population number (in millions), find out what countries have more people than that

async function findByPopulation(number) {
	try {
		const response = await fetch('https://restcountries.com/v3.1/all')
		const countries = await response.json();
		const countriesByPopulation = countries.filter((country) => country.population > number)
		console.log(countriesByPopulation.map((selectedcountry) => selectedcountry.name.common))
	} catch (err) {
		console.error(err)
	}
}

findByPopulation("14090000")