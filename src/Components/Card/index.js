import React from "react";
import './styles.css';

function Card() {
    
    return (
        <div className="card">
            <h2>Hamburguer</h2>
            <p>Preço R$ 25</p>
            <div className="controles">
                <button>+</button>
                <span>5</span>
                <button>-</button>
            </div>
            <p>Quantidade: 25</p>
            <p>Total R$: 100</p>
        </div>
    );
};

export default Card;