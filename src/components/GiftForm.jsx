import React, { useState } from 'react';

const GiftForm = ({ gifts, addGift, changeModalOpen }) => {
	const [error, setError] = useState(null);

	const [giftInfo, setGiftInfo] = useState({
		nombre: '',
		to: '',
		quantity: 1,
		image: '',
	});

	const handleChange = (evt) => {
		setGiftInfo({
			...giftInfo,
			[evt.target.name]: evt.target.value,
		});
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (giftInfo.nombre === '') {
			setError('Es necesario ingresar un regalo');
		} else if (
			gifts.some(
				(gift) => gift.nombre.toLowerCase() === giftInfo.nombre.toLowerCase()
			)
		) {
			setError('Ese regalo ya esta en la lista');
		} else {
			addGift(giftInfo);
			changeModalOpen();
			setError(null);
		}
	};

	return (
		<form
			className=" flex flex-col p-10 flex-wrap w-11/12 gap-5 lg:w-[700px] bg-white rounded-xl shadowx-xl"
			onSubmit={handleSubmit}
		>
			<label htmlFor="regalo">Completa la Info de tu regalo</label>
			<input
				type="text"
				className="p-2 shadow-lg rounded-lg w-full"
				placeholder="Regalo..."
				id="regalo"
				name="nombre"
				value={giftInfo.nombre}
				onChange={handleChange}
			/>
			<input
				type="text"
				className="p-2 shadow-lg rounded-lg w-full"
				placeholder="Destinatario..."
				name="to"
				onChange={handleChange}
				value={giftInfo.to}
			/>
			<input
				type="number"
				className=" p-2 shadow-lg rounded-lg w-14"
				value={giftInfo.quantity}
				name="quantity"
				min={1}
				max={100}
				onChange={handleChange}
			/>
			<input
				type="search"
				className=" p-2 shadow-lg rounded-lg w-full"
				placeholder="https://image.png"
				value={giftInfo.image}
				name="image"
				onChange={handleChange}
				required
			/>

			<div className="flex gap-5 justify-between flex-wrap">
				<button
					type="button"
					className="bg-slate-600 text-white uppercase tracking-widest  rounded-lg shadow-lg px-4 py-2"
					onClick={changeModalOpen}
				>
					Cerrar
				</button>

				<button
					type="submit"
					className="px-4 py-2 bg-red-500 text-white uppercase tracking-widest rounded-lg shadow-lg"
				>
					Guardar
				</button>
			</div>
			{error && <h2 className="text-red-500">{error}</h2>}
		</form>
	);
};

export default GiftForm;
