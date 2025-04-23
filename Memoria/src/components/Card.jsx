import React from 'react'

const Card = ({card, validateCards, isFlippled}) => {

  const hancdleClickCard = () => {
    console.log(isFlippled)
    validateCards(card)
    if(isFlippled){
        validateCards(card)       
    }

  }

  return (
    <div className='w-[90px] h-[90px] bg-transparent cursor-pointer' onClick={hancdleClickCard}>
                
        {/*Carta individual */}
        <div className={`relative preserve-3d w-full h-full duration-600 ${isFlippled?'my-rotate-y-180':''}`} >
            {/*Cara uno*/}
            <div className='absolute w-full h-full'> 
                <img src={card.src} alt="" />     

            </div>
            {/*Cara dos*/}
            <div className='absolute backface-hidden w-full h-full rounded-full overflow-hidden'>
                <img src='https://e7.pngegg.com/pngimages/1022/1019/png-clipart-question-mark-logo-question-mark-in-circle-icons-logos-emojis-question-marks.png'
                alt='imagen'/>
            </div>
        </div>        

    </div>
  )
}

export default Card