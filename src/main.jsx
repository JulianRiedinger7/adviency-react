import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GiftProvider } from './context/GiftContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GiftProvider>
			<App />
		</GiftProvider>
	</React.StrictMode>
);
