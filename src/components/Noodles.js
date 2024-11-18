import React from "react";
import Card from './Card';
function Noodles(){
    const cardsData = [
        {
            id: 1,
            image: 'https://www.crazymasalafood.com/wp-content/images/paneer-14.jpg.webp', 
            name: 'Paneer Noodles',
            cost: '$12',
        },
        {
            id: 2,
            image: 'https://www.crazymasalafood.com/wp-content/images/veg-chowmein.jpg.webp',
            name: 'Vegetable Chowmein',
            cost: '$25',
        },
        {
            id: 3,
            image: 'https://www.crazymasalafood.com/wp-content/images/chicken-16.jpg.webp',
            name: 'Chicken Chowmein',
            cost: '$20',
        },
        
    ];
    return(
        <div>
            <div className="card-container">
                {cardsData.map((card) => (
                    <Card key={card.id} image={card.image} name={card.name} cost={card.cost} />
                ))}
            </div>
        </div>
    )
}
export default Noodles;