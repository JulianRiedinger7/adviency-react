import { useState } from 'react';
import GiftForm from './components/GiftForm';
import GiftList from './components/GiftList';

const regalos = [
	{
		id: 1,
		nombre: 'teclado',
	},
	{
		id: 2,
		nombre: 'auriculares',
	},
	{
		id: 3,
		nombre: 'mouse',
	},
];

function App() {
	const [gifts, setGifts] = useState(regalos);

	const handleDelete = (id) => {
		setGifts(gifts.filter((gift) => gift.id !== id));
	};

	const addGift = (userInput) => {
		setGifts([
			...gifts,
			{
				nombre: userInput,
				id: Date.now(),
			},
		]);
	};

	const clear = () => {
		setGifts([]);
	};

	return (
		<main className="text-lg min-h-screen flex flex-col justify-center items-center font-alkalami">
			<div className="p-10 shadow-2xl">
				<h1 className="text-4xl mb-5">Regalos:</h1>
				<GiftForm gifts={gifts} addGift={addGift} />
				{gifts.length > 0 ? (
					<GiftList gifts={gifts} handleDelete={handleDelete} />
				) : (
					<h2 className="text-teal-500 text-center">
						Aqui se veran tus regalos...
					</h2>
				)}
				{gifts.length > 0 && (
					<button
						className="px-4 py-2 bg-teal-500 text-white uppercase tracking-widest rounded-lg shadow-lg mt-5 w-64 block mx-auto"
						onClick={clear}
					>
						Borrar Todo
					</button>
				)}
			</div>
		</main>
	);
}

export default App;
