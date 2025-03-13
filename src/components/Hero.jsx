import React from 'react';
import hero_bg from '../../images/more/3.png';
import icon1 from '../../images/icons/1.png';
import icon2 from '../../images/icons/2.png';
import icon3 from '../../images/icons/3.png';
import icon4 from '../../images/icons/4.png';

const Hero = () => {
    return (
        <div>
            <div 
                className="flex items-center" 
                style={{ 
                    backgroundImage: `url(${hero_bg})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    height: '600px' 
                }}
            >
                <div className="" style={{ marginInlineStart: '35rem' }}>
                    <p className='text-3xl text-white' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>Would you like a Cup of Delicious Coffee?</p>
                    
                    <p className='text-xs my-3 text-zinc-400'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                    <button className='btn-hover hover:text-white text-black px-3 py-2 ' style={{ fontFamily: 'Sour Gummy, sans-serif', background: '#e3b577' }}>Learn More</button>
                </div>
            </div>

            <div className='flex gap-6 px-28 py-10' style={{backgroundColor: '#eceae3'}}>
                <div>
                    <img src={icon1} alt="" />
                    <p className='py-1' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>Awesome Aroma</p>
                    <p className='text-xs' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={icon2} alt="" />
                    <p className='py-1' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>High Quality</p>
                    <p className='text-xs' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src={icon3} alt="" />
                    <p className='py-1' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>Pure Grades</p>
                    <p className='text-xs' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img src={icon4} alt="" />
                    <p className='py-1' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>Proper Roasting</p>
                    <p className='text-xs' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;