import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import Header from './Header';
import Footer from './Footer';

const Feedback = () => {
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
            Swal.fire({
                title: 'Thank you!',
                text: 'Thanks for your message!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            nameRef.current.value = '';
            emailRef.current.value = '';
            messageRef.current.value = '';
        }
    };

    return (
        <>
        <Header></Header>
            <div className='pt-32 pb-10 flex justify-center items-center' style={{backgroundColor: '#e3b577'}}>
                <div>
                    <h2 className='text-4xl mb-2' style={{ color: '#331a15', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Send Your Valuable Feedback</h2>

                    <form onSubmit={handleFormSubmit} data-aos="fade-left" data-aos-duration="1500">
                        <input ref={nameRef} className='px-3 py-2 mb-3 w-full border mt-6 rounded-md' type="text" name="name" placeholder='Name' required /> <br />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                        <input ref={emailRef} className='px-3 py-2 mb-3 w-full border mt-6 rounded-md' type="email" name="email" placeholder='Email' required /> <br />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                        <input ref={messageRef} className='px-3 py-2 mb-3 w-full h-32 border mt-6 rounded-md' type="text" name="message" placeholder='Message' required /> <br />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                        <button className='btn rounded-full border-black mt-4' style={{ fontFamily: 'Sour Gummy, sans-serif' }} type="submit" disabled={state.submitting}>Send Message</button>

                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Feedback;