import React from 'react';
import Card from './Card/Card.js'


const Cards = (props) => { 

  return props.arrayCards.map((card,index)=>{

      return <Card
                key={card.id}
                card={card}
                delete={()=>props.deleteClick(index,props.type)}
                done={()=>props.doneClick(index,props.type)}
                type={props.type}
                back={()=>props.backClick(index,props.type)}
                />;
              })
}

export default Cards;
