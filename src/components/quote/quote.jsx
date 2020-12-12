import React, { useEffect, useState } from 'react';
import './quote.css';
import Axios from 'axios';
import RefreshIcon from '../../assets/desktop/icon-refresh.svg';

const Quote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");


    const getQuote = async () => {
        let arrayOfQuotes = [];
        try {
            const data = await Axios.get("https://api.quotable.io/random");
            arrayOfQuotes = data.data;
            console.log(arrayOfQuotes);
        } catch(error) {
            console.error(error);
        }

        try {
            setQuote(arrayOfQuotes.content);
            setAuthor(arrayOfQuotes.author);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div className='quote'>
            <div className='container'>
                <div className='quote_quo'>
                    <p>{quote}</p>
                    <img src={RefreshIcon} alt='Clock Refresh Quote' onClick={getQuote} />
                </div>
                <h4>{author}</h4>
            </div>
        </div>
    )
}

export default Quote;