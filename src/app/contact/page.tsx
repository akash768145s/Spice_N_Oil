"use client";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import TextBorder from "@/components/ui/textBorder";
import { useState } from "react";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/footer";
import { Button } from "@/components/ui/moving-border";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = (): void => {
    setIsClick(!isClick)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:office@digenie.in?subject=${encodeURIComponent(
      formData.subject
    )}&body=Hi Digenie,%0A%0AName: ${encodeURIComponent(
      formData.name
    )}. ${encodeURIComponent(
      formData.subject
    )} %0A%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0APhone:${encodeURIComponent(formData.phone)}%0A%0A ${encodeURIComponent(
      formData.message
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Navbar />
      <div className="relative h-60 md:h-80 overflow-hidden">
        <Image
          alt="hero"
          src="/images/Contactus.jpg"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <p className="text-3xl md:text-4xl font-bold text-white">Contact</p>
        </div>
      </div>


      <section id="contact-form" className="xl:px-48 py-24 bg-[#FBF9F9]">
        <div className="w-11/12 lg:w-1/2 mx-auto mb-14 text-center">
          <Text className="text-5xl" variant="h1">
            Contact Us
          </Text>
          <TextBorder />

        </div>
        <div className="mx-5 my-10 p-5 lg:p-14 bg-white shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2">
              <Input
                label="Name"
                type="text"
                placeholder="Your Name"
                id="name"
                name="name"
                onChange={handleChange}
              />
              <Input
                label="Email"
                type="email"
                placeholder="Email Address"
                id="email"
                name="email"
                onChange={handleChange}
              />
              <Input
                label="Subject"
                type="text"
                placeholder="Subject"
                id="subject"
                name="subject"
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="Phone Number"
                id="phone"
                name="phone"
                onChange={handleChange}
              />
              <textarea
                aria-label="Message"
                className="p-4 bg-[#FBF9F9] text-lg h-fit my-3 xl:mx-5 xl:col-span-2"
                placeholder="Type your Message..."
                name="message"
                id="message"
              ></textarea>
            </div>

            <Button className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition duration-300 text-base font-bold">Send Message</Button>
          </form>
        </div>
      </section>
      <div className='bg-light-red'>
        <Footer />
      </div>
    </>
  );
};

export default ContactSection;
