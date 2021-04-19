import React from 'react'
import styled from 'styled-components';
import CartItemss from '../../Components/CartComponent/CartItems';
import CartTotal from '../../Components/CartComponent/CartTotal';

function Cart({ product }) {
    return (
        <Container>
            <CartItemss products={product}/>
            <CartTotal products={product}/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
display:flex;
align-items: flex-start;
padding:18px;

`;
