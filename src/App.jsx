import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Movies from "./Components/Movies";
import Load from "./Components/Load";
import Footer from "./Components/Footer";
function App() {
   const [Loading, setLoading] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 1500);
   }, []);

   return (
      <div className="min-h-[100vh] h-auto">
         <Nav />
         {Loading ? (
            <Load />
         ) : (
            <div>
               <Movies />
            </div>
         )}
         <br />
         <Footer />
      </div>
   );
}

export default App;
