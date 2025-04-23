import React from 'react'

const CardInfo = ({user}) => {

  return (
    <article className='card_info'>
        <img className='imgprofile' src={user.image} alt="" />
        <h2 className='username'> </h2>
        <hr />      

        <ul className='userlist'>
            <li className='userlistitem'>
                <span className='userlabel'>Email: </span>
                <span className='userinfo'></span>
            </li>
            <li className='userlistitem'>
                <span className='userlabel'>Phone: </span>
                <span className='userinfo'></span>
            </li>
            <li className='userlistitem'>
                <span className='userlabel'>Birhday: </span>
                <span className='userinfo'></span>
            </li>
        </ul>
        <hr />

        <footer className='footercard'>
            <button>Edit</button>
            <button>Delete</button>
        </footer>
    </article>
  )
}

export default CardInfo