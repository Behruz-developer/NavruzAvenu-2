// import { useEffect } from 'react'

// import AOS from 'aos'
// import 'aos/dist/aos.css';

// const Construction = () => {
//     useEffect(() => {
//         const initAOS = () => {
//             AOS.init({
//                 duration: 1000,
//                 once: true,
//                 offset: window.innerWidth < 1600 ? -200 : 400, 
//             });
//         };

//         initAOS();
//         window.addEventListener('resize', initAOS);

//         return () => {
//             window.removeEventListener('resize', initAOS);
//         };
//     }, []);
    
//     return (
//         <div className="construction">
//             <div className="container">
//                 <h2 className="construction_title">Qurilish jarayoni</h2>
//                 <div className="construction_box" data-aos="zoom-in-up">
//                     <div className="construction_card">
//                         <img src={construction} alt="" />
//                         <p className="construction_text">Iyun</p>
//                     </div>
//                     <div className="construction_card">
//                         <img src={construction2} alt="" />
//                         <p className="construction_text">May</p>
//                     </div>
//                     <div className="construction_card">
//                         <img src={construction3} alt="" />
//                         <p className="construction_text">Aprel</p>
//                     </div>
//                     <div className="construction_card">
//                         <img src={construction4} alt="" />
//                         <p className="construction_text">Mart</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Construction
