import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const { name, city, color, bio, links } = user;

  return (
    <div id="app">
      <NavBar />
      <Home name={name} city={city} color={color} />
      <About bio={bio} github={links.github} linkedin={links.linkedin}/>
    </div>
  );
}
export default App;