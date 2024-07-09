import { Component } from "react";
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = (props) => {
    const { monsters } = props;
    return (
        <div className="card-list" key="Uni1">
        {/* Aqui usamos () en el map y no {} porque queremos un retorno implicito
        sin usar return y ademas sera de varias lineas*/}
        { monsters.map((monster) => {
            
            return (
                <Card monster={monster} key={monster.id}/>
            )
        }
            
        )}
    </div>
    );
   
}
    


export default CardList;