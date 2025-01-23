"use client"
import React, { useState, useMemo } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import products from '@/lib/products';

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Get unique categories
    const categories = ['All', ...new Set(products.map(product => product.category))];

    // Filter products based on category and search
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [products, selectedCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 md:px-20">
                    <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
                            <p className="mt-2 text-gray-600">
                                Discover our wide range of office essentials
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-full border border-gray-300 bg-white py-2 pl-4 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filter - Mobile */}
            <div className="border-b bg-white p-4 md:hidden">
                <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex w-full items-center justify-between rounded-lg border bg-white px-4 py-2 text-sm"
                >
                    <span className='text-black'>{selectedCategory}</span>
                    <ChevronDown color='black' className={`h-5 w-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                {isFilterOpen && (
                    <div className="absolute left-0 right-0 z-20 mt-2 bg-white shadow-lg">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setIsFilterOpen(false);
                                }}
                                className={`w-full px-4 py-2 text-left text-black text-sm hover:bg-gray-50 ${selectedCategory === category ? 'bg-blue-50 text-blue-600' : ''
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-8 md:px-20">
                <div className="grid gap-8 md:grid-cols-12">
                    {/* Category Filter - Desktop */}
                    <div className="hidden md:col-span-3 md:block">
                        <div className="sticky top-8 space-y-4 rounded-lg bg-white p-6 shadow-sm">
                            <h2 className="font-semibold text-gray-900">Categories</h2>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-gray-50 ${selectedCategory === category
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-600'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="md:col-span-9">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="group relative h-[320px] overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                                >
                                    {/* Product Images */}
                                    <div className="relative h-full w-full">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition-opacity duration-500 ease-out group-hover:opacity-0"
                                        />
                                        <img
                                            src={product.hoverImage}
                                            alt={`${product.name} alternate view`}
                                            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                                        />

                                        {/* Dark Overlay for Text Visibility */}
                                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent">
                                            <div className="absolute inset-x-0 bottom-0 p-4 space-y-2">
                                                <h3 className="text-base font-medium text-white line-clamp-1">
                                                    {product.name}
                                                </h3>
                                                <button className="w-full rounded-lg bg-white py-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;