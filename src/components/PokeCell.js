import React from 'react';
import sprites from '../assets/sprites.png';
import { Card, Modal } from 'react-bootstrap';
import './styles/PokeCell.css';


const PokeCell = ({ pokeClass, handleOnClick }) => {
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

    return (
        <>
            <Card onClick={() => handleOnClick(id)} style={{ width: '18rem' }}>
                <button style={style} className="poke-cell"></button>
            </Card>
        </>
    );
}

export default PokeCell;