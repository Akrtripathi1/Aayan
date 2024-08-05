import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import CaseStudy from './components/CaseStudy/CaseStudy';
import Company from './components/Company/Company';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer.jsx';
import Services from './components/Services/Services';
import WebDevService from './components/WebDevService/WebDevService.jsx';
import DigitalMarketing from './components/DigitalMarketing/DigitalMarketing';
import CardRehvup1 from './components/CardRehvup1/CardRehvup1';
import CardRehvup2 from './components/CardRehvup2/CardRehvup2';
import Blockchain from './components/Blockchain/Blockchain';
import Iot from './components/Iot/Iot';


import OurServices from './components/OurServices/OurServices.jsx';
import Oservice from './components/Oservice/Oservice.jsx';
import GameDev from './components/GameDev/Game';
import SoftwareDev from './components/SoftwareDev/SoftwareDev';
import AppDev from './components/AppDev/App';
import Design from './components/Design/Design';
import Blog from './components/Blog/Blog.jsx';
import ScrollToTop from "./ScrollToTop";
import AllAbout from './components/AllAbout/AllAbout.jsx';
import Parents from './components/Parents/Parents.jsx'
import Clienys from './components/Clients/Clienys.jsx';
import Location from './components/Location/Location.jsx';
import Form1 from './components/ContactUs/Form1.jsx';
import Workblock from './components/CaseStudy/Workblock.jsx';
import Rehvap from './components/CaseStudy/Rehvap.jsx';
import We from './components/Deliver/We.jsx';
import Case from './components/CaseStudy/Case.jsx';
import Home1 from './components/Home1/Home1.jsx';
import Home3 from './components/Home3/Home3.jsx'
import Test8 from './components/Test8/Test8.jsx'
import Test from './components/Test9/Test.jsx'
import CardCarousel from './components/CARAS/ CardCarousel.jsx';
import Hoo from './components/Home/Hoo.jsx';
import Hoop from './components/Home/Hoop.jsx';






import PageNotFound from './components/PageNotFound/PageNotFound';
import EnquiryForm from './components/EnquiryForm/Form.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/web-service" element={<WebDevService />} />
        <Route path="/digital-service" element={<DigitalMarketing />} />
        <Route path="/blockchain-service" element={<Blockchain />} />
        <Route path="/iot-service" element={<Iot />} />
        <Route path="/game-service" element={<GameDev />} />
        <Route path="/software-service" element={<SoftwareDev />} />
        <Route path="/appDev-service" element={<AppDev />} />
        <Route path="/design-service" element={<Design />} />
        <Route path="/Card-Rehvup1" element={<CardRehvup1 />} />
        <Route path="/Card-Rehvup2" element={<CardRehvup2 />} />
        <Route path="/form" element={<EnquiryForm />} />
        <Route path="/blog" element={<Blog />} />
       
     

        <Route path="/ourservice" element={<OurServices  />} />
        <Route path="/oservice" element={<Oservice  />} />
        <Route path="/allabout" element={<AllAbout  />} />
        <Route path="/parents" element={<Parents  />} />
        <Route path="/client" element={<Clienys  />} />
        < Route path='/map' element={<Location/>}/>
        < Route path='/form1' element={<Form1/>}/>
        < Route path='/work' element={<Workblock/>}/>
        < Route path='/vap' element={<Rehvap/>}/>
        < Route path='/we' element={<We/>}/>
        < Route path='/case' element={<Case/>}/>
        < Route path='/home1' element={<Home1/>}/>
        < Route path='/home3' element={<Home3/>}/>
        < Route path='/test8' element={<Test8/>}/>
        < Route path='/test' element={<Test/>}/>
        < Route path='/caras' element={<CardCarousel/>}/>
        < Route path='/hoo' element={<Hoo/>}/>
        < Route path='/hoop' element={<Hoop/>}/>

      
        
        
     

        

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />




    </Router>
  );
}

export default App;