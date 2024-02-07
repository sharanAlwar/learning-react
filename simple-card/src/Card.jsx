import image from './assets/passport.jpeg'

function Card(){

    return(
        <>
        <div className='card' >
            <img className='card-image' src={image} alt="noImage" />
            <h2 className='card-title' >Sharan</h2>
            <p className='card-text' >I am DevOps engineer!!</p>
        </div>
        </>
    )
}

export default Card;