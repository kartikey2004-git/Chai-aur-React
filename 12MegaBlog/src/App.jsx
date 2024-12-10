import { useState , useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authslice'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          { /* TODO : <Outlet /> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App

// In React, dispatch is a function that sends an action to the Redux store, which triggers a state change in the application

