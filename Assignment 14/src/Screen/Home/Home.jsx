// import React from 'react';
// import Navbar from '../../Components/Navbar/Navbar';
// import Footer from '../../Components/Footer/Footer';
// import HeroSection from '../../Components/HeroSection/HeroSection';
// import { FaQuoteLeft } from 'react-icons/fa'; // Import an apostrophe-like icon
// import './Home.css'; // Add this for the specific styling
// import Card from '../../Components/Cards/Cards';
// import HomeApi from '../../Components/HomeApi/HomeApi';

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <HeroSection /> 
//       <br />
//       <br />
//       <br />
//       {/* New content added in the Home section */}
//       <div className="additional-content">
//         <div className="content-with-icon">
//           <FaQuoteLeft className="apostrophe-icon" />
//           <br /> {/* Line break between the icon and the text */}
//           <h1>Introducing New Arrivals</h1>
//         </div>
//         <p>Shopping is cheaper than therapy</p>
//         <br />
//         <div className="line-with-text">
//           <hr className="half-hr" />
//           <span className="line-text">Online Wardrobe</span>
//         </div>
//       </div>
// <div style={{display : 'inline-block'}}>
//   {
//     HomeApi.map((e,i)=>{
//       return(
//         <div key={i}>
//           <Card image={e.image} category={e.category} title={e.title} description={e.description} rating={e.rating}  price={e.price} />
//         </div>
//       )

//     })
//   }
// </div>
      

//       <Footer />
//     </>
//   );
// };

// export default Home;



// import React from 'react';
// import Navbar from '../../Components/Navbar/Navbar';
// import Footer from '../../Components/Footer/Footer';
// import HeroSection from '../../Components/HeroSection/HeroSection';
// import { FaQuoteLeft } from 'react-icons/fa'; // Import an apostrophe-like icon
// import './Home.css'; // Add this for the specific styling
// import Card from '../../Components/Cards/Cards';
// import HomeApi from '../../Components/HomeApi/HomeApi';

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <HeroSection /> 
//       <br />
//       <br />
//       <br />
//       {/* New content added in the Home section */}
//       <div className="additional-content">
//         <div className="content-with-icon">
//           <FaQuoteLeft className="apostrophe-icon" />
//           <br /> {/* Line break between the icon and the text */}
//           <h1>Introducing New Arrivals</h1>
//         </div>
//         <p>Shopping is cheaper than therapy</p>
//         <br />
//         <div className="line-with-text">
//           <hr className="half-hr" />
//           <span className="line-text">Online Wardrobe</span>
//         </div>
//       </div>

//       {/* Card Container with Flexbox */}
//       <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '20px 0' }}>
//         {
//           HomeApi.map((e, i) => {
//             return (
//               <div key={i} style={{ margin: '10px', flex: '1 1 300px', maxWidth: '300px' }}>
//                 <Card 
//                   image={e.image} 
//                   category={e.category} 
//                   title={e.title} 
//                   description={e.description} 
//                   rating={e.rating} 
//                   price={e.price} 
//                 />
//               </div>
//             )
//           })
//         }
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Home;


import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import HeroSection from '../../Components/HeroSection/HeroSection';
import { FaQuoteLeft } from 'react-icons/fa';
import './Home.css'; 
import Card from '../../Components/Cards/Cards';
import HomeApi from '../../Components/HomeApi/HomeApi';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection /> 
      <br />
      <br />
      <br />
      <div className="additional-content">
        <div className="content-with-icon">
          <FaQuoteLeft className="apostrophe-icon" />
          <br />
          <h1>Introducing New Arrivals</h1>
        </div>
        <p>Shopping is cheaper than therapy</p>
        <br />
        <div className="line-with-text">
          <hr className="half-hr" />
          <span className="line-text">Online Wardrobe</span>
        </div>
      </div>

      {/* Card Container with Flexbox */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        margin: '20px 0',
      }}>
        {
          HomeApi.map((e, i) => {
            return (
              <div key={i} style={{
                flex: '1 1 300px', // Ensures cards are of equal width
                maxWidth: '300px', // Maximum width of each card
                margin: '10px',
                boxSizing: 'border-box', // Ensures padding/border do not affect width
              }}>
                <Card
                id={e.id} 
                  image={e.image} 
                  category={e.category} 
                  title={e.title} 
                  description={e.description} 
                  rating={e.rating.rate} 
                  price={e.price} 
                />
              </div>
            )
          })
        }
      </div>

      <Footer />
    </>
  );
};

export default Home;

