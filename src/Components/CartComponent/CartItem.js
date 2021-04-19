import React from 'react'
import styled from 'styled-components';
import { db } from '../../Firebase/firebase';


function CartItem({id,name,price,product_img,quantity,in_stock}) {

    let options = [];

    for (let i = 1; i< Math.max(quantity+1,10); i++) {
        options.push(<option value={i}>Quantity: {i}</option> )        
    }

    const changeQuantity = (selectQuantity) =>{
        db.collection('cartItems').doc(id).update({
            quantity:parseInt(selectQuantity)
        })
    };

    const DeleteCartItem = (e) => {
        e.preventDefault();
        db.collection('cartItems').doc(id).delete()
    }; 
    return (
        <Container>
             <ImageConatiner>
             <img src={product_img}/>
             </ImageConatiner>

             <CartItemInfo>
                <CartItemInfoTop>
                <h2>{name}</h2>
                </CartItemInfoTop>

                <InStock>
                    {in_stock == true ? (<InOfStock>In Stock</InOfStock>) : (<OutOfStock>Out of Stock</OutOfStock>) }
                </InStock>

                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                    <select 
                        value={quantity}
                        onChange={(e)=>changeQuantity(e.target.value)}
                        >
                        {options}
                    </select>
                   
                    
                    </CartItemQuantityContainer>
                    <CartItemDeleteContainer
                    onClick={(e)=>DeleteCartItem(e)}
                    >
                    Delete
                    </CartItemDeleteContainer>
                </CartItemInfoBottom>
             </CartItemInfo>

             <CartItemPrice>
             ₹{price}
             </CartItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
display:flex;
padding-top:12px;
padding-bottom:12px;
border-bottom:1px solid #DDD;

`;

const ImageConatiner = styled.div`
width:180px;
height:180px;
flex-shrink:0;
flex-grow:0;
img{
   object-fit:contain; 
   width:100%;
height:100%;
}
`;
const CartItemInfo = styled.div`
    padding-left:12px;
    flex-grow:1;
`;
const CartItemInfoTop = styled.div`
    color:#007185;


h2{
    font-size:18px;
}
`;
const CartItemInfoBottom = styled.div`
margin-top:4px;
display:flex;
align-items:center;
`;
const CartItemQuantityContainer = styled.div`
select{
    border-radius:7px;
    backgroud-color:#F0F2F2;
    padding:8px;
    box-shadow: 0 2px 5px rgba(15,17,17,.15);

    :focus{
        outline:none;
    }
}

`;
const CartItemDeleteContainer = styled.div`
color: #007185;
margin-left:16px;
cursor:pointer;
`;
const CartItemPrice = styled.div`
font-size:18px;
font-weight:700;
margin-left:16px;
`;

const InStock = styled.div`
padding-top:px;
padding-bottom:px;
`;
const InOfStock = styled.span`
color:green;
`;
const OutOfStock = styled.span`
color:#ec5050c9;
`;

