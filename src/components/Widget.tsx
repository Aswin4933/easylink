import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import officeSupplies from '../../public/heroImages/office-supplies-2.jpg'


const Widget = () => {
    return (
        <div className="relative h-fit py-16 w-full overflow-hidden bg-gray-900">
            {/* Overlay pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-teal-400-/70 to-gray-400/95"></div>

            {/* Background image */}
            {/* <Image
                src={officeSupplies}
                alt="Office supplies background"
                className="absolute inset-0 h-full w-full object-cover"
            >

            </Image> */}
            

            {/* Content container */}
            <div className="relative h-full w-full">
                <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center">
                    {/* Tag line */}
                    <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
                        100% Stationery Product
                    </span>

                    {/* Main heading */}
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                        Open Up To A New
                        <br />
                        Experience.
                    </h1>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <a href='/products' className="group flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all">
                            All Collections
                            <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                        </a>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl"></div>
                </div>
            </div>

            {/* Optional scroll indicator */}
            <div className="mt-8 w-full flex items-center justify-center">
                <div className="h-12 w-6 rounded-full border-2 border-white">
                    <div className="mx-auto mt-2 h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                </div>
            </div>
        </div>
    );
};

export default Widget;