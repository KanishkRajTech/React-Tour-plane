
import Card from './Card'
function CardBox({tours, removeTour}){
    return(
        <div className='container'>
            <div>
                <h1 className='title'>Plane With Love Ones</h1>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) =>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default CardBox;