import React from 'react'
import Topfold from '../../components/topfold/topfold'
import './add-expense.css'
import AddForm from '../../components/addForm/addForm'

const AddExpense = () => {
  return (
    <div className='add-expense'>
      <Topfold/>
      <AddForm/>
    </div>
  )
}

export default AddExpense
