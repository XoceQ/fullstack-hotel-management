// src/components/NewsLetter.tsx

'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const NewsLetter = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )

      .then(
        () => {
          setMessageSent(true);
          form.current?.reset();
        },
        (error) => {
          console.error('Email send error:', error);
        }
      );
  };

  return (
    <section className="container mx-auto px-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-primary text-white px-4 rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-24"
      >
        <p className="md:font-semibold text-lg md:text-xl text-center mb-3">
          Explore More About Our Hotel
        </p>
        <h6 className="md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center">
          Sign Up for Our Newsletter
        </h6>

        <div className="flex-col justify-center w-full md:flex-row flex pt-12">
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your email"
            className="bg-[#026057] h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white focus:outline-none"
          />
          <button type="submit" className="btn-tertiary">
            Subscribe
          </button>
        </div>

        {messageSent && (
          <p className="mt-4 text-green-200 text-sm">
            ✅ Newsletter sent! Check your email.
          </p>
        )}
      </form>
    </section>
  );
};

export default NewsLetter;
