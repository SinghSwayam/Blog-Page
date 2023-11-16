import React from 'react'
import useTheme from '../context/ThemeContext'
import './Toggler.css'
import toast from 'react-hot-toast'


const Toggler = () => {

    const { themeMode, lightTheme, darkTheme } = useTheme()

    const onChangeBtn = (e) => {
      const darkModeStatus = e.currentTarget.checked
      if (darkModeStatus){
        darkTheme();
        toast('Dark Mode', {
          icon:'🌑',
          style: {
            border:'2px solid black',
            borderRadius: '10px',
            background: '#320746',
            color: '#fff',
          }})
      }else{
        lightTheme();
        toast('Light Mode', {
          icon:'☀️',
          style: {
            border:'2px solid white',
            borderRadius: '10px',
            background: '#deb015',
            color: '#000',
          }})
      }
    }

  return (

    <div>
        <label class="switch">
        <input  type={"checkbox"} value={""} onChange={onChangeBtn} checked={themeMode === 'dark'} className="input" />
        <span class="slider"></span>
        </label>
    </div>
  )
}

export default Toggler