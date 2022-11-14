import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
export default function Card({ min, max, name, img, onClose, id }) {
	return (
		<div className="card border">
			<div id="closeIcon" className="row">
				<button
					onClick={onClose}
					type="button"
					className="bg-red-600 rounded-md p-2 inline-flex items-center justify-center text-white transition-all duration-200 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
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
					<h5 className="card-title">{name}</h5>
				</Link>
				<div className="grid gap-4 grid-cols-3 grid-rows-1">
					<div>
						<p>Min</p>
						<p>{min}°</p>
					</div>
					<div>
						<p>Max</p>
						<p>{max}°</p>
					</div>
					<div >
						<img
							className="iconoClima"
							src={'http://openweathermap.org/img/wn/' + img + '@2x.png'}
							width="80"
							height="80"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
