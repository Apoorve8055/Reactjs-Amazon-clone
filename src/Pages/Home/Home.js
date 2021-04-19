import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../../Firebase/firebase';
import Product from '../../Components/ProductComponent/Product';


function Home() {

const [products, setProducts] = useState({});

useEffect(() => {
    getProducts();
}, []);


const getProducts =  () => {

    db.collection("products").onSnapshot((snapshat)=>{
        let tempProduct = [];

        tempProduct = snapshat.docs.map(doc=>({
            id:doc.id,
            product:doc.data()
        }));
        
        setProducts(tempProduct);
    })
};




    return (
        <Container>
           <Banner>
           
           </Banner>
           <Content>
            {
                products.length > 0 ?(products.map((data,count)=>{
                    return count<3? <Product  
                    key={data.id}  
                    id={data.id}    
                    title={data.product.name} 
                    price={data.product.price} 
                    rating={data.product.rating} 
                    product_img={data.product.product_img}
                    in_stock={data.product.in_stock}
                    /> : (console.log(count));    
                })): (<></>)
        }
           
           </Content>

        <ScrollContent>
        {
            products.length > 0 ?(products.reverse().map((data)=><Product  
                key={data.id}  
                id={data.id}    
                title={data.product.name} 
                price={data.product.price} 
                rating={data.product.rating} 
                product_img={data.product.product_img}
                in_stock={data.product.in_stock}
                />)): (<></>)
    }
        </ScrollContent>
        </Container>
    )
}

export default Home


const Container = styled.div`
    max-width: 1500px;
    margin:0 auto; 
    padding-bottom:15px;
`;

const Banner= styled.div`
min-height:600px;
background-image: url('https://i.imgur.com/SYHeuYM.jpg');
background-position:center;
backgroud-size:cover;
z-index:1px;
mask-image: linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));

`;

const Content =  styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top:-350px;
    display:flex;

`;

const ScrollContent = styled.div`
    display:flex;
    overflow-x:scroll;
    padding:10px;
    position: relative;
    
    &::-webkit-scrollbar {
        width: 1em;
        border-radius:10px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        border-radius:10px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius:10px;
      }
      
`;

