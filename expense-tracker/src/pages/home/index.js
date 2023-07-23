import React from 'react'
import './home.css'
import Topfold from '../../components/topfold/topfold'
import ExpenseList from '../../components/expense-list/ExpenseList'

const Home = () => {
  return (
    <div className='home'>
      <Topfold/>
      <ExpenseList/>
    </div>
  )
}

export default Home
