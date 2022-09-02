import { React } from 'react';

export default function Grocery() {
    return(
            <div className='container px-5'>
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
                    <a href='/add-item'><button type="button" class="btn btn-primary px-4">Add to List</button></a>
                        </div>

                </div>
                <div className="accordion px-5" id="accordionExample">
                    <div className="accordion-item text-end">
                        <span className="badge bg-primary rounded-pill mx-2">14</span>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-start">
                                <p className=''>Price: </p>
                                <p className=''>Category: </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item text-end">
                        <span className="badge bg-primary rounded-pill mx-2">2</span>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-start">
                                <p className=''>Price: </p>
                                <p className=''>Category: </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item text-end">
                        <span className="badge bg-primary rounded-pill mx-2">1</span>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-start">
                                <p className=''>Price: </p>
                                <p className=''>Category: </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}
        
        