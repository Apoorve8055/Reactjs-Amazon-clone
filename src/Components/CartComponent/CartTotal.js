import React from 'react'
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

function CartTotal({products}) {


    const getProccedCart = () => {
        let itemCount = 0;
        let totalPrice = 0;
        products.forEach((data)=>{
            itemCount = itemCount + data.product.quantity;
            totalPrice = totalPrice + data.product.price * data.product.quantity;
        })

        return [itemCount,totalPrice];
    };

    return (
        <Container>

        <h2>Cart subtotal ({getProccedCart()[0]} item): 
        <NumberFormat value={getProccedCart()[1]} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
        </h2>
        <CheckoutButton>Proceed to checkout</CheckoutButton>

        </Container>
    )
}

export default CartTotal
const Container = styled.div`
padding:20px;
flex:0.3;
height:200px;
background-color:white;`;

const CheckoutButton =styled.button`
background-color:#f8c14b;
width:100%;

margin-top:8px;
padding:4px 8px;
border:2px solid #a88734;
border-radius:4px;
cursor:pointer;
font-size:16px;
:hover{
    background:#ddb347;
}
`;

