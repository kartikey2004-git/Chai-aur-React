import React from 'react';
import { createRoot } from 'react-dom/client'
// import { jsx as _jsx } from 'react/jsx-runtime';
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App || chai</h1>
        </div>
    )
}


// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }
// syntax sahi nhi hai kyuki hum jo render function bana rhe hai usme wo kuch aur parameter expect kr rha hoga


// implicit return ka concept

// arrow function pass kiya jayega ya fir sirf normal function bhi pass kr skte hai... render method mein kyuki by default render ...arguments mein function leta hai  jinke andar HTML code and an HTML element return ho rha hoga ... and then wo tree mein convert hota hai(wo jo json mein dekha tha)

const AnotherElement = () => ( 
<a href="https://google.com" target="_blank" rel="noreferrer">Visit google
</a>
);


// concept of react.createElement

const anotherUser = "chai aur react"

const ReactElement = React.createElement(
  'p',
  {href: "https://google.com" , target:"_blank" },
  'google',
  anotherUser
);


createRoot(document.getElementById('root')).render(
  <>
  {ReactElement}
  <AnotherElement/>
  <MyApp/>
  <App />
  </>
)


// har react ek  bundler use krta hai , abhi jaise koi babble hai(bundler ka kaam bts mein syntax ko upgrade krna and syntax ko convert krna )

// jsx mein jo html element return ho rha hai uski hoti hai parsing into syntax of custom react

// myApp at the end of day ek function hi hai so it can be executed as 

/*
 render(
myApp()
)

core javascript ka concept hai related with react usme kya hai ek function hota hai jiske andar ek html element return hota hai jo ki khud bhi ek function hai

direct object thodi pass krskte hai hum jo ki humne custom react mein banaya hai tha

but yaha pr humne custom render ka code nhi likha hai toh by defaut jo render hai uske jo arguments hai woh ek specific type ke hai (hum object as a argument nhi de skte hai)

*/

/* injection of variable in parsed tree syntax after the injection of jsx  function 

React.createElement by default inject hojata hai (babble transpiler inject krta hai)
*/

/* ek open source library hai react ki toh humn dekh skte ki jsx direct kaise import kr skte hai 

facebook -> react -> scripts ->
facebook -> react ->  babble ->
facebook -> react -> packages -> react -> src -> jsx -> react.createElement padh skte hai basic bahut
*/







// Free time mein kisi se puch lunga dono error


// import { jsx as _jsx } from 'react/jsx-runtime';


// ek error aa rhi hai ki jo humne React.createElement se banaya hai ek naya element jisko render kra rhe hai wo render ho ja rha hai but kaam nhi kr rha hai