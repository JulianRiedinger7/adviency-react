import React from 'react';
import { useGiftContext } from '../context/GiftContext';
import GiftItem from './GiftItem';

const GiftList = () => {
	const { gifts } = useGiftContext();

	return (
		<ul>
			{gifts.map((gift) => (
				<GiftItem key={gift.id} {...gift} />
			))}
		</ul>
	);
};

export default GiftList;
