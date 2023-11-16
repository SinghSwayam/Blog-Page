import Header from './components/Header'
import Blogs from './components/Blogs'
import Pageination from './components/Pageination'
import { useContext, useEffect,useState } from 'react'
import { AppContext } from './context/AppContext'
import './App.css';
import { ThemeProvider } from './context/ThemeContext'
import { Toaster } from 'react-hot-toast'


export default function App() {

  const {fetchBlogPosts ,}= useContext(AppContext);

  const [themeMode,setThemeMode] = useState('light');

  const darkTheme= ()=>{
    setThemeMode('dark');
  }

  const lightTheme= ()=>{
    setThemeMode('light');
  }

  useEffect(() => {
    document.querySelector('body').classList.remove('dark','light')
    document.querySelector('body').classList.add(themeMode)
  },[themeMode])

  useEffect(() =>{
    fetchBlogPosts();
  },[])


  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'  >

      <Header />
      <Blogs />
      <Pageination />

    </div>
   
    </ThemeProvider>

  );
}
