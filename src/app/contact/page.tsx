import React from 'react';
import { Mail, Phone, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 md:px-20 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
              Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mx-auto max-w-7xl px-4 md:px-20 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Card - Email */}
          <div className="rounded-xl bg-gray-50 p-8 text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Email Us</h3>
            <p className="mb-4 text-sm text-gray-600">Drop us a line anytime</p>
            <a href="mailto:info@easylinktraders.com" className="text-blue-600 hover:text-blue-700">
              info@easylinktraders.com
            </a>
          </div>

          {/* Contact Card - Phone */}
          <div className="rounded-xl bg-gray-50 p-8 text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Call Us</h3>
            <p className="mb-4 text-sm text-gray-600">Mon-Fri from 9am to 6pm</p>
            <div className="space-y-2">
              <a href="tel:+971565825477" className="block text-blue-600 hover:text-blue-700">
                +971 56 582 5477
              </a>
              <a href="tel:+971542459263" className="block text-blue-600 hover:text-blue-700">
                +971 54 245 9263
              </a>
            </div>
          </div>

          {/* Contact Card - Working Hours */}
          <div className="rounded-xl bg-gray-50 p-8 text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Working Hours</h3>
            <p className="mb-4 text-sm text-gray-600">We're here for you</p>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-20 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form Header Section */}
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Fill out the form and our team will get back to you shortly.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>Quick response time</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>24/7 support</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>Direct line communication</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3">
              <form className="space-y-6 rounded-2xl bg-white p-8 shadow-sm">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;