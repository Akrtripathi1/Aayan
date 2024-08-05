import React from 'react'
import './Workblock.scss'
import image1 from './image/image1.svg'
import image2 from './image/image2.svg'
import image3 from './image/image3.svg'
import image4 from './image/image4.svg'
import image5 from './image/image5.svg'
import image6 from './image/image6.svg'
import image7 from './image/image7.svg'
import image8 from './image/image8.svg'
import image9 from './image/image9.svg'
import image10 from './image/image10.svg'
import image11 from './image/image11.svg'
import image12 from './image/image12.svg'
import image13 from './image/image13.svg'
import image14 from './image/image14.svg'
import image15 from './image/image15.svg'
import image16 from './image/image16.svg'
import image17 from './image/image17.svg'
import image18 from './image/image18.svg'
import image19 from './image/image19.svg'
import image20 from './image/image20.svg'
const workblockData = [
    { image: image1, label: 'All Set' },
    { image: image2, label: 'Branding' },
    { image: image3, label: 'Construction' },
    { image: image19, label: 'Website' },
    { image: image4, label: 'ecommerce' },
    { image: image6, label: 'Entertainment' },
    { image: image7, label: 'Finance' },
    { image: image8, label: 'Fitness' },
    { image: image9, label: 'Foods & Restraunt' },
    { image: image10, label: 'Games' },
    { image: image11, label: 'General' },
    { image: image12, label: 'Healthcare' },
    { image: image13, label: 'Insurance' },
    { image: image14, label: 'Logistics' },
    { image: image15, label: 'Real Estate' },
    { image: image16, label: 'Social Media' },
    { image: image17, label: 'Sports' },
    { image: image18, label: 'Utilities' }
    
];

const Workblock = () => {
    return (
        <div className='workblock'>
            {
                workblockData.map((item, index) => (
                 <div key={index} className='workblock-item'>
                    <img src={item.image} alt="" />
                    <p>{item.label}</p>
                 </div>
             ))
            }
        </div>
    );
};

export default Workblock
