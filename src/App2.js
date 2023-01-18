

import React from 'react'
import { useState } from 'react';
import uuid from 'react-uuid'
import './App.css';

const initProds = [
	{id: id(), name: 'prod1', catg: 'catg1', cost: 100},
	{id: id(), name: 'prod2', catg: 'catg2', cost: 200},
	{id: id(), name: 'prod3', catg: 'catg3', cost: 300},
  {id: id(), name: 'prod3', catg: 'catg3', cost: 300},
  {id: id(), name: 'prod3', catg: 'catg3', cost: 300},
];

function id() {
 return uuid()
}

const App2 = () => {
  const [obj,  ] = useState(initProds)

  const res = obj.map(item => {
    return <div key={item.id}>
      <table border='2px' cellPadding='3'>
        <tbody>
          <tr> name
            <td>{item.name}</td>
            <td>{item.catg}</td>
            <td>{item.cost}</td>
          </tr>

        </tbody>
      </table>

    </div>
  })

  return (
    <div className='App2'>
      {res}

    </div>
  )
}

export default App2
