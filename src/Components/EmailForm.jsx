"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {

    const form = useRef();
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0e90d6i', 'template_jwz9dn7', form.current, {
                publicKey: '6alLN0QALN9OveoT6',
            }).then(() => {
                console.log('Email sent successfully!');
                form.current.reset();
                setIsSuccess(true)

                setTimeout(() => {
                    setIsSuccess(false);
                }, 4000);

            },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsError(true)
                    setTimeout(() => {
                        setIsError(false)
                    }, 4000)
                },
            );
    };

    return (



        <form

            ref={form} onSubmit={sendEmail} className=' rounded-lg sm:p-4 p-1'>


            <div className="mb-2">
                <label
                    htmlFor="name"
                    className="mb-3 block text-base font-bold text-redish"
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Eneter your Name"
                    className="input-field"
                />
            </div>

            <div className="mb-2">
                <label
                    htmlFor="email"
                    className="mb-3 block text-base font-bold text-redish"
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="input-field"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="subject"
                    className="mb-3 block text-base font-bold text-redish"
                >
                    Subject
                </label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter subject"
                    className="input-field"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="message"
                    className="mb-3 block text-base font-bold text-redish"
                >
                    Message
                </label>
                <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="input-field resize-none"
                ></textarea>
            </div>
            <div>
                <button type='submit'
                    className="btn-redish w-full rounded-lg hover:opacity-70"
                >
                    Submit
                </button>
            </div>

            {isSuccess && (
                <p className="text-[#17c964] mt-2">
                    Email Submitted Successfully! </p>
            )}

            {isError && (
                <p className="text-[#f31260] mt-2">
                    Something went wrong. Please try later..</p>
            )}


        </form>




    )
}

export default EmailForm