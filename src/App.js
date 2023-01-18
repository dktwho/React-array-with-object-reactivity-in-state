import { useState } from 'react';
import uuid from 'react-uuid';

import './App.css';

const initNotes = [
	{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
]; 

const id = 'IWSpfBPSV3SXgRF87uO74';

const newElem = {
	id: 'GMNCZnFT4rbBP6cirA0Ha',
	prop1: 'value41',
	prop2: 'value42',
	prop3: 'value43',
};

const data = {
	id: 'IWSpfBPSV3SXgRF87uO74',
	prop1: 'value21 !',
	prop2: 'value22 !',
	prop3: 'value23 !',
};

const id2 = 'JAmjRlfQT8rLTm5tG2m1L';
const prop2 = 'prop2';
const prop3 = 'prop3';

const id5 = 'JAmjRlfQT8rLTm5tG2m1L';
const prop = 'prop2';







function App() {
 const [notes, setNotes] = useState(initNotes)

// const result2 = notes.reduce((res, note) => note.id === id ? note: res, {})
//  console.log(result2)

// const result3 = notes.reduce((res, note) => note.id === id? note[prop2] : res, '')
//  console.log(result3)

// const result5 = notes.reduce((res, note) => note.id === id5 ? note[prop]: res, '')
// console.log(result5)
 


function deleteFixedElement(){
  setNotes(notes.filter(note => note.id !== id))
}

function addedFixedNewElement() {
  setNotes([...notes, {...newElem, id: uuid()}])
 }

 function changeFixedItem() {
  setNotes(notes.map(note => note.id === data.id ? data : note))
 }

 function changeElemWithId() {
  setNotes(notes.map(note => note.id === 'JAmjRlfQT8rLTm5tG2m1L' ? {...note, prop1: 'v1', prop2: 'v2', prop3: 'v3'} : note))
 }


 function addAdditionalProps() {
  setNotes(notes.map(note => note.id === id5 ? {...note, prop3: prop } : note))
 }

 function changePropsOnElem() {
  setNotes(notes.map(note => note.id === id2 ? {...note, prop2: prop2, prop3: prop3 } : note))
 }




  const result = notes.map(note => {
    return <p key={note.id}>
      <span>{note.prop1}</span>
      <span>{note.prop2}</span>
      <span>{note.prop3}</span>


    </p>

  })



  return (
    <div className="App">
      {result}
      <button onClick={deleteFixedElement}>delete fix</button>
      <button onClick={addedFixedNewElement}>added fix</button>
      <button onClick={changeFixedItem}>change fix (id)</button>
      <button onClick={changeElemWithId}>change fix</button>
      <button onClick={addAdditionalProps}>change one props in obj</button> 
      <button onClick={changePropsOnElem}>add additional</button>
     
      
  

    </div>
  );
}

export default App;
