import { React } from 'react';
import { useParams } from 'react-router-dom';

export default function Delete() {

    let id = useParams();
    console.log(id.id);

    return(
        <div className='container mx-5 p-5'>
            <div className='text-center container'>
                <h1 className='display-4 mb-5'>Delete list item?</h1>
            </div>
            <form>        
                <div className='container px-5 mb-3 text-center col-lg-8'>

                {/*     Buttons     */}
                    <div className='container text-center pt-3'>
                        <button type="submit" className="btn btn-danger px-4 mx-2">Delete</button>
                        <a href='/'><button type="button" className="btn btn-warning mx-2">Cancel</button></a>
                    </div>
                </div>
            </form>
        </div>
    )
}
        
        