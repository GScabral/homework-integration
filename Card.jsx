import style from "./card.module.css"
import { Link } from "react-router-dom";

const Card=({id,name,status,species,gender,origin,image,onClose})=>{

   
   return (
      <div className='contenedor'>
      <button className='button' onClick={()=>{onClose(id)}}>X</button>
         <img className='imagen' src={image} alt='' />
         <Link to={'/detail/${id}'}>
         <h2 >{name}</h2>
         </Link>
         <h2 >{species}</h2>
         <h2 >{gender}</h2>
         <h2 >{status}</h2>
         <h2 >{origin.name}</h2>
        
         </div>
   );
};

export default Card