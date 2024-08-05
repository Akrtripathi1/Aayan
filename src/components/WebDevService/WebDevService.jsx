import React from 'react'
import "./WebDevService.scss";
import webdev1 from "./image/webdev1.png"
import We from '../Deliver/We.jsx'
import video from "./image/video.mp4"
import Switch from "./image/Switch.mp4"


const WebDevService = () => {
    return (
        <div className='webservice'>
            <div className='webservice-1'>
                <div className='webservice-1-left'>
                    <video src={video} autoPlay muted loop></video>
                </div>
                <div className='webservice-1-right'>
                    <h4>Website Devlopment</h4>
                    <div className='webservice-1-p'>Website Development
                        Company in India</div>
                    <div className="webservice-1-button">
                        <button className='webservice-1-button-1'>
                            Start a project together
                        </button>
                        <button className='webservice-1-button-2'>
                            Call us
                        </button>
                    </div>
                </div>
            </div>
            <div className="webservice-2">
                <div className="webservice-2-left">
                    <h4>
                        Website Devlopment
                    </h4>
                    <p>
                        Web Development is one of the most beautiful things which attract the customer
                        more. If you know the most famous line that the first impression is the last,”
                        then you know that why web design is very important. Everyone instantly likes a
                        webpage that is designed in a very précise manner and fully in categorization.
                        No one wants to visit the website where they have spent almost hours but cannot
                        find the desired thing they want. Web designing helps you to make your webpage more
                        attractive than ever before. It also helps things to get in place in the proper
                        positions
                        where they need to be. The customer loves to visit the sites repeatedly, which is
                        properly made by a professional and must be attractive to see.
                    </p>
                </div>
                <div className="webservice-2-right">
                    <img src={webdev1} alt="" />
                </div>
            </div>
            <div className="webservice-31">
                <div className='webservice-3-head'>
                    <h4>
                        What we deliver
                    </h4>
                </div>
                <div className='webservice-3-para'>
                    <p>
                        Aayan India gives you the best of web design from their highly skilled and experienced
                        web designers. Not only this, we have kept every factor in mind that is in required for an
                        incredible web page, such as which color, fonts, and texture to use. We assemble all the information
                        and data in a very categorized and précised manner. So that the user will find it very handy to have
                        access to it. Every user wants a user-friendly website, and we are very much professional in providing
                        that quality service to the customers.

                    </p>
                </div>
            </div>
            <div>
                < We/>
            </div>
            
        </div>
    )
}

export default WebDevService



// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './WebDevService.scss';
// import webdev1 from './image/webdev1.png';
// import webdev2 from './image/webdev2.png';
// import webdev3 from './image/webdev3.png';
// import webdev4 from './image/webdev4.png';
// import webdev5 from './image/webdev5.png';
// import video from './image/video.mp4';
// import Switch from './image/Switch.mp4';

// const WebDevService = () => {
//     return (
//         <div className="container">

//             <div className="row my-5">
//                 <div className="col-md-6">
//                     <video className="w-100" autoPlay muted loop src={video}></video>
//                 </div>
//                 <div className="col-md-6 text-center my-auto">
//                     <h1>Website Development</h1>
//                     <h2>Website Development<br />Company in India</h2>
//                     <button className="btn btn-dark my-3">Start a project together</button><br/>
//                     <button className="btn btn-outline-dark my-3">Call us</button>
//                 </div>
//             </div>

//             <div className="row my-5">
//                 <div className="col-md-6">
//                     <h1>Website Development</h1>
//                     <p>
//                         Web Development is one of the most beautiful things
//                         which attract the customer more. If you know the most
//                         famous line that the first impression is the last,” then you
//                         know that why web design is very important. Everyone
//                         instantly likes a webpage that is designed in a very
//                         précise manner and fully in categorization. No one
//                         wants to visit the website where they have spent almost
//                         hours but cannot find the desired thing they want. Web
//                         designing helps you to make your webpage more
//                         attractive than ever before. It also helps things to get in
//                         place in the proper positions where they need to be. The
//                         customer loves to visit the sites repeatedly, which is
//                         properly made by a professional and must be attractive
//                         to see.
//                     </p>
//                 </div>
//                 <div className="col-md-6">
//                     <img src={webdev1} className="img-fluid" alt="Web Development" />
//                 </div>
//             </div>

//             <div className="row my-5 text-center bg-success text-white p-5 rounded">
//                 <h1>What we deliver</h1>
//                 <p>
//                     Aayan Infotech gives you the best of web design from their highly skilled and experienced web designers. Not<br />
//                     only this, we have kept every factor in mind that is in required for an incredible web page, such as which <br />
//                     color, fonts, and texture to use. We assemble all the information and data in a very categorized and<br />
//                     précised manner. So that the user will find it very handy to have access to it. Every user wants a user-<br />
//                     friendly website, and we are very much professional in providing that quality service to the customers.
//                 </p>
//             </div>

//             <h2 className="my-5">Reasons for using website:</h2>

//             <div className="row my-5">
//                 <div className="col-md-6">
//                     <img src={webdev2} className="img-fluid" alt="Availability" />
//                     <h3 className="text-success">Availability</h3>
//                     <h4>Present 24/7 online</h4>
//                     <p>
//                         It is essential to anyone, anywhere, anytime, which is one of the most major<br />
//                         advantages. The website serves its customers so that the customer who<br />
//                         enters the page is satisfied and does need not to go to the other website. So,<br />
//                         we provide our customers with a 24/7 online service. Thus, we assure our <br />
//                         customers would be satisfied through our website and visit more and more for<br />
//                         their help or doubt clearance.
//                     </p>
//                 </div>
//                 <div className="col-md-6">
//                     <img src={webdev3} className="img-fluid" alt="Support" />
//                     <h3 className="text-success">Support</h3>
//                     <h4>Presence of 24/7 customer support</h4>
//                     <p>
//                         While using the website, customers, some or the other way, experience<br />
//                         difficulty. The toughest job for any website is providing customer support. So,<br />
//                         this website is supportive and beneficial for the customer. They can clear the<br />
//                         doubt through some techniques like FAQs, chatbox, etc. Our website also<br />
//                         provides a presence of 24/7 customer service, which has been seen by our<br />
//                         customers as very beneficial for them and is left out by no complaints.
//                     </p>
//                 </div>
//             </div>

//             <div className="row my-5">
//                 <div className="col-md-6">
//                     <img src={webdev4} className="img-fluid" alt="Growth" />
//                     <h3 className="text-success">Growth</h3>
//                     <h4>Sales</h4>
//                     <p>
//                         We all know that there are millions of members or population in the whole<br />
//                         world. They how far will need things which could be gadgets, utensils,<br />
//                         clothes, etc. Now, the website breaks geographical barriers and ultimately<br />
//                         increases the sales of the business.
//                     </p>
//                 </div>
//                 <div className="col-md-6">
//                     <img src={webdev5} className="img-fluid" alt="Differentiator" />
//                     <h3 className="text-success">Differentiator</h3>
//                     <h4>Maintaining ownership:</h4>
//                     <p>
//                         The company needs to protect the brand identity by owning a web address <br />
//                         and website. This will avoid controlling website content or brand to be shared<br />
//                         with a third party. Owning your domain name and using it as a reputable host<br />
//                         company is just important as choosing the domain name itself. Owning your<br />
//                         domain name is vital to the business.
//                     </p>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default WebDevService;




