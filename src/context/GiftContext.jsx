import { createContext, useState, useEffect, useContext } from 'react';

export const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
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
		<GiftContext.Provider
			value={{
				gifts,
				setGifts,
				modalOpen,
				setModalOpen,
				handleDelete,
				changeModalOpen,
				clear,
				addGift,
			}}
		>
			{children}
		</GiftContext.Provider>
	);
};

export const useGiftContext = () => {
	const giftData = useContext(GiftContext);

	return giftData;
};
