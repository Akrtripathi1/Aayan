import React from 'react'
import './We.scss'
import webdev2 from "./img/webdev2.png"
import webdev3 from "./img/webdev3.png"
import webdev4 from "./img/webdev4.png"
import webdev5 from "./img/webdev5.png"

const We = () => {
  return (
    <div className='webservice-4'>
    <h4>Reasons for using website: -</h4>
    <div className="webservice-container">
        <div className="webservice-card">
            <img src={webdev2} alt="" />
            <div className="webservice-card-content">
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
        <div className="webservice-card">
            <img src={webdev3} alt="" />
            <div className="webservice-card-content">
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
    <div className="webservice-container">
        <div className="webservice-card">
            <img src={webdev4} alt="" />
            <div className="webservice-card-content">
                <p className='green-head'>Growth</p>
                <h4> Sales</h4>
                <p>We all know that there are millions of members or population in the whole world.
                    They how far will need things which could be gadgets, utensils, clothes, etc.
                    Now, the website breaks geographical barriers and ultimately increases the
                    sales of the business.</p>
            </div>
        </div>
        <div className="webservice-card">
            <img src={webdev5} alt="" />
            <div className="webservice-card-content">
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
  )
}

export default We