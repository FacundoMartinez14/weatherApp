import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
export default function Card({ temp, min, max, name, img, onClose, id }) {
	return (
		<div className="card shadow-2xl h-full w-full bg-white rounded-md">
			<div id="closeIcon" className="row">
				<button
					onClick={onClose}
					type="button"
					className="bg-red rounded-md p-2 inline-flex items-center justify-center text-white transition-all duration-200 hover:text-gray hover:bg-gray-lighter focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo"
				>
					<span className="sr-only">Close menu</span>
					<svg
						className="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div className="card-body">
				<Link to={`/ciudad/${id}`}>
					<h5 className="card-title underline text-xl">{name}</h5>
				</Link>
				<div className="grid gap-2 grid-cols-1 grid-rows-3">
					<div>
						<img 
							className="iconoClima m-auto bg-black rounded-full"
							src={'http://openweathermap.org/img/wn/' + img + '@2x.png'}
							width="80"
							height="80"
							alt=""
						/>
					</div>
          <div className='m-auto text-blue font-bold text-4xl'>
						<p>{temp}°C</p>
					</div>
					<div className='text-black font-bold text-xl'>
						<p>{min}°C / {max}°C</p>
					</div>
				</div>
			</div>
		</div>
	);
}
