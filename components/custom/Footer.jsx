import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full text-white py-12">
      <div className="absolute inset-0 -z-10">
        <Image
          src={"/footerPattern.png"}
          alt="Footer Background"
          fill
          className="object-bottom"
        />
      </div>
      <div className="container mx-auto flex flex-wrap justify-between px-6 lg:px-16">
        {/* Quick Links */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="mb-4">
            <Image
              src={"/logo.jpg"}
              alt="Assignment Help Logo"
              width={100}
              height={50}
              className="rounded-xl"
            />
          </div>
          <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-lg hover:font-bold transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg hover:font-bold transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-lg hover:font-bold transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg hover:font-bold transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/4 mt-5 mb-8 md:mb-0">
          <h4 className="text-2xl font-bold mb-4">Contact Information</h4>
          <ul className="space-y-2 text-lg">
            <li>
              <span className="font-bold">Email:</span>{" "}
              shashupreethims@gmail.com
            </li>
            <li>
              <span className="font-bold">Phone:</span> +91-7483288142
            </li>
            <li>
              <span className="font-bold">Address:</span> Bangalore
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/3">
          <h4 className="text-2xl font-bold mb-4">Newsletter</h4>
          <p className="text-lg mb-4">
            You can trust us. We only send promo offers.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="name@example.com"
              className="w-2/3 p-2 text-black rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-1/3 bg-yellow-600 text-white font-bold p-2 rounded-md hover:bg-yellow-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
