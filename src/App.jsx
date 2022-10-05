import { useEffect, useState } from 'react';
import GiftForm from './components/GiftForm';
import GiftList from './components/GiftList';

function App() {
	const [gifts, setGifts] = useState(
		JSON.parse(localStorage.getItem('gifts')) || []
	);
	const [modalOpen, setModalOpen] = useState(false);

	const handleDelete = (id) => {
		setGifts(gifts.filter((gift) => gift.id !== id));
	};

	const addGift = (giftInfo) => {
		setGifts([
			...gifts,
			{
				...giftInfo,
				id: Date.now(),
			},
		]);
	};

	const changeModalOpen = () => {
		setModalOpen(!modalOpen);
	};

	const clear = () => {
		setGifts([]);
	};

	useEffect(() => {
		localStorage.setItem('gifts', JSON.stringify(gifts));
	}, [gifts]);

	return (
		<main className="text-lg min-h-screen flex flex-col justify-center items-center font-alkalami relative">
			{modalOpen ? (
				<GiftForm
					gifts={gifts}
					addGift={addGift}
					changeModalOpen={changeModalOpen}
				/>
			) : (
				<div className="p-10 shadow-2xl lg:w-[500px]">
					<h1 className="text-4xl mb-5">Regalos:</h1>
					<button
						className="px-4 py-2 mb-5 bg-red-500 text-white uppercase tracking-widest rounded-lg shadow-lg"
						onClick={changeModalOpen}
					>
						Agregar Regalo
					</button>
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
			)}
		</main>
	);
}

export default App;
