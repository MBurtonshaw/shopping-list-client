import { React } from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {

    let id = useParams();
    console.log(id.id);

    return(
        <div className='container mx-5 px-5'>
            <div className='text-center container'>
                <h1 className='display-4 mb-5'>Edit a list item</h1>
            </div>
            <form>
                    
            {/*     Inputs     */}
            <div className='container px-5 mb-3 text-center col-lg-8'>
                <div className='px-5'>
                    <div className="mb-3">
                        <label htmlFor="item-name" className="form-label">Item: </label>
                        <input type="email" className="form-control" name="item-name"/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="quantity" className="form-label">Quantity: </label>
                        <input type='text' className="form-control" name="quantity"/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="price" className="form-label">Price: </label>
                        <input type='text' className="form-control" name="price"/>
                    </div>
                </div>

                {/*     Radio Checkboxes     */}
                <div name='radios' className='mx-5'>
                    <div className='text-center py-3'>
                        <label htmlFor='radios'>Choose a List:</label>
                    </div>
                    <div className='row'>
                        <div className="form-check col-12 col-md-4">
                            <input type="radio" className="form-check-input" name="radio" id='grocery_input'/>
                            <label className="form-check-label" htmlFor="grocery_input">Groceries</label>
                        </div>
                        <div className="form-check col-12 col-md-4">
                            <input type="radio" className="form-check-input" name="radio" id='pet_input'/>
                            <label className="form-check-label" htmlFor="pet_input">Pet Store</label>
                        </div>
                        <div className="form-check col-12 col-md-4">
                            <input type="radio" className="form-check-input" name="radio" id='hardware_input'/>
                            <label className="form-check-label" htmlFor="hardware_input">Hardware</label>
                        </div>
                    </div>
                </div>
            </div>

                {/*     Buttons     */}
            <div className='container text-center pt-3'>
                <button type="submit" className="btn btn-primary px-4 mx-2">Submit</button>
                <a href='/'><button type="button" className="btn btn-danger mx-2">Cancel</button></a>
            </div>

            </form>
        </div>
    )
}
        
        