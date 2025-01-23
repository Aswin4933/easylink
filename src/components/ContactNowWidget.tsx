import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import office from '../../public/heroImages/asthetic-office-1.png'


const FeatureSection = () => {
    return (
        <div className="w-full bg-white py-16">
            <div className="mx-auto max-w-6xl px-5 md:px-20">
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-16">
                    {/* Image Section */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="overflow-hidden rounded-lg">
                            <Image
                                src={office}
                                alt="Modern office setup"
                                className="h-full w-full object-cover"
                            >

                            </Image>

                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl"></div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
                            All-in-One Office {' '}
                            <span className="text-blue-600">Supplies</span>
                        </h2>

                        <p className="mb-4 text-lg text-gray-600">
                            From Equipment to Stationery, We've Got You Covered.
                        </p>

                        <p className="mb-8 text-lg text-gray-600">
                            From fountain pens to academic or full year diaries, scrapbooks to notebooks -
                            we've got the stationery supplies you've been dreaming of.
                        </p>

                        {/* CTA Button */}
                        <a href='/contact' className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-700">
                            Contact Now
                            <ArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;