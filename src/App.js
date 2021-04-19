import logo from './logo.svg';
import './App.css';
import Header from './Components/HeaderComponent/Header'
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom" 
import styled from 'styled-components';
import { auth, db } from './Firebase/firebase';
import { useEffect, useState } from 'react';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot)=>{
      let tempItems =[];

      tempItems = snapshot.docs.map(doc=>({
        id:doc.id,
        product:doc.data()
    }));

  
      setCartItems(tempItems);
    })
  };

  const signOut = () =>{

    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  };

    useEffect(() => {
      getCartItems();
    }, []);
  return (
  <Router>

  {
    !user?(<Login setUser={setUser}/>):(    
      
      <Container>
        <Header product={cartItems} user={user} signOut={signOut} />
         <Switch>
           <Route path="/cart"> <Cart product={cartItems}/> </Route>
           <Route path="/"> <Home/> </Route>
         </Switch>
      </Container>
      )
  }

  </Router>);
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`;
