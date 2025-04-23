import React from 'react'

const UserCard = ({fisrtName, proffesion, city, email, setName}) => {
  function changeName(){
    setName("Pedro")
  }

  return (
    <div className='card_contact'>

        <div>
            <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369989.png" alt="" />


            <ul className='data'>
                <li className='name'>{fisrtName}</li>
                <li className='profesion'>{proffesion}</li>
                <li className='location'>{city}</li>
                <li className='email'>{email}</li>                
            </ul>
            <button onClick={changeName}>Cambiar Nombre</button>
        </div>

        <div>
            <ul className='socialNetworks'>
                <li><img src="https://th.bing.com/th/id/R.d735cbb53a494922bab03d3be21d7ad1?rik=DUHDyl9XAzSJlA&pid=ImgRaw&r=0" alt="" /></li>
                <li><img src="https://1.bp.blogspot.com/-yNdbhKAZ7_c/Xlpz0lhaI6I/AAAAAAAAn00/Dcc6ZVGWwYwjkVh5umouxbhVR16pGHqyACLcBGAsYHQ/s640/%25D8%25A7%25D9%2584%25D8%25AA%25D9%2582%25D8%25A7%25D8%25B7.PNG" alt="" /></li>
                <li><img src="https://th.bing.com/th/id/OIP.BhMzcw3vOvSOARnVA0E_RwHaHa?rs=1&pid=ImgDetMain" alt="" /></li>
            </ul>
        </div>



    </div>

  )
}

export default UserCard