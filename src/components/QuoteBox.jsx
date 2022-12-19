
import React, { useState } from 'react';
import quotes from '../quotes.json'

const QuoteBox = () => {

    console.log(quotes);

    const random = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(random);
    //const index = 1;

    const changeQuote = () => {
        const newRandom = Math.floor(Math.random()  * quotes.length);
        setIndex(newRandom);
    }

    //Colores para fondo

    const colors = ["#F8BBD0", "#D32F2F", "#FFECB3", "#FFCCBC", "#D1C4E9", "#BBDEFB", "#1976D2", "#D7CCC8", "#5D4037", "#DCEDC8", "#689F38", "#CFD8DC"]
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors [randomColor]}`

    return (
        <div className='container'>
            <div>
                <h1>{quotes[index].author}</h1>
                <p>{quotes[index].quote}</p>
            </div>
            <i className='bx bxs-right-arrow' onClick={changeQuote}></i>
        </div>
    );
};

export default QuoteBox;


