import React, { useState } from "react";
import { FaSearchPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://images.pexels.com/photos/30811019/pexels-photo-30811019/free-photo-of-charming-parisian-street-cafe-with-cozy-outdoor-seating.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
  "https://images.pexels.com/photos/31064408/pexels-photo-31064408/free-photo-of-view-through-a-window-to-the-colosseum-in-rome.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
  "https://images.pexels.com/photos/31100834/pexels-photo-31100834/free-photo-of-modern-architectural-buildings-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31129522/pexels-photo-31129522/free-photo-of-cherry-blossoms-over-city-street-in-springtime.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31044656/pexels-photo-31044656/free-photo-of-scenic-view-from-airplane-window-over-cloudy-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];






const Gallery = () => {
  const [selected, setSelected] = useState(null);


  const HandleImage = (index) => {
    setSelected(index);
  };


  const Next=()=>{

    if (selected !== null && selected < images.length - 1) {
        setSelected(selected + 1);
      }
      
  }

  const Prev = () => {
    if (selected !== null && selected > 0) {
      setSelected(selected - 1);
    }
  };
  console.log("sleected",selected)
  

  return (
    <div className="min-h-screen bg-gray-50 p-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Image Gallery</h2>

      {selected === null ? ( 
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"  
              onClick={() => HandleImage(index)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <FaSearchPlus className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative flex items-center justify-center">
          {/* Backward Button */}
          <button onClick={Prev}  disabled={selected===0} className={`absolute cursor-pointer  left-4 ${selected===0 ? "bg-gray-400" : "bg-pink-800 hover:bg-gray-700 text-white "} text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition1`}>

        
            <FaChevronLeft size={20} />
          </button>

          <img src={images[selected]}alt="Selected" className="w-full max-w-4xl rounded-lg shadow-lg" />

          {/* Forward Button */}
          <button onClick={Next} className="absolute right-4 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition">
            <FaChevronRight size={20} />
          </button>

          <button 
            onClick={() => setSelected(null)} 
            className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded cursor-pointer"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
