import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Hardware() {

    let [ list, setList ] = useState('');
    let [ mistakes, setMistakes ] = useState('');

    async function get_em() {
        try {
            await axios.get( `http://localhost:5000/hardware-store` ).then(
                response => {
                        setList(response.data.list);
                }
            )} catch( error ) {
            //If there are errors, they are set to state to be displayed later in ServerError Display
            setMistakes(error.response.status + ' ' + error.response.statusText);
        }
    }
    useEffect( () => { get_em() }, [ setList ] );

    function fill_in() {
        if (list.length > 0) {
            return(
                list.map( (item, index) => 
               {
                if (item.is_pet === true) {
                    return(
                        <div key={index} className="accordion px-5" id="accordionExample">
                            <div className="accordion-item text-end">
                                <span className="badge text-bg-success rounded-pill mx-2">{item.quantity}</span>
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        {item.name}
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-start">
                                        <p>Price: {item.price}</p>
                                        <div className='row'>
                                            <p className='col-6'>Quantity: {item.quantity}</p>
                                            <div className='container text-end col-6'>
                                                <span className='px-2'><a href={ '/edit/' + item.id }>Edit</a></span>
                                                <span className='px-1'><a href={ '/delete/' + item.id }>Delete</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>);
                    } 
            }
                )
            );
        } else {
            return(
                <div><h1 className='display-6 text-center py-5'>No results were found</h1></div>
            );
        }
    }
    
    if (list) {
        
        return( 
            <div className='container px-5'>
                
            {/* //////////////////Navbar/////////////////////// */}

                <h1 className='display-4 pt-2 pb-5'>The List</h1>
                <div className='container-fluid'>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Grocery Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/pet-store">Pet Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hardware-store">Hardware Store</a>
                        </li>
                    </ul>

                    <div className='container text-end p-3'>
                            <a href='/add-item'><button type="button" className="btn btn-success px-4">Add to List</button></a>
                        </div>
                    </div>
                    {fill_in()}
                </div>)
       
    } else {
        return( 
            <div className='container px-5'>
                
            {/* //////////////////Navbar/////////////////////// */}

                <h1 className='display-4 pt-2 pb-5'>The List</h1>
                <div className='container-fluid'>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Grocery Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/pet-store">Pet Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hardware-store">Hardware Store</a>
                        </li>
                    </ul>

                    <div className='container text-end p-3'>
                            <a href='/add-item'><button type="button" className="btn btn-success px-4">Add to List</button></a>
                        </div>
                    </div>
                    <div><h1 className='display-4 text-center'>No items found</h1></div>
                </div>)
    }
}
