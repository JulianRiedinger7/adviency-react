import React from 'react';
import GiftItem from './GiftItem';

const GiftList = ({ gifts, handleDelete }) => {
	return (
		<ul>
			{gifts.map((gift) => (
				<GiftItem key={gift.id} handleDelete={handleDelete} {...gift} />
			))}
		</ul>
	);
};

export default GiftList;
