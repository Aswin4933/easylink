import React from 'react';
import { Check, Users, Package, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import officeInterior from '../../../public/about/office-interior.jpg'
import customerSupport from '../../../public/about/customer-support.png'


const AboutSection = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Customer-Centric Focus",
      description: "Understanding your needs and providing tailored solutions for your office requirements."
    },
    {
      icon: <Package className="h-6 w-6 text-blue-600" />,
      title: "Quality Products",
      description: "Carefully selected inventory ensuring highest standards of durability and functionality."
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: "Complete Solutions",
      description: "One-stop destination for all your office supplies and equipment needs."
    }
  ];

  return (

    <div className="w-full bg-white">
        
      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-20 py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
                Welcome to Easylink Traders
              </div>
              <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
                All-in-One Office Supplies
              </h1>
              <p className="mt-6 text-xl text-blue-600 font-medium">
                From Equipment to Stationery, We've Got You Covered.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Step into a world where your office needs meet innovation and quality. 
                We're your new partner in creating productive and inspiring workspaces.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="text-lg font-bold text-blue-600">Quality First</div>
                  <div className="mt-2 text-sm text-gray-600">Premium Products</div>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="text-lg font-bold text-blue-600">Complete Solution</div>
                  <div className="mt-2 text-sm text-gray-600">One-Stop Shop</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
              src={officeInterior}
              alt="Modern Office Setup"
              className="h-full w-full object-cover">

              </Image>
                
              </div>
              <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-xl bg-blue-600/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-20">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-block rounded-lg bg-blue-50 p-3">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 md:px-20 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold">What Sets Us Apart</h2>
              <p className="mt-6 text-lg text-white/90">
                At Easylink Traders, we begin our journey with a clear mission - to be your 
                comprehensive office solutions provider. Our fresh perspective and dedication 
                to quality make us your ideal partner for all office needs.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Comprehensive Product Range',
                  'Quality-Focused Selection',
                  'Competitive Pricing',
                  'Dedicated Customer Support'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <Image 
                  src={customerSupport}
                  alt="Our Products Display"
                  className="h-full w-full object-cover">
              </Image>
                
              </div>
              <div className="absolute -bottom-6 -left-6 h-48 w-48 rounded-2xl bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mx-auto max-w-7xl px-4 md:px-20 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          Start Your Journey With Us
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Transform your workspace with our comprehensive range of office supplies and equipment.
          Let's create your ideal office environment together.
        </p>
        <a href='/contact' className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700">
          Contact Us Today </a>
      </div>
    </div>
  );
};

export default AboutSection;