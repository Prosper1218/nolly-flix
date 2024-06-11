import React, {useRef} from "react";
import {useNavigate} from "react-router-dom";

const Signin = () => {
   //
   let emailref = useRef(null);
   let passwordref = useRef(null);
   //    user details
   const passemail = "hello@gmail.com";
   const passwordd = "123456";
   //
   const navigate = useNavigate();
   //handling the submit event
   const handleSubmit = (e) => {
      e.preventDefault();
      const email = emailref.current.value;
      const password = passwordref.current.value;
      if (email === passemail && password === passwordd) {
         navigate("/Home");
      } else {
         alert("creadentials does not match");
         navigate("/");
      }
   };

   //
   return (
      <div className="bg-[#0B1215] min-h-[100vh] flex flex-col justify-center items-center">
         <div className="">
            <form onSubmit={handleSubmit} className="border min-w-[15rem] min-h-[15rem] rounded-lg flex flex-col items-center space-y-6 px-5 justify-center">
               <h4 className="text-bold text-3xl text-[#cccccc]">Sign In</h4>

               <input
                  type="email"
                  name="email"
                  placeholder="email"
                  id="email"
                  ref={emailref}
                  className="w-full h-8 focus:outline-none outline-none border px-4 text-xs bg-transparent rounded-lg text-[#cccccc] border-[#cccccc] font-mono"
               />
               <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  ref={passwordref}
                  className="w-full h-8 outline-none px-4 border text-xs bg-transparent rounded-lg text-[#cccccc] border-[#cccccc] font-mono"
               />
               <button type="submit" className="w-full h-8 border outline-none px-4 text-xs rounded-lg text-[black] border-[#cccccc] font-mono bg-[#cccccc]">
                  Submit
               </button>
            </form>
         </div>
         <div className="max-w-[15rem] text-xs text-center">
            user = email: hello@gmail.com , <br /> password: 123456
         </div>
      </div>
   );
};

export default Signin;
