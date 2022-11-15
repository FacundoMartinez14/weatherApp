import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards.jsx';
import About from './components/About';
import Ciudad from './components/Ciudad';
import logo from './imgs/city.png';
import Swal from 'sweetalert2'

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
	const [cities, setCities] = useState([]);
	function onClose(id) {
		setCities((oldCities) => oldCities.filter((c) => c.id !== id));
	}
	const handleAlert = (boolean) => {
		if(boolean){
			Swal.fire({
				title: "Looking for city...",
				didOpen: () => {
				  Swal.showLoading();
				},
			  });
		}else{
			Swal.close()
		}
	}
	function onSearch(ciudad) {
		//Llamado a la API del clima
		handleAlert(true)
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
		)
			.then((r) => r.json())
			.then((recurso) => {
				if (recurso.main !== undefined) {
					handleAlert(false)
					const ciudad = {
						min: Math.round(recurso.main.temp_min - 273.15),
						max: Math.round(recurso.main.temp_max - 273.15),
						img: recurso.weather[0].icon,
						id: recurso.id,
						wind: recurso.wind.speed,
						temp: Math.round(recurso.main.temp - 273.15),
						name: recurso.name,
						weather: recurso.weather[0].main,
						clouds: recurso.clouds.all,
						latitud: recurso.coord.lat,
						longitud: recurso.coord.lon,
					};
					setCities((oldCities) => [...oldCities, ciudad]);
				} else {
					Swal.fire({
						icon: 'error',
						title: 'City not found, please try again...'
					})
				}
			});
	}
	function onFilter(ciudadId) {
		let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
		if (ciudad.length > 0) {
			return ciudad[0];
		} else {
			return null;
		}
	}
	return (
		<div className="App">
			<Route path="/" render={() => <Nav onSearch={onSearch} />} />
			<Route path="/about">
				<About />
			</Route>
			<Route path="/" exact>
				<Cards cities={cities} onClose={onClose} />
			</Route>
			<Route exact path="/">
				{!cities?.length > 0 ? (
					<div>
						<img src={logo} className="m-auto mt-12" /> <br></br>{' '}
						<h1 className="text-xl">Search for a city...</h1>{' '}
					</div>
				) : null}
			</Route>
			<Route
				exact
				path="/ciudad/:ciudadId"
				render={({ match }) => (
					<Ciudad city={onFilter(match.params.ciudadId)} />
				)}
			/>
		</div>
	);
}

export default App;
