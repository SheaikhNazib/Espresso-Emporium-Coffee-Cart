import React, { useEffect, useRef } from 'react';
import footer_bg from '../../images/more/13.jpg';
import cup from '../../images/more/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm, ValidationError } from '@formspree/react';

export default function Footer() {
    useEffect(() => {
        AOS.init();
    }, []);

    const [state, handleSubmit] = useForm("xjkykbdj");
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await handleSubmit(event);
        if (state.succeeded) {
            alert('Thanks for your message!');
            nameRef.current.value = '';
            emailRef.current.value = '';
            messageRef.current.value = '';
        }
    };

    return (
        <div className='pt-32 flex justify-around items-center ' style={{
            backgroundImage: `url(${footer_bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '450px'
        }}>
            <div>
                <img src={cup} style={{ width: '75px', height: '90px' }} alt="" />
                <p className='text-2xl mb-2' style={{ color: '#331a15', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Espresso Emporium</p>
                <p>Always ready to be your friend. Come & Contact with us to share your <br />  memorable moments, to share with your best companion.</p>
                <div className='flex gap-3 my-3' data-aos="fade-right" data-aos-duration="1500">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </div>

                <p className='text-2xl my-2' style={{ color: '#331a15', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Get In Touch</p>

                <div className='flex flex-col gap-3 mt-5' data-aos="fade-right" data-aos-duration="1500">
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faPhone} size="lg" />
                        <p className='ms-2'>+88 01770207810</p>
                    </div>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        <p className='ms-2'>sheaikhnazib9@gmail.com</p>
                    </div>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faLocationDot} size="lg" />
                        <p className='ms-2'>Sarulia, Demra, Dhaka</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='text-2xl mb-2' style={{ color: '#331a15', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Connect With Us</h2>
                <form onSubmit={handleFormSubmit} data-aos="fade-left" data-aos-duration="1500">
                    <input ref={nameRef} className='px-3 py-2 mb-3' type="text" name="name" placeholder='Name' required /> <br />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    <input ref={emailRef} className='px-3 py-2 mb-3' type="email" name="email" placeholder='Email' required /> <br />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <input ref={messageRef} className='px-3 py-2 mb-3' type="text" name="message" placeholder='Message' required /> <br />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <button className='btn rounded-full border-black' style={{ fontFamily: 'Sour Gummy, sans-serif' }} type="submit" disabled={state.submitting}>Send Message</button>
                </form>
            </div>
        </div>
    );
};









// import React, { useEffect } from 'react';
// import footer_bg from '../../images/more/13.jpg';
// import cup from '../../images/more/logo1.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function Footer() {
//     useEffect(() => {
//         AOS.init();
//     }, []);

//     return (
//         <div className='mt-32 flex justify-around items-center ' style={{
//             backgroundImage: `url(${footer_bg})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '450px'
//         }}>
//             <div>
//                 <img src={cup} style={{ width: '75px', height: '90px' }} alt="" />
//                 <p className='text-2xl mb-2' style={{ color: '#331a15', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Espresso Emporium</p>
//                 <p>Always ready to be your friend. Come & Contact with us to share your <br />  memorable moments, to share with your best companion.</p>
//                 <div className='flex gap-3 my-3' data-aos="fade-right" data-aos-duration="1500">
//                     <FontAwesomeIcon icon={faFacebook} size="2x" />
//                     <FontAwesomeIcon icon={faTwitter} size="2x" />
//                     <FontAwesomeIcon icon={faInstagram} size="2x" />
//                     <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
//                 </div>

//                 <p className='text-2xl my-2' style={{ color: '#331a15', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Get In Touch</p>

//                 <div className='flex flex-col gap-3 mt-5' data-aos="fade-right" data-aos-duration="1500">
//                     <div className='flex items-center'>
//                         <FontAwesomeIcon icon={faPhone} size="lg" />
//                         <p className='ms-2'>+88 01770207810</p>
//                     </div>
//                     <div className='flex items-center'>
//                         <FontAwesomeIcon icon={faEnvelope} size="lg" />
//                         <p className='ms-2'>sheaikhnazib9@gmail.com</p>
//                     </div>
//                     <div className='flex items-center'>
//                         <FontAwesomeIcon icon={faLocationDot} size="lg" />
//                         <p className='ms-2'>Sarulia, Demra, Dhaka</p>
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 <h2 className='text-2xl mb-2' style={{ color: '#331a15', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Connect With Us</h2>
//                 <input data-aos="fade-left" data-aos-duration="1500" className='px-3 py-2 mb-3' type="text" name="name" placeholder='Name' id="" /> <br />
//                 <input data-aos="fade-left" data-aos-duration="1500" className='px-3 py-2 mb-3' type="email" name="email" placeholder='Email' id="" /> <br />
//                 <input data-aos="fade-left" data-aos-duration="1500" className='px-3 py-2 mb-3' type="text" name="message" placeholder='Message' id="" /> <br />
//                 <button className='btn rounded-full border-black' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>Send Message</button>
//             </div>
//         </div>
//     );
// };