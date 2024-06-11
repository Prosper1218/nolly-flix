import React, {useEffect, useState} from "react";
import bot from "/bot.webp";
import likked from "/liked.png";
import notlikked from "/notliked.png";

//
//
//
//javascript foreach?
//
//
let movies = [
   {
      id: 1,
      name: "The Redemption",
      likes: 6,
      banner: bot,
      price: 30,
   },
   {
      id: 2,
      name: "Africa's Tech Roots",
      likes: 4,
      banner: bot,
      price: 13,
   },
   {
      id: 3,
      name: "The Invisible man",
      likes: 3,
      banner: bot,
      price: 10,
   },
   {
      id: 4,
      name: "The Complicated Project",
      likes: 7,
      banner: bot,
      price: 50,
   },
   {
      id: 5,
      name: "Simply Javascript",
      likes: 5,
      banner: bot,
      price: 20,
   },
   {
      id: 6,
      name: "The New Web",
      likes: 8,
      banner: bot,
      price: 60,
   },
];
const Movies = () => {
   const [Movies, setMovies] = useState(movies);
   const [Liked, setLiked] = useState(false);
   const handleLike = (id) => {
      setMovies((prevMovies) => prevMovies.map((movie) => (movie.id === id ? {...movie, likes: movie.likes + 1, price: movie.price + 5} : movie)));
   };

   return (
      <div className="pt-10 px-10 md:px-16 h-auto">
         <h1 className="font-bold sora text-2xl float-left">Featured</h1>
         <br />
         <section className="mt-4 lg:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-auto gap-4 p-2 items-start">
            {Movies.map((item) => {
               const {likes, id, name, banner, price} = item;

               if (item.likes >= 7) {
                  return (
                     <main
                        key={id}
                        className=" shadow-[0px_4px_16px_rgba(0,0,0,0.5),_0px_8px_24px_rgba(0,0,0,0.5),_0px_16px_56px_rgba(0,0,0,0.5)] rounded-md pb-3 hover:scale-105 transition ease-in-out"
                     >
                        <img className="w-full object-cover rounded-t-md" src={banner} alt={name} />
                        <div className="flex justify-between px-2 mt-3">
                           {" "}
                           <p className="text-xs text-left sora flex flex-wrap w-[8rem]">{name}</p>
                           <div className="text-xs sora flex flex-row items-center gap-1">
                              <span> {likes}</span>
                              <span><img src={likked} alt="liked btn" className="w-4 h-4 mt-1" /></span>
                           </div>
                        </div>
                        <p className="sora float-left pl-2 text-sm font-bold">${price}</p>
                     </main>
                  );
               }
            })}
         </section>
         <br />
         <h1 className="font-bold sora text-2xl float-left">All movies</h1>
         {/*  */}
         <br />
         {/*  */}
         <section className="mt-4 lg:max-w-[80%] m-auto grid grid-cols-1 smgrid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 items-start">
            {Movies.map((item) => {
               const {likes, id, name, banner, price} = item;
               return (
                  <main
                     key={id}
                     className=" shadow-[0px_4px_16px_rgba(0,0,0,0.5),_0px_8px_24px_rgba(0,0,0,0.5),_0px_16px_56px_rgba(0,0,0,0.5)] rounded-md pb-3 hover:scale-105 transition ease-in-out"
                  >
                     <img className="w-full object-cover rounded-t-md" src={banner} alt={name} />
                     <div className="flex justify-between px-2 mt-3">
                        {" "}
                        <p className="text-xs text-left sora flex flex-wrap w-[8rem]">{name}</p>
                        <p className="text-xs sora flex flex-row items-center gap-1">
                           <span> {likes}</span>
                           <button onClick={() => handleLike(id)}>{<img src={notlikked} alt="likebtn" className="w-4 h-4 mt-1 likebtn" />}</button>
                        </p>
                     </div>
                     <p className="sora float-left pl-2 text-sm font-bold">${price}</p>
                  </main>
               );
            })}
         </section>
      </div>
   );
};

export default Movies;
