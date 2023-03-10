import React from 'react';
import IceCreamTitle from './IceCreamTitle';
import IceCreamList from './IceCreamList';

function App() {


    const icecream = {
        title: 'Ice Cream Flavors',
        feedback: {
            rating: 3.8
        },
        flavors: [
            { name: 'Strawberry', favorite: false },
            { name: 'Chocolate', favorite: false },
            { name: 'Pistachio', favorite: false },
            { name: 'Rocky Road', favorite: true },
            { name: 'Cookie Dough', favorite: true },
        ]
    };


    return [
    <IceCreamTitle title={icecream.title} feedback={icecream.feedback} />,
    <IceCreamList flavors={icecream.flavors} favorite={icecream.flavors.favorite} />
    ]
}

export default App;