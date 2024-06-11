import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Movies from "./Components/Movies";

function App() {
   const [Loading, setLoading] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 2000);
   }, []);

   return (
      <div className="min-h-[100vh]">
         <Nav />
         {Loading ? (
            "Loading"
         ) : (
            <div>
               <Movies />
            </div>
         )}
      </div>
   );
}

export default App;
