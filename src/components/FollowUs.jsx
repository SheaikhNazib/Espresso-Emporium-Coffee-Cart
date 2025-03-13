import React, { useEffect } from 'react';
import cup1 from '../../images/cups/Rectangle 9.png';
import cup2 from '../../images/cups/Rectangle 10.png';
import cup3 from '../../images/cups/Rectangle 11.png';
import cup4 from '../../images/cups/Rectangle 12.png';
import cup5 from '../../images/cups/Rectangle 13.png';
import cup6 from '../../images/cups/Rectangle 14.png';
import cup7 from '../../images/cups/Rectangle 15.png';
import cup8 from '../../images/cups/Rectangle 16.png';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FollowUs () {
     useEffect(() => {
            AOS.init();
        }, []);
    return (
        <div>
            <div className='mt-16'>
                <p className='text-center font-thin text-lg' data-aos="fade-down" data-aos-duration="1500">Follow Us Now</p>
                <h2 className='text-center text-2xl font-semibold' data-aos="fade-down" data-aos-duration="1500" style={{color: '#331a15', fontFamily: 'Sour Gummy, sans-serif'}}>Follow on Instagram</h2>
            </div>
            <div className='flex gap-3 my-9' data-aos="fade-left" data-aos-duration="1500">
                <img className='img-hover' src={cup1} alt="" />
                <img className='img-hover' src={cup2} alt="" />
                <img className='img-hover' src={cup3} alt="" />
                <img className='img-hover' src={cup4} alt="" />
            </div>
            <div className='flex gap-3' data-aos="fade-right" data-aos-duration="1500">
                <img className='img-hover' src={cup5} alt="" />
                <img className='img-hover' src={cup6} alt="" />
                <img className='img-hover' src={cup7} alt="" />
                <img className='img-hover' src={cup8} alt="" />
            </div>
        </div>
    );
};

