import React, { useState } from 'react'
import './topfold.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/expenses';

const Topfold = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch()
    const handleQuery=(e) =>{
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value));
    }
    return (
        <div className='topfold'>
            {window.location.pathname === '/' ? (<div className='home-topfold'>
                <div className='searchbar'>
                    <i className="fi fi-rr-search"></i>
                    <input value={query} placeholder='Search for Expenses' onChange={(e) => handleQuery(e)} />
                </div>
                <Link to='/add-expense'>
                <div className='add-button'>
                    <i className="fi fi-rr-add"></i>
                    {/* <label>Add</label> */}
                    Add
                </div>
                </Link>
            </div>) :
             (<div className='add-topfold'>
                <Link to='/'>
                    <div className='add-topfold-button'>
                        <i class="fi fi-rr-angle-left"></i>
                        Back
                    </div>
                </Link>
                <Link to='/'>
                    <div className='add-topfold-button'>
                        <i class="fi fi-rr-cross-circle"></i>   
                        Cancel
                    </div>
                </Link>

             </div>)}
        </div>
    )
}

export default Topfold
