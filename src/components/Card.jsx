import React from 'react'
import  "../scss/card.scss";

const Card = ({data}) => {
    console.log(data)
  return (
    <div>
        {data.map(({name, job, comment, img})=>(
            <div className='card-container'>
                <h3 className = "card__name">{name}</h3>
                <h2  className = "card_job">{job}</h2>
                <h3 className="card_comment">{comment}</h3>
                <div className='card__image'>
                    <img className = "card__image_photo" src={img} alt="portre" width="100px"/>
                </div>
                <div className='card__btn'>
                    <button className='card__btn_btn1'>small</button>
                    <button className='card__btn_btn2'>large</button>
                </div>
            </div>

        )
)}
      
    </div>
  )
}

export default Card