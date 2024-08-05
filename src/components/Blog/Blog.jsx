import React from 'react'
import './Blog.scss'
import Image from './Image/Image.png'
import Image1 from './Image/Image1.png'
import Image2 from './Image/Image2.png'
import Image3 from './Image/Image3.png'
import Icon from './Image/Icon.png'
import Image4 from './Image/Image4.png'
import Image5 from './Image/Image5.png'
import Image6 from './Image/Image6.png'
import Image7 from './Image/Image7.png'
import Image8 from './Image/Image8.png'

const Blog = () => {
    return (
        <div className='BLOG'>
            <div className="container-blog">
                <div className="left">      
                    <h5 className='head-left'>
                        Latest Post
                    </h5>
                    <div className="card-container">
                        <div className='card'>
                            <img src={Image3} alt="" />
                            <div className="card-content">
                                <p className='date'>
                                    Sunday , 1 Jan 2024
                                </p>
                                <div className="card-heading">
                                    <div>
                                        <h5 className='card-head'>CHAT GPT 4o</h5>
                                    </div>
                                    <div className='icon'>
                                        <img src={Icon}></img>
                                    </div>
                                </div>
                                <p className='line'>
                                    OpenAI Unveils GPT-4o: REVOLUTIONIZING
                                    CONVERSATIONAL AI
                                </p>
                                <div className="card-button">
                                    <button className='button-1'>
                                        All
                                    </button>
                                    <button className='button-2'>
                                        Tech
                                    </button>
                                    <button className='button-3'>
                                        Information
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={Image4} alt="" />
                            <div className="card-content">
                                <p className='date'>
                                    Sunday , 1 Jan 2024
                                </p>
                                <div className="card-heading">
                                    <div>
                                        <h5 className='card-head'>App Development</h5>
                                    </div>
                                    <div className='icon'>
                                        <img src={Icon}></img>
                                    </div>
                                </div>
                                <p className='line'>
                                    Revolutionizing Industries: How AI Integration
                                    Transforms Business Applications
                                </p>
                                <div className="card-button">
                                <button className='card-button-2'>
                                        Application
                                    </button>
                                    <button className='card-button-3'>
                                        Tech
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={Image5} alt="" />
                            <div className="card-content">
                                <p className='date'>
                                    Sunday , 1 Jan 2024
                                </p>
                                <div className="card-heading">
                                    <div>
                                        <h5 className='card-head'>Game in IOS</h5>
                                    </div>
                                    <div className='icon'>
                                        <img src={Icon}></img>
                                    </div>
                                </div>
                                <p className='line'>
                                    Elevating Entertainment: Aayan India’s
                                    Guide to the Best iOS Game App Development in India
                                </p>
                                <div className="card-button">

                                    <button className='card2-button-2'>
                                        Game
                                    </button>
                                    <button className='card2-button-3'>
                                        Research
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={Image6} alt="" />
                            <div className="card-content">
                                <p className='date'>
                                    Sunday , 1 Jan 2024
                                </p>
                                <div className="card-heading">
                                    <div>
                                        <h5 className='card-head'>Unity Dev</h5>
                                    </div>
                                    <div className='icon'>
                                        <img src={Icon}></img>
                                    </div>
                                </div>
                                <p className='line'>
                                    Unleashing the Power of Unity: Game Development
                                    Services in India by Aayan India
                                </p>
                                <div className="card-button">
                                    <button className='card3-button-1'>
                                        Application
                                    </button>
                                    <button className='card3-button-2'>
                                        Tech
                                    </button>
                                    <button className='card3-button-3'>
                                        Information
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={Image8} alt="" />
                            <div className="card-content">
                                <p className='date'>
                                    Sunday , 1 Jan 2024
                                </p>
                                <div className="card-heading">
                                    <div>
                                        <h5 className='card-head'>PM mental models</h5>
                                    </div>
                                    <div className='icon'>
                                        <img src={Icon}></img>
                                    </div>
                                </div>
                                <p className='line'>
                                    OpenAI Unveils GPT-4o: REVOLUTIONIZING
                                    CONVERSATIONAL AI
                                </p>
                                <div className="card-button">
                                    <button className='button-1'>
                                        All
                                    </button>
                                    <button className='button-2'>
                                        Tech
                                    </button>
                                    <button className='button-3'>
                                        Information
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <div className='sections'>
                        <p className='date'>Sunday,2 June 2024</p>
                        <h4 className='blog-heading'>
                            Achieving HIPAA Compliance: Best Practices for Secure <br /> Health Information Handling
                        </h4>
                        <div className='image-container-1'>
                            <img src={Image} alt="" />
                        </div>
                        <p className='content'>
                            Understanding the intricacies of HIPAA compliance is crucial for any healthcare-related organization. Ensuring the privacy and
                            security of patient health information is not only a legal obligation but also a cornerstone of patient trust and the integrity of your
                            practice. This comprehensive guide outlines the steps to achieve and maintain HIPAA compliance, focusing on safeguardin
                            sensitive health information.
                        </p>
                        <p className='content'>
                            Understanding the intricacies of HIPAA compliance is crucial for any healthcare-related organization. Ensuring the privacy and
                            security of patient health information is not only a legal obligation but also a cornerstone of patient trust and the integrity of your
                            practice. This comprehensive guide outlines the steps to achieve and maintain HIPAA compliance, focusing on safeguardin
                            sensitive health information.
                        </p>
                        <h5 className='bit'>
                            Key Takeaways
                        </h5>
                        <div className='image-container-2'>
                            <img  src={Image1} alt="" />
                        </div>
                        <ul className='items-list'>
                            <li>
                                The Health Insurance Portability and Accountability Act (HIPAA) mandates national standards to protect patient health information,
                                encompassing privacy, security, and breach notification rules.
                            </li>
                            <li>
                                Compliance requires implementing a combination of technical, administrative, and physical safeguards, alongside
                                regular risk assessments and management of electronic protected health information (e-PHI).
                            </li>
                            <li>
                                Staying HIPAA compliant is a continuous process that involves updating compliance plans, training staff, monitoring systems, and
                                adapting to new technologies such as cloud computing.
                            </li>
                            <li>
                                Staying HIPAA compliant is a continuous process that involves updating compliance plans, training staff, monitoring systems, and
                                adapting to new technologies such as cloud computing.
                            </li>
                        </ul>
                        <h5 className='para-head'>Understanding HIPAA Compliance</h5>
                        <p className='content'>
                            HIPAA compliance is a vital aspect of modern healthcare, ensuring that patient information remains confidential and secure in the
                            digital age. The Health Insurance Portability and Accountability Act (HIPAA) establishes national standards to prevent the
                            unauthorized sharing of health information, thereby protecting patient privacy.
                        </p>
                        <p className='content'>
                            HIPAA affects not only healthcare providers but also insurers and business associates involved in handling patient data. By
                            adhering to these regulations, healthcare entities reinforce the trust of their patients and uphold the integrity of their
                            operations.

                        </p>
                        <div className='image-container-3'>
                            <img src={Image2} alt="" />
                        </div>

                    </div>
                    <div className='sections'>
                        <p className='date'>Sunday,2 June 2024</p>
                        <h4 className='blog-heading'>
                            Achieving HIPAA Compliance: Best Practices for Secure <br /> Health Information Handling
                        </h4>
                        <div className='image-container-1'>
                            <img src={Image} alt="" />
                        </div>
                        <p className='content'>
                            Understanding the intricacies of HIPAA compliance is crucial for any healthcare-related organization. Ensuring the privacy and
                            security of patient health information is not only a legal obligation but also a cornerstone of patient trust and the integrity of your
                            practice. This comprehensive guide outlines the steps to achieve and maintain HIPAA compliance, focusing on safeguardin
                            sensitive health information.
                        </p>
                        <p className='content'>
                            Understanding the intricacies of HIPAA compliance is crucial for any healthcare-related organization. Ensuring the privacy and
                            security of patient health information is not only a legal obligation but also a cornerstone of patient trust and the integrity of your
                            practice. This comprehensive guide outlines the steps to achieve and maintain HIPAA compliance, focusing on safeguardin
                            sensitive health information.
                        </p>
                        <h5 className='bit'>
                            Key Takeaways
                        </h5>
                        <div className='image-container-2'>
                            <img src={Image1} alt="" />
                        </div>
                        <ul className='items-list'>
                            <li>
                                The Health Insurance Portability and Accountability Act (HIPAA) mandates national standards to protect patient health information,
                                encompassing privacy, security, and breach notification rules.
                            </li>
                            <li>
                                Compliance requires implementing a combination of technical, administrative, and physical safeguards, alongside
                                regular risk assessments and management of electronic protected health information (e-PHI).
                            </li>
                            <li>
                                Staying HIPAA compliant is a continuous process that involves updating compliance plans, training staff, monitoring systems, and
                                adapting to new technologies such as cloud computing.
                            </li>
                            <li>
                                Staying HIPAA compliant is a continuous process that involves updating compliance plans, training staff, monitoring systems, and
                                adapting to new technologies such as cloud computing.
                            </li>
                        </ul>
                        <h5 className='para-head'>Understanding HIPAA Compliance</h5>
                        <p className='content'>
                            HIPAA compliance is a vital aspect of modern healthcare, ensuring that patient information remains confidential and secure in the
                            digital age. The Health Insurance Portability and Accountability Act (HIPAA) establishes national standards to prevent the
                            unauthorized sharing of health information, thereby protecting patient privacy.
                        </p>
                        <p className='content'>
                            HIPAA affects not only healthcare providers but also insurers and business associates involved in handling patient data. By
                            adhering to these regulations, healthcare entities reinforce the trust of their patients and uphold the integrity of their
                            operations.

                        </p>
                        <div className='image-container-3'>
                            <img src={Image2} alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog
