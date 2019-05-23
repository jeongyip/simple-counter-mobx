import React from 'react';
import SupermarketTemplate from './SupermarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';

const Supermarket = () => {
  return (
    <SupermarketTemplate items={<ShopItemList />} basket={<BasketItemList />} />
  );
}

export default Supermarket;
