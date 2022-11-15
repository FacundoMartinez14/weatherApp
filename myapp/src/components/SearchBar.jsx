import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function SearchBar({ onSearch }) {
	const [city, setCity] = useState('');
	const history = useHistory()
	return (
		<form
			onSubmit={ (e) => {
				e.preventDefault();
				history.push('/')
				onSearch(city);
				setCity('');
			}}
		>
			<input
				className="placeholder:italic h-6 bg-white border border-white rounded-md pr-3 shadow-sm transition-all duration-200 focus:outline-none focus:border-black focus:ring-blue-lighter focus:ring sm:text-sm focus:border-black"
				type="text"
				placeholder="  Search..."
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			&nbsp;&nbsp;
			<button className="h-6 bg-gray-lighter text-black rounded px-2 transition-all duration-200 hover:bg-black hover:text-white">
				Search
			</button>
		</form>
	);
}
