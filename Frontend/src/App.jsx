import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Contacts from "./contacts/Contacts";

import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div>
        <Routes className="dark:bg-slate-900 dark:text-white">
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
