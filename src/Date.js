import React from 'react'
export default function D() {
    let dateObj = new Date()
    const days = ["sun","mon","tue","wed","thu","fri","sat"]
    const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    const day = days[dateObj.getDay()]
    const month = months[dateObj.getMonth()]
    const date = dateObj.getDate()
    const year = dateObj.getUTCFullYear()
    return <h1 className='date'>{day} , {month} , {date} , {year}</h1>
}

