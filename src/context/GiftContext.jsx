import { createContext, useState, useEffect, useContext } from 'react';

export const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
	const [gifts, setGifts] = useState(
		JSON.parse(localStorage.getItem('gifts')) || []
	);

	const [giftInfo, setGiftInfo] = useState({
		nombre: '',
		to: '',
		quantity: 1,
		image: '',
	});

	const [modalOpen, setModalOpen] = useState(false);

	const handleDelete = (id) => {
		setGifts(gifts.filter((gift) => gift.id !== id));
	};

	const handleInputChange = (evt) => {
		setGiftInfo({
			...giftInfo,
			[evt.target.name]: evt.target.value,
		});
	};

	const handleGiftEdit = (id) => {
		changeModalOpen();
		const giftToEdit = gifts.find((gift) => gift.id === id);
		setGiftInfo({
			nombre: giftToEdit.nombre,
			to: giftToEdit.to,
			quantity: giftToEdit.quantity,
			image: giftToEdit.image,
			id: id,
		});
	};

	const addGift = (giftInfo) => {
		const isEdited = gifts.find((gift) => gift.id === giftInfo.id);
		if (isEdited) {
			setGifts(
				gifts.map((gift) => {
					return gift.id === isEdited.id ? giftInfo : gift;
				})
			);
		} else {
			setGifts([
				...gifts,
				{
					...giftInfo,
					id: Date.now(),
				},
			]);
		}
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
				handleInputChange,
				giftInfo,
				handleGiftEdit,
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
