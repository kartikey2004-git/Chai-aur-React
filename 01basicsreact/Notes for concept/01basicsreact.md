• Documentation for react - 
https://react.dev/

• Basics of github for creating a repository 

 dir (directory) is a command in various computer operating systems used for computer file and directory listing. It is one of the basic commands to help navigate the file system.


1. echo "# chai-aur-react" >> README.md(markdown file)
2. git init (for intialising repo)
3. git add README.md
4. git commit -m "first commit" 
5. git branch -M main
6. git remote add origin https://github.com/kartikey2004-git/react-js


React is a library for web and native user interfaces

(Three.js for animations)

Start a new project by documentation

1. Vite or Parcel are Bundlers

Bundler kya krta hai jaise ki hum bahut saari files mein javascript likhte hai un sabko combine krke ek basic file de deta hai , jisse humara saara kaam ho jata hai

 React library kya krti hai isme bahut saare concepts hai ki hum application kis tarike se bana skte hai and references ko hold kr skte hai
 

 1. react-dom(for web)
 2. react -native(for mobile app development)

 npm(node package manager) to install libraries 

 npx (node package executor)
 To create a project in react without bundler

 npx create-react-app
 (bulky utility hai , larger bundles size , packages ka size bhi bahut hota hai)

 create-react-app(utility/software)
 vite or parcel (utility/software)
 and we can also setup our custom build process

 dependecies : mein do main library which handles web react , react-dom

 testing-library through jest

  web vitals used to track/record the performance of applications


 Scripts

    "scripts": {

    "start": "react-scripts start", to run projects in development environment

    "build": "react-scripts build",
    jab production mein humari application jati hai toh wo thoda different behave krti hai , browser ko react samjh nhi aata toh usko khali html css js hi samjh aata hai , to usko generate krne  ke liye build hai...


    "test": "react-scripts test",
    to run all test cases


    "eject": "react-scripts eject"
    reject application from react when we introduce another library or framework

    linting errors
  },


    "browserslist": 
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],

    production mein kon kon se browser pr humara application chalega






