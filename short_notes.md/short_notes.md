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

----------------------------------------

Cache has multiple meanings, including a temporary storage space in computing and a hidden place for storing things:

--------------------------------------------

password wali useState mein kuch default password bhi de skte hai but hum password generate krwayenge 
ye ek alg mechanism hota hai jaise hi humara page load ho , automatically koi functionality run ho jaye , API call ho jaye , koi method run ho jaye and phir waha se data leke hum password mein dal denge and jaise page load hoga automatically UI se uske andar add ho jayega

--------------------------------------------
optimised solution to call one method many times(useCallback in react)
we need to learn from documentation

fn , arrays  ke hum dependencies pass krte hai
React limits the numbers of renders to prevent the infinite loop

setPassword dependencies for optimization for concept of memoisation(general concept hai ki aap ek aisa password bhi dedo jaha value set ho rhi hai)

Cache has multiple meanings, including a temporary storage space in computing and a hidden place for storing things:

kyuki hum core react mein kaam kr rhe hai toh hum window likh paa rhe hai , kyuki ultimately puri react compile hogi javascript mein jaha bhi yeh run hogi waha pe window object ka access hoga
 

But in nextJS waha hoti hai server side rendering , waha sara code execute hota hai server pe , waha pr humare pass window object nhi hota hai

---------------------------------------------------

1. use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function 
2. useeffect: runs the function inside it whenever the page renders first-time or dependencies are changed
3. use ref : used to give reference of selected components in our page so that functions can be performed on referenced values

I think we should not include setPassword in the useCallback dependency array, because when this functional component rerenders, the reference of the setPassword function would be different from the setPassword function on previous rerender. So this would again create the function. This would totally defy the reason why we are using useCallback as the function would again be created on every rerender.


In React, the setState function retains its reference between renders, and the reference to it does not change unless the component unmounts. 
This behavior is consistent within the same component instance during its lifecycle. As long as the component is mounted and not unmounted, the reference to setState remains the same throughout rendering and re-rendering cycles.

render, re-render is different from mounting and unmounting, right ? 
So, it should get retained in memory. And what you did was correct I guess, setPassword does not change ever, so mentioning it within the dependency array doesn't affect the memoization of the function at all, it is all the other dependencies that have a direct relationship with memoization. 
When includeCharacter and includeNumbers are toggled a new function body gets returned by useCallback. And only then the useEffect gets triggered. 

Please correct me, if I'm wrong. And do pin this comment so that it gets more attention.


No Hitesh, you are wrong. According to react docs, React guarantees that setState function identity is stable and won't change on re-renders. This is why it's safe to omit these functions from the useEffect or useCallback dependency list.


Actually I think that useEffect triggers first, and when it calls passwordGenerator, then here memoization and all is taken into consideration.
Since useEffect is also executed when length, numberallowed, charallowed changes. These are same dependencies associated with useCallback(). So passwordGenerator will create a new function..
Actually, he just wanted to explain useCallback(), that's why he has used it here. Because everytime the passwordGenerator is called a new function is created.

---------------------------------------------------