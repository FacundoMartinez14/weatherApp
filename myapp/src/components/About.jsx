import React from 'react';
import foto from '../imgs/foto.jpg';
import swal from '../imgs/SweetAlert2.png';
export default function About() {
	return (
		<div className="mt-9 bg-white w-1/2 m-auto bg-opacity-70 rounded-lg shadow-xl">
			<h1>This application was made by me, Facundo Martinez.</h1>
			<img
				src={foto}
				alt="Facundo Martinez"
				className="h-80 mx-auto my-5 rounded shadow-lg"
			/>
			<h4>
				It was made while I was studying in Henry. Was made with React.js, and
				the help of the following libraries:
			</h4>
			<ul className="flex flex-col w-1/3 items-start mx-auto mb-5 gap-3 mt-5">
				<li className="flex">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
						alt="React"
						width="20"
						height="20"
					/>
					React Router Dom
				</li>
				<li className="flex">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
						alt="Tailwind"
						width="20"
						height="20"
					/>
					Tailwind CSS
				</li>
				<li className="flex">
					<img src={swal} alt="sweetalert2" className="w-8 h-3 m-auto" />
					Sweet Alert 2
				</li>
			</ul>
			<h4 className="pb-4">
				If you are interested in my work you can{' '}
				<a
					href="mailto:facundo.ee2@gmail.com"
					className="text-blue font-bold hover:underline "
				>
					contact me.
				</a>
			</h4>
		</div>
	);
}
