import { useState } from 'react'
import './App.css'
import CardBox from './Conponets/CardsBox'
import data from './data'

function App() {

  const [tours, setTours] = useState(data)
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours)
  }
  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }
  return (
    <>
      <CardBox tours={tours} removeTour={removeTour} ></CardBox>
    </>
  )
}

export default App
