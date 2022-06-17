import React from 'react'
import perfil from './perfil.png'
function Info() {
  return (
    <div>
        <img src={perfil} alt="perfil" />
        <div className='name'>Yarriba Castro</div>
        <div className='subname'>Design Track</div>
        <div className='text'>I chose design track because I love to design beautiful user-centered interfaces.</div>

    </div>
  )
}

export {Info}