import React from 'react'

const Card = ({item}) => {
    const titleFormat = item.title.slice(0,20)
    const percentageDrop = ((item.price_strikethrough - item.price) / item.price_strikethrough * 100 ).toFixed(0)

  return (
    <div className='card'>
      <div className="image-container">
        <img src= {item.url_image} alt={item.title} />
      </div>
      <div className="text-container">
        <h5>{titleFormat}...</h5>
        <p>Price drop form {item.price_strikethrough} to {item.price}</p>
        <p>Rating: {item.rating}</p>
      </div>
      <div className="info-container">
        <div className="circle">
            {percentageDrop}%
        </div>
        <a href={`https://www.amazon.in/${item.url}`}>Link</a>
      </div>
    </div>
  )
}

export default Card
