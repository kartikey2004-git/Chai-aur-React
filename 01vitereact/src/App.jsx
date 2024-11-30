import Chai from './chai';

function App() {
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    <h1>Chai aur react {username}</h1>
    </>
  )
}

export default App;

// Concept : how to inject variables in react(or js ko kaise inject krenge react mein)    

// {username} se direct inject krskte hai variables ko page pr(bahut important hai interview perspective)

// isko bolte hai evaluated expression