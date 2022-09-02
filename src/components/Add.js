import { React } from 'react';

export default function Add() {
    return(
        <div className='container mx-5 px-5'>
            <div className='text-center container'>
                <h1 className='display-4 mb-5'>Add to a List</h1>
            </div>
            <form>
                    
            {/*     Inputs     */}
            <div className='container px-5 mb-3 text-center col-lg-8'>
                <div className='px-5'>
                    <div class="mb-3">
                        <label for="item-name" className="form-label">Item: </label>
                        <input type="email" className="form-control" name="item-name"/>
                    </div>
                    <div className='mb-3'>
                        <label for="quantity" class="form-label">Quantity: </label>
                        <input type='text' class="form-control" name="quantity"/>
                    </div>
                    <div className='mb-3'>
                        <label for="quantity" class="form-label">Price: </label>
                        <input type='text' class="form-control" name="price"/>
                    </div>
                </div>

                {/*     Radio Checkboxes     */}
                <div name='radios' className='mx-5'>
                    <div className='text-center py-3'>
                        <label for='radios'>Choose a List:</label>
                    </div>
                    <div className='row'>
                        <div className="form-check col-12 col-md-4">
                            <input type="checkbox" className="form-check-input" name="grocery_input"/>
                            <label className="form-check-label" for="grocery_input">Groceries</label>
                        </div>
                        <div class="form-check col-12 col-md-4">
                            <input type="checkbox" className="form-check-input" name="pet_input"/>
                            <label className="form-check-label" for="pet_input">Pet Store</label>
                        </div>
                        <div class="form-check col-12 col-md-4">
                            <input type="checkbox" className="form-check-input" id="hardware_input"/>
                            <label className="form-check-label" for="hardware_input">Hardware</label>
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
        
        