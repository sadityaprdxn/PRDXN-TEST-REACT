import React from 'react';
import maleImage from '../images/male.png';
import femaleImage from '../images/female.png';

const Postli = ({name, culture, aliases, competitors, gender}) => {

    return (
        <li>
            <figure>
                <img src="https://via.placeholder.com/150" alt="user post images"/>
            </figure>
            <div className='user-detail'>
                <h3>{name}</h3>
                <span>culture : {culture}</span>
                <span>also known as : {
                                        aliases.length === 1 && aliases[0] === '' ?
                                        ( `alias not found` ) :
                                        ( aliases.map((element , index) => { 
                                            if(index === aliases.length-1 ) {
                                                return (`${element}`)
                                                } else { 
                                                    return(`${element}, `)
                                                }
                                            }))
                                        }</span>
                <span>played by : {
                                        competitors.length === 1 && competitors[0] === '' ? 
                                        ( `competitors not found`) :
                                        (competitors.map((element , index) => { 
                                            if(index === competitors.length-1 ) {
                                                return (`${element}`)
                                                } else { 
                                                    return(`${element}, `)
                                                }
                                            })
                                        )
                                        }</span>
            </div>
            <figure className='gender'>
                <img src={gender === 'Male' ? (maleImage) : (femaleImage)} alt="gender"/>
            </figure>
        </li>
    );
}

export default Postli;
