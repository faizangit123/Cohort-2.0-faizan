import React from "react";
import { useState, useEffect } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [name, setName] = useState("");
  const [allname, setAllname] = useState([])
  const [email, setEmail] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    // const newUser = {name, email}
    // const newNameArray = [...allname,newUser]
    // newNameArray.push(name)
    // setAllname(newNameArray)
    setAllname([...allname,{name,email}])
    setName("");
    setEmail("");
  }
  useEffect(() => {
  console.info(allname);
}, [allname]);

  return (

    <div>
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          name="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      {allname.map((elem, idx)=>{
        return <div key={idx}>
        <h4>{elem.name},{elem.email}</h4>
        </div>
      })}
    </div>
  );
};

export default App;

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import RandomUsers from "./components/RandomUsers";
// const App = () => {
//   const [Up, setUp] = useState(0);
//   const [User, setUser] = useState("");
//   const [AllUsers, setAllUsers] = useState([]);
//   function Submithandler(e) {
//     e.preventDefault();
//     console.log(User, AllUsers);
//     setAllUsers([...AllUsers, { user: User }]);
//     setUser("");
//   }

//   useEffect(function(){
//     setTimeout(() => {
//       console.log("useEffect is working")
//     }, 2000);
//   },[Up])

//   return (
//     <>
//     <RandomUsers></RandomUsers>
//       <form
//         onSubmit={(e) => {
//           Submithandler(e);
//         }}
//       >
//         <input
//           type="text"
//           value={User}
//           onChange={(e) => {
//             setUser(e.target.value);
//           }}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <br />
//       <br />
//       <div
//   style={{
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   }}
// >
//   {AllUsers.map((elem, idx) => {
//     return <h2 key={idx}>{idx+1}: {elem.user}</h2>;
//   })}
// </div>
// <br />
// <br />
//       <div>
//         <h2>{Up}</h2>
//         <button
//           onClick={() => {
//             setUp(Math.floor(Math.random()*100))
//             // setUp(Up + 1);
//           }}
//         >
//           Increase
//         </button>
//       </div>
//       <br />
//       <br />
//     </>
//   );
// };
// export default App;

// import React from 'react'
// import Home from './pages/Home'
// import About from './pages/About'
// import { Route, Routes } from 'react-router-dom'
// import Contact from './pages/Contact'
// import Footer from './pages/Footer';
// import Products from './pages/Products'
// import Navbar from './components/Navbar'
// import Random from './components/Random'
// import Mens from './components/Mens'
// import Womens from './components/Womens'
// const App = () => {
//   return (
//     <>
//     <Navbar/>
//     <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/about' element={<About/>}/>
//       <Route path='/about:id' element={<Random/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//       <Route path='/Footer' element={<Footer/>}/>
//       <Route path='/products' element={<Products/>}/>
//       <Route path='/products/mens' element={<Mens/>}/>
//       <Route path='/products/womens' element={<Womens/>}/>
//     </Routes>
//     </>
//   )
// }

// export default App