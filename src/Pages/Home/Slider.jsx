// import React from "react";
// import Slider from "react-slick";
// import BackgroundImage from "../../assets/background.webp"; // Import gambar agar path lebih konsisten

// function PauseOnHover() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   };

//   const slides = [
//     { id: 1, title: "Slide 1", image: BackgroundImage },
//     { id: 2, title: "Slide 2", image: BackgroundImage },
//     { id: 3, title: "Slide 3", image: BackgroundImage },
//     { id: 4, title: "Slide 4", image: BackgroundImage },
//     { id: 5, title: "Slide 5", image: BackgroundImage },
//     { id: 6, title: "Slide 6", image: BackgroundImage },
//   ];

//   return (
//     <div className="slider-container p-4 bg-gray-100">
//       <h2 className="text-center text-xl font-bold mb-4">Pause on Hover Slider</h2>
//       <Slider {...settings} className="h-60"> {/* Atur tinggi slider */}
//         {slides.map((slide) => (
//           <div key={slide.id} className="p-2 h-full"> {/* Pastikan kontainer slide menyesuaikan */}
//             <figure className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="h-40 w-full object-cover" /* Batasi tinggi gambar */
//               />
//               <figcaption className="text-center p-2 bg-gray-800 text-white text-sm">
//                 {slide.title}
//               </figcaption>
//             </figure>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default PauseOnHover;
