import React, {useState} from 'react'
import '../scss/Clock.scss'

export const Clock = () => {
    const [currentTime, setCurrentTime] = useState()
    const updateTime = ()=>{
      const  time = new Date().toLocaleTimeString()
      setCurrentTime(time)
    }
    setInterval(updateTime, 1000)




  return (
    <div className='clock'>
        <h4 className='hidden-clock'>Sverige: {currentTime}</h4>
    </div>
  )
}

