// ? index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './components/App.jsx';
// import ProfileCard from './challenges/profile-card/ProfileCard.jsx';
import InventoryList from './challenges/array-function/InventoryList';
import inventoryItems from './challenges/array-function/inventoryItems';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<InventoryList items={inventoryItems} />);
