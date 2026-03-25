// ? index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
// import ProfileCard from './challenges/profile-card/ProfileCard.jsx';
// import InventoryList from './challenges/array-function/InventoryList';
// import inventoryItems from './challenges/array-function/inventoryItems';
// import PotionButton from './challenges/state-alchemist/PotionButton';
// import ManaPump from './challenges/state-alchemist/ManaPump';
// import GuildForm from './challenges/guild-form/GuildForm';
// import App from './challenges/final-boss/App';
import App from './components/App.jsx';
// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
