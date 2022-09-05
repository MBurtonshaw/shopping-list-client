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
                    for (let i = 0; i < 1; i++) {
                        if (response.data.list[i].is_hardware === true) {
                            setList(response.data.list[i]);
                        }
                    }
                }
            )} catch( error ) {
            //If there are errors, they are set to state to be displayed later in ServerError Display
            setMistakes(error.response.status + ' ' + error.response.statusText);
        }
    }
    useEffect( () => { get_em() }, [ setList ] );

    function fill_in() {
        let List = [list];
      
        for (let i = 0; i < List.length; i++) {
            return(
                <div key={i} className="accordion px-5" id="accordionExample">
                    <div className="accordion-item text-end">
                        <span className="badge text-bg-warning rounded-pill mx-2">{List[i].quantity}</span>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {List[i].name}
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-start">
                                <p className=''>Price: {List[i].price}</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <a className="nav-link" href="/pet-store">Pet Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/hardware-store">Hardware Store</a>
                        </li>
                    </ul>

                    <div className='container text-end p-3'>
                            <a href='/add-item'><button type="button" className="btn btn-warning px-4">Add to List</button></a>
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
                            <a className="nav-link" href="/pet-store">Pet Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/hardware-store">Hardware Store</a>
                        </li>
                    </ul>

                    <div className='container text-end p-3'>
                            <a href='/add-item'><button type="button" className="btn btn-warning px-4">Add to List</button></a>
                        </div>
                    </div>
                    <div><h1 className='display-4 text-center'>No items found</h1></div>
                </div>)
    }
}
