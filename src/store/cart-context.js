import React from 'react';

//컨텍스트를 만듦, 컨텍스트 안에 데이타가 있음
const CartContext =  React.createContext({
  items:[],   //아이템이 들어있는 배열
  totalAmount: 0, //총금액
  addItem:(item)=>{},
  removeItem:(id)=>{}
});
//장바구니 항목 초기값

export default CartContext;
