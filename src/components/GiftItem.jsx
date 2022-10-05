import React from 'react';

const GiftItem = ({ id, nombre, handleDelete }) => {
	return (
		<li className="shadow-lg p-4 flex justify-between items-center">
			{nombre}
			<button
				className="px-4 py-2 bg-red-500 text-white uppercase tracking-widest rounded-lg shadow-lg"
				onClick={() => handleDelete(id)}
			>
				X
			</button>
		</li>
	);
};

export default GiftItem;
