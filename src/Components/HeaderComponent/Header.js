import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from "react-router-dom"; 
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import {
    IconFlagIN,
    IconFlagUS
} from 'material-ui-flags';


function Header({ product,user,signOut }) {

    const getCount = () => {
        let count = 0;
        // console.log(product);
        product.forEach(element => {
            count = count + element.product.quantity;
        });
        return count;
    };

    return (
        <Container>

      
                <HeaderLogo>
                    <Link to="/"> 
                        <img src={'https://i.imgur.com/7I9Was5.png'}/>
                    </Link>
                </HeaderLogo>
        
          
                <HeaderOptionAddress>
                <LocationOnIcon/>
                    <HeaderOption>
                        <OptionLineOne>Hello</OptionLineOne>
                        <OptionLineTwo>Select Your Locations</OptionLineTwo>
                    </HeaderOption>
                </HeaderOptionAddress>
      
            
            
            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
            
            
                <HeaderCountryLanguage>
                    <HeaderCountry><IconFlagIN /></HeaderCountry>
                    <HeaderSelectLanguage><ArrowDropDownIcon/></HeaderSelectLanguage>
                </HeaderCountryLanguage>

                <HeaderOption>
                    <OptionLineOne>Hello, {user.name.split(" ")[0]} </OptionLineOne>
                    <OptionLineTwo onClick={()=>signOut()}>
                    Logout Now!
                    </OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

                
                <HeaderOptionCart>
                    <Link to="/cart"> 
                        <ShoppingBasketIcon/>
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>

            </HeaderNavItems>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background-color: #0F1111;
    height:68px;
    display:flex;
    color:white;
    align-items:center;
    justify-content: space-between;
`;

const HeaderLogo = styled.div`
    img {
        width:100px;
        margin-left:11px;
    }
   
`;

const HeaderOptionAddress = styled.div`
    padding-left:9px;
    display:flex;
    align-items:center;
`;

const OptionLineOne = styled.div`
    font-weight:700;
`;

const OptionLineTwo = styled.div`
cursor:pointer;

`;

const HeaderSearch =  styled.div`
    display:flex;
    flex-grow: 1;
    height:40px;
    border-radius:4px;
    overflow:hidden;
    margin-left:4px;
    background-color:white;
    :focus-within{
        box-shadow: 0 0 0 3px #F90;
    }
`;

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border:0;
    :focus{
        outline:none;
    }
`;

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    color:black;
    
    width:45px;
    
    // Center search icon vertical and horizontal
    display:flex;
    justify-content:center;
    align-items:center;

`;

const HeaderNavItems =  styled.div`
    display:flex;
`;

const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;
    &:hover {
        border: 1px solid white;
    };
`;

const HeaderOptionCart = styled.div`
display:flex;
align-items:center;
a{
    display:flex;
    align-items:center;
    padding-right:9px;
    color:white;
    text-decoration:none;
    }

    &:hover {
        border: 1px solid white;
    };
`;

const CartCount  = styled.div`
    padding-left:4px;
    font-weight:700;
    color:#f08804;
`;


const HeaderCountry = styled.div``;
const HeaderSelectLanguage = styled.div``;
const HeaderCountryLanguage = styled.div`
    padding: 10px 9px 10px 9px; 
    display:flex;
    align-items:center;

    &:hover {
        border: 1px solid white;
    };
`;

