import React from 'react'
import styled from 'styled-components'
import { db } from '../../Firebase/firebase';
function Product({id,title,price,rating,product_img,in_stock}) {
    
    // console.log(id);
   const addToCart = () => {
   const cartItem = db.collection('cartItems').doc(id);

    cartItem 
            .get()
            .then((doc)=>{
                // console.log(doc);
                if(doc.exists){
                    cartItem.update({
                        quantity: doc.data().quantity + 1
                    })
                }
                else{
                    db.collection("cartItems").doc(id).set({
                        name:title,
                        price:price,
                        product_img:product_img,
                        quantity:1,
                        in_stock:in_stock
                    })
                }
            })

   };
    
    return (
        <Conatiner>

           
            <CardHeader>
                <Title>{title}</Title>
                <Price>₹{price}</Price>
            </CardHeader>
            <Image src={product_img} />
            <CardFooter> 
            <Rating>
            {
        
                Array(rating).fill().map(data=>(<>⭐</>))
       
            }
            </Rating>
            <ActionSection>
                <AddToCartButton
                onClick={addToCart}
                >
                Add to Cart
                </AddToCartButton>
            </ActionSection>    
            </CardFooter>
            </Conatiner>
    )
}

export default Product

const Conatiner = styled.div`
    background-color:white;
    z-index:100;
    flex:1;
    padding:20px;
    margin:10px;
    max-height:400px;
    display:flex;
    flex-direction:column;
    border-radius:5px;
    box-shadow: 2px 5px #8888886e;
   
`;

const Title = styled.span`
padding-right:5px;
`;

const Price = styled.span`
    font-weight:500;
    magin-top:3px;
`;

const Rating = styled.div`
display:flex;

justify-content:center;
`;

const Image = styled.img`
max-height:200px;
object-fit: contain;
`;

const ActionSection = styled.div`
    margin-top:12px;
    display:grid;
    place-items:center;
`;
const AddToCartButton = styled.button`
    width:100px;
    height:30px;
    background-color:#f0c14b;
    border: 2px solid #a999734;
    border-radius: 3px;
    cursor:pointer;
`;

const CardFooter = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`;

const CardHeader = styled.div`
    display:flex;
`;