import React from 'react'
import styled from 'styled-components';
import CartItem from './CartItem';
import {Link} from "react-router-dom"; 
function CartItemss({products}) {
    return (
        <Container>
            <Title>Your Amazon Cart</Title>
            
            <CartSubtile>Check your Saved for later items below or&nbsp;
            <Link to="/">continue shopping</Link>.
            
            </CartSubtile>
            
            <hr/>

            <ItemsContainer>
            {
           
                products.length > 0 ? (products.map(data=>(<CartItem key={data.id} id={data.id} name={data.product.name} price={data.product.price} product_img={data.product.product_img} quantity={data.product.quantity} in_stock={data.product.in_stock}/> ))):(<Empty>Cart is Empty.</Empty>)
            
            }
                   
            </ItemsContainer>
        
        </Container>
    )
}

export default CartItemss
const Container = styled.div`
        padding:20px;
        flex:0.7;
        background-color:white;
        margin-right:18px;

`;

const Title = styled.h1`
margin-bottom:1px;
`;
const ItemsContainer = styled.div``;

const CartSubtile = styled.div`
margin-bottom:15px;
`; 

const Empty = styled.div`
display:flex;
flex:1;
margin-top:50px;
align-item:center;
justify-content:center;
color:#00000066;
`;