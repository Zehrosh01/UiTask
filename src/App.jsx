// import React, { useState } from "react";
// import "./App.css";
// import LeftSideBar from "./LeftSideBar";
// import RightSideBar from "./RightSideBar";
// import { HiBackward } from "react-icons/hi2";
// import { HiForward } from "react-icons/hi2";

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (

//  <div className="relative flex">
// {/* Left Sidebar */}

//   {isSidebarOpen && <LeftSideBar className={`transition-all duration-900 ease-in-out ${
//            isSidebarOpen ? "w-1/3 translate-x-0" : "w-0 translate-x-[-100%]"
//          }`} />}

// {/* Right Sidebar: When Left Sidebar is closed, Right Sidebar takes full width */}

//   <RightSideBar className={`transition-all duration-300 ease-in-out ${
//            isSidebarOpen ? "translate-x-0" : "translate-x-[-100%]"
//          }`}/>

//   {/* Button to toggle Sidebar */}
//          <button onClick={toggleSidebar} className="absolute top-20 h-8 w-8 left-80 p-2 bg-gray-300 rounded-full">
//           {isSidebarOpen ? <HiBackward /> : <HiForward />}
//         </button>

//   {/* Displaying the state of the Sidebar (true or false) */}
//   {/* <p>{isSidebarOpen.toString()}</p> */}

// </div>

//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { HiBackward } from "react-icons/hi2";
import { HiForward } from "react-icons/hi2";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div
        className={`transition-all duration-900 ease-in-out ${
          isSidebarOpen ? "w-1/3 translate-x-0" : "w-0 translate-x-[-100%]"
        }`}
      >
        <LeftSideBar />
      </div>

      {/* Right Sidebar: When Left Sidebar is closed, Right Sidebar takes full width */}

      <RightSideBar
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-[-100%]"
        }`}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      

      {/* Displaying the state of the Sidebar (true or false) */}
      {/* <p>{isSidebarOpen.toString()}</p> */}
    </div>
  );
}

export default App;
