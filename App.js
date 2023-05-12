import './App.css';

import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav/nav.jsx';
import { useState } from 'react';
import axios from 'axios'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import About from './components/about/about.jsx';
import Deatail from './components/Deatail/deatail.jsx';
import Form from './components/Form/form';
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'unaPassword';



 
function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname}= useLocation();

   const navigate = useNavigate();
const [access, setAccess] = useState(false);


function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
   !access && navigate('/');
}, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };
   const onClose=(id)=>{
      setCharacters(
         characters.filter((char)=>{
        return char.id !== Number(id);
         } )
      )
   }
     
   
   return (
   <div className='App'  style={{padding: "25px"}}>
   {pathname !== '/' && <Nav onSearch={onSearch}/>}
      <Routes>
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Deatail/>}/>
      </Routes>

      </div>
   )
   

}

export default App;
