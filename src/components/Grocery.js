import { React, useState, useEffect } from 'react';
import axios from 'axios';

export default function Grocery() {

    let [ list, setList ] = useState('');
    let [ mistakes, setMistakes ] = useState('');

    async function get_em() {
            try {
                await axios.get( `http://localhost:5000/` ).then(
                    response => setList( response.data.list ))
                    
            } catch( error ) {
          //If there are errors, they are set to state to be displayed later in ServerError Display
            setMistakes(error.response.status + ' ' + error.response.statusText);
        }
    }
    useEffect( () => { get_em() }, [ setList ] );
    
    if (list && list.length > 0) {
        const List = list;
        
        return( 
            <div className='container px-5'>
                
            {/* //////////////////Navbar/////////////////////// */}

                <h1 className='display-4 pt-2 pb-5'>The List</h1>
                <div className='container-fluid'>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Grocery Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pet-store">Pet Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hardware-store">Hardware Store</a>
                        </li>
                    </ul>

                    <div className='container text-end p-3'>
                            <a href='/add-item'><button type="button" className="btn btn-primary px-4">Add to List</button></a>
                        </div>
                    </div>
                
                   
                {
                list.map( ( item, index ) => {
                    if (index === 0) {

                        {/* //////////////////Accordion 1/////////////////////// */}

                        return(
                            <div key={index} className="accordion px-5" id="accordionExample">
                                <div className="accordion-item text-end">
                                    <span className="badge bg-primary rounded-pill mx-2">{item.quantity}</span>
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        {item.item}
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-start">
                                            <p className=''>Price: {item.price}</p>
                                            <p className=''>Category: {item.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            );
                    } else {

                        {/* //////////////////Remaining Accordions/////////////////////// */}
                        
                        return(
                            <div key={index} className='accordion px-5'>
                                <div className="accordion-item text-end">
                                    <span className="badge bg-primary rounded-pill mx-2">{item.quantity}</span>
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse` + index} aria-expanded="false" aria-controls="collapseTwo">
                                        {item.item}
                                        </button>
                                    </h2>
                                    <div id={`collapse` + index} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-start">
                                            <p className=''>Price: {item.price}</p>
                                            <p className=''>Category: {item.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })
            }
                </div>
        )} else {

            {/* //////////////////Loading Screen/////////////////////// */}
            
            return(
                <div className='container px-5'>
                <h1 className='display-4 pt-2 pb-5'>The List</h1>
                <div className='container-fluid'>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Grocery Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pet-store">Pet Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hardware-store">Hardware Store</a>
                        </li>
                    </ul>
                    <div>
                        <h1 className='display-5 p-5 text-center'>Loading...</h1>
                    </div>
                    <div className='container text-end p-3'>
                            <a href='/add-item'><button type="button" className="btn btn-primary px-4">Add to List</button></a>
                        </div>
                    </div>
                </div>
            );
        }
}
        
                    
                
                
        
                    

        