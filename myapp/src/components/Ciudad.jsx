import React from 'react';
import temperatura from '../imgs/temp.gif';
import viento from '../imgs/viento.gif';
import latitud from '../imgs/lati.png';
import longitud from '../imgs/long.png';
import nubes from '../imgs/nubes.gif';
import sol from '../imgs/sol.gif';
export default function Ciudad({ city }) {
	return (
		<div className="ciudad border border-white rounded bg-white h-2/3 w-2/3 m-auto mt-12 shadow-lg">
			<div className="m-auto pt-8">
				<h2 className='font-bold text-black text-2xl'>{city.name}</h2>
				<ul className="flex flex-col w-1/5 h-1/2 items-start m-auto gap-5 mt-12">
					<li className="flex">
						<img
							src={temperatura}
							alt="https://icons8.com/icon/T8EeiPgwm3sV/temperatura"
							className="h-7"
						/>
						&nbsp;&nbsp; Temperature: {city.temp} ºC
					</li>
					<li className="flex">
						<img
							src={sol}
							alt="https://icons8.com/icon/wlOnm38ADLWF/salida-del-sol"
							className="h-7"
						/>
						&nbsp;&nbsp; Weather: {city.weather}
					</li>
					<li className="flex">
						<img
							src={viento}
							alt="https://icons8.com/icon/Zdv1QR7jYV80/viento"
							className="h-7"
						/>
						&nbsp;&nbsp; Wind: {city.wind} km/h
					</li>
					<li className="flex">
						<img src={nubes} alt="clouds" className="h-7" />
						&nbsp;&nbsp; Amount of clouds: {city.clouds}
					</li>
					<li className="flex">
						<img
							src={latitud}
							alt="https://icons8.com/icon/30565/latitud"
							className="h-7"
						/>
						&nbsp;&nbsp; Latitude: {city.latitud}º
					</li>
					<li className="flex">
						<img
							src={longitud}
							alt="https://icons8.com/icon/30562/longitud"
							className="h-7"
						/>
						&nbsp;&nbsp; Longitude: {city.longitud}º
					</li>
				</ul>
			</div>
		</div>
	);
}
