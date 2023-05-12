import Card from '../cardstilo/Card';
import style from './cards.module.css';


 const Cards = ({characters,onClose}) => {
   return (
      <div className="container">
         {
            characters.map(({id, name, species, gender, image, origin, status}) =>{
               return (
                 <Card 
                 key={id}
                 id={id}
                 name= {name}
                 species={species}
                 gender={gender}
                 image={image}
                 origin={origin.name}
                 status={status}
                 onClose={onClose}
                 />
               )
            })
         }
      </div>
   )
};

export default Cards;