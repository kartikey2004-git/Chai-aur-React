import './App.css'
import Card from './components/Card'

function App() {
  // let myObj = {
  //   username: "kartik",
  //   age:21
  // }
  
  // let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username ="chai aur code" btnText='Click Me'/>
      <Card username = "hitesh" btnText='Visit me'/>

      {/* someObj = {myObj} someArr = {myArr} we declare arrays and objects in function return type as a variable by {} */}
    </>
  )
}


export default App

// passing arrays and objects in empty objects