import React from 'react';
import { useParams } from 'react-router-dom';

const Page = (props)=>{

    const {word, color, bckColor} = useParams();

    return(
        <div>

            {
                isNaN(word)? 
                <p style={
                    color? 
                    {color: color, backgroundColor: bckColor}
                    :null
                }>
                    The word is: {word}
                </p>
                : 
                <p>
                    This is a number: {word}
                </p>
            }

        </div>
    )
}


export default Page;