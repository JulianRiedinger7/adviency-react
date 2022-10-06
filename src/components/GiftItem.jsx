import React from 'react';
import { useGiftContext } from '../context/GiftContext';

const GiftItem = ({ id, nombre, quantity, image, to }) => {
	const { handleDelete, handleGiftEdit } = useGiftContext();

	return (
		<li className="shadow-lg p-4 flex justify-between items-center">
			<div className="flex space-x-2 items-center">
				<img
					src={image}
					alt={nombre}
					className="w-16 h-16 align-middle rounded-full object-contain"
				/>
				<div>
					<p>
						{nombre} x {quantity}
					</p>
					<small className="text-gray-400">Para: {to}</small>
				</div>
			</div>
			<div className="flex space-x-3 ml-4">
				<button
					className="bg-slate-400 p-2 rounded-lg"
					onClick={() => handleGiftEdit(id)}
				>
					Editar
				</button>
				<button
					className="px-4 py-2 bg-red-500 text-white uppercase tracking-widest rounded-lg shadow-lg"
					onClick={() => handleDelete(id)}
				>
					X
				</button>
			</div>
		</li>
	);
};

export default GiftItem;
