import React from 'react'

const Home = ({transactions}) => {
  return (
    <>
        {transactions.map((trans, index) => {
            let url=`/transactions/${index}`;
            return (
                <>
                    <ul>
                        <li>{trans.item_name}</li>
                        <li>{trans.amount}</li>
                        <li>{trans.date}</li>
                        <li>{trans.from}</li>
                        <li>{trans.category}</li>
                    </ul>
                </>
            )
        })}
    </>
  )
}

export default Home