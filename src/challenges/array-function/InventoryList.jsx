import React from 'react';
const InventoryList = ({ items }) => {
  const weaponItems = items.filter((item) => item.type === 'Weapon');
  return (
    <section>
      <ul>
        {weaponItems.map((item) => {
          return (
            <li key={item.id}>{item.name}</li>
          );
        })}
      </ul>
    </section>
  );
};

export default InventoryList;