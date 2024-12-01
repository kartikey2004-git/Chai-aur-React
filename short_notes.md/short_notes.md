A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

CLI stands for Command Line Interface,

npm install -D tailwindcss postcss autoprefixer

tailwind css ki dependicies hai 

props makes component reusable

default properties in javascript(hidden scope) directly kuch bhi accessible nhi hai

props ek property hai jiska access sabke pass hota hai jo ki empty object hota hai

---------------------------------------------------

concept of destructuring

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// object destructuring 
const {courseInstructor : instructor} = course
// course se course instructor value extract krni hai 
console.log(instructor); 


// destructuring objects 
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")

----------------------------------------

Usestate kya krta hai jitne bhi updates bhejne hai UI mein na ki sirf UI balki variable tak mein

unko batches mein bhejta hai(isi ke liye fibre aya hai) for more control on batches with diffing algorithm uske through mein

batches mein work perform krta hai(lekin actually mein teeno ka ek batch banega and hum ek hi kaam ko repeat kr rhe hai)...


setCounter like jitni bhi states hoti hai wo  bhi ek function hi hai jinke andar humko ek hidden feature milta hai jo ki callback accept krta as a parameter/argument

last updated state hai uski , wo humne usse fetch krwake mangwai hai
wo call back ke through aata hai toh actual mein complete hone ke baad phir dusra call hota hai, waha pr humara proper update hota hai
( ye sirf propogation of states hai)

---------------------------------------------------

agar hum direct onclick mein setColor pass krdete toh kya kaam ho jata ? ha kaam toh ho jata 
but onclick jo hai ek unique method hai
but onclick expect krta hai ki aap usko ek function pass kroge but hum pass kr rhe hai function ka reference but aise case mein parameter nhi pass kr skte hai

but agar hum function reference mein direct parameter dedete hai toh woh return value dega onclick mein chala jayega but onclick ko woh chahiye hi nhi but onclick toh function expect krta hai

callback ek function hai wo set color function ko hi call kr rha hai 

refresh krne pe olive isliye aa rha hai kyuki single application page hai and refresh krne pr wo intial state mein aa jayega jaha pr humne default value olive rkhi hui hai