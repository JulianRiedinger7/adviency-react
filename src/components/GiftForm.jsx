import React, { useState } from 'react';

const GiftForm = ({ gifts, addGift }) => {
	const [userInput, setUserInput] = useState('');
	const [error, setError] = useState(null);

	const handleChange = (evt) => {
		setUserInput(evt.target.value);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (userInput === '') {
			setError('Es necesario ingresar un regalo');
		} else if (
			gifts.some(
				(gift) => gift.nombre.toLowerCase() === userInput.toLowerCase()
			)
		) {
			setError('Ese regalo ya esta en la lista');
		} else {
			addGift(userInput);
			setUserInput('');
			setError(null);
		}
	};

	return (
		<form className="mb-5" onSubmit={handleSubmit}>
			<input
				type="text"
				className="p-2 shadow-lg rounded-lg"
				placeholder="Regalo..."
				value={userInput}
				onChange={handleChange}
			/>
			<button
				type="submit"
				className="px-4 py-2 bg-red-500 text-white uppercase tracking-widest rounded-lg shadow-lg"
			>
				Agregar
			</button>
			{error && <h2 className="text-red-500">{error}</h2>}
		</form>
	);
};

export default GiftForm;
