import React from "react";
import Card from './Card';
function Soups(){
    const cardsData = [
        {
            id: 1,
            image: 'https://www.spiceupthecurry.com/wp-content/uploads/2022/03/creamy-tomato-soup-2.jpg', 
            name: 'Indian Tomato Soup (Instant Pot)',
            cost: '$12',
        },
        {
            id: 2,
            image: 'https://www.spiceupthecurry.com/wp-content/uploads/2021/12/Palak-soup-1.jpg',
            name: 'Spinach Soup (Palak Soup)',
            cost: '$25',
        },
        {
            id: 3,
            image: 'https://www.spiceupthecurry.com/wp-content/uploads/2016/12/celery-soup-recipe-9.jpg',
            name: 'Celery soup recipe',
            cost: '$25',
        },
        {
            id: 4,
            image: 'https://www.spiceupthecurry.com/wp-content/uploads/2023/11/curried-pumpkin-soup-1.jpg',
            name: 'Thai Curried Pumpkin Soup',
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
export default Soups;