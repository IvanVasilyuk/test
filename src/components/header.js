import React from 'react'

export default function header({value}) {
  return (
    <header>
        <div>
            <span className='logo'>House Shops {value}</span>
        </div>
        <div className='baner'></div>
    </header>
  )
}
