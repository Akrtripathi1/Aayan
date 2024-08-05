import React from 'react'
import './SoftwareDev.scss'
import digital2 from './image/digital2.png'
import software from './image/software.mp4'
import webdev2 from './image/webdev2.png'
import webdev3 from './image/webdev3.png'
import webdev4 from './image/webdev4.png'
import webdev5 from './image/webdev5.png'


const SoftwareDev = () => {
    return (
        <div className='software'>
            <div className='software-1'>
                <div className='software-1-left'>
                    <video src={software} autoPlay muted loop></video>
                </div>
                <div className='software-1-right'>
                    <h4>Custom Software Devlopment</h4>
                    <div className='software-1-p'>
                        Digital Marketing
                        Company in India
                    </div>
                    <div className="software-1-button">
                        <button className='software-1-button-1'>
                            Start a project together
                        </button>
                        <button className='software-1-button-2'>
                            Call us
                        </button>
                    </div>
                </div>
            </div>
            <div className="software-2">
                <div className="software-2-left">
                    <h4>
                        Software Development
                    </h4>
                    <p>
                        Software development is at the core of what Aayan Infotech does. We serve a diverse client base, each with
                        its own needs and requirements. We specialise in developing custom software solutions to improve business
                        performance and strategic planning of our clients. The software we create incorporates superior technical
                        intelligence to give our clients the tools they need to flourish. Our development team is dedicated to
                        creating high-quality software that fulfils each project's individual requirements while ensuring optimal
                        performance and client satisfaction.
                    </p>
                </div>
                <div className="software-2-right">
                    <img src={digital2} alt="" />
                </div>
            </div>
            <div className="software-31">
                <div className='software-3-head'>
                    <h4>
                        What we deliver
                    </h4>
                </div>
                <div className='software-3-para'>
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
            <div className='software-4'>
                <h4>Reasons for using website: -</h4>
                <div className="software-container">
                    <div className="software-card">
                        <img src={webdev2} alt="" />
                        <div className="software-card-content">
                            <p className='green-head'>Availability</p>
                            <h4> Present 24/7 online</h4>
                            <p>It is essential to anyone, anywhere, anytime, which is one of the most major
                                advantages. The website serves its customers so that the customer who enters
                                the page is satisfied and does need not to go to the other website. So, we
                                provide our customers with a 24/7 online service. Thus, we assure our customers
                                would be satisfied through our website and visit more and more for their help
                                or doubt clearance.</p>
                        </div>
                    </div>
                    <div className="software-card">
                        <img src={webdev3} alt="" />
                        <div className="software-card-content">
                            <p className='green-head'>Support</p>
                            <h4> Presence of 24/7 customer support</h4>
                            <p>While using the website, customers, some or the other way, experience difficulty.
                                The toughest job for any website is providing customer support. So, this website
                                is supportive and beneficial for the customer. They can clear the doubt through
                                some techniques like FAQs, chatbox, etc. Our website also provides a presence
                                of 24/7 customer service, which has been seen by our customers as very
                                beneficial for them and is left out by no complaints.</p>
                        </div>
                    </div>
                </div>
                <div className="software-container">
                    <div className="software-card">
                        <img src={webdev4} alt="" />
                        <div className="software-card-content">
                            <p className='green-head'>Growth</p>
                            <h4> Sales</h4>
                            <p>We all know that there are millions of members or population in the whole world.
                                They how far will need things which could be gadgets, utensils, clothes, etc.
                                Now, the website breaks geographical barriers and ultimately increases the
                                sales of the business.</p>
                        </div>
                    </div>
                    <div className="software-card">
                        <img src={webdev5} alt="" />
                        <div className="software-card-content">
                            <p className='green-head'>Differentiator</p>
                            <h4> Maintaining ownership:</h4>
                            <p>The company needs to protect the brand identity by owning a web address
                                and website. This will avoid controlling website content or brand to be
                                shared with a third party. Owning your domain name and using it as a
                                reputable host company is just important as choosing the domain name itself.
                                Owning your domain name is vital to the business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default SoftwareDev