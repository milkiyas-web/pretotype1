"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

import tshirt from "./images/tshirt.png";
const products = [
    { name: "Quirky Mug", price: 19.99, image: img3.src, description: "Start your day with a smile using our uniquely designed mug." },
    { name: "Digital games", price: 29.99, image: img2.src, description: "Fun and creative digital games" },
    { name: "Board games", price: 49.99, image: img1.src, description: "New board games" },
    { name: "Merch", price: 49.99, image: tshirt.src, description: "T-Shirts" },

]

export default function PreOrderPage() {
    const [currentProduct, setCurrentProduct] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentProduct((prev) => (prev + 1) % products.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <header className="w-full bg-yellow-50 shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                        <h1 className="text-2xl font-bold text-yellow-600">QuirkyCo</h1>
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Home</a></li>
                            <li><a href="#" className="text-yellow-600 hover:text-yellow-800">About</a></li>
                            <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="flex-grow container mx-auto p-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-yellow-600 mb-2">Pre-order our latest quirky product!</h2>
                    <p className="text-xl text-yellow-500">Be the first to own our unique creations</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="bg-yellow-50 rounded-lg shadow-xl overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentProduct}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="p-6"
                            >
                                <h3 className="text-3xl font-bold text-yellow-700 mb-2">{products[currentProduct].name}</h3>
                                <p className="text-xl text-yellow-600 mb-4">Coming soon. Pre-order now.</p>
                                <img
                                    src={products[currentProduct].image}
                                    alt={products[currentProduct].name}
                                    className="w-full h-64 object-cover mb-4 rounded-lg"
                                />
                                <p className="text-gray-600 mb-4">{products[currentProduct].description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="bg-yellow-50 rounded-lg shadow-xl overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-yellow-700 mb-4">Pre-order Form</h3>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="name" className="text-yellow-700">Full Name</Label>
                                    <Input id="name" placeholder="John Doe" className="border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500" />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-yellow-700">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500" />
                                </div>
                                {/* <div>
                                    <Label htmlFor="card" className="text-yellow-700">Card Details</Label>
                                    <div className="relative">
                                        <Input id="card" placeholder="Card Number MM/YY CVC" className="pl-10 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500" />
                                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400" size={16} />
                                    </div>
                                </div> */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="size" className="text-yellow-700">Size</Label>
                                        <Select>
                                            <SelectTrigger id="size" className="border-yellow-300 focus:ring-yellow-500">
                                                <SelectValue placeholder="Select size" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="small">Small</SelectItem>
                                                <SelectItem value="medium">Medium</SelectItem>
                                                <SelectItem value="large">Large</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label htmlFor="color" className="text-yellow-700">Color</Label>
                                        <Select>
                                            <SelectTrigger id="color" className="border-yellow-300 focus:ring-yellow-500">
                                                <SelectValue placeholder="Select color" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="yellow">Yellow</SelectItem>
                                                <SelectItem value="gold">Gold</SelectItem>
                                                <SelectItem value="amber">Amber</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                                    Pre-order
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-yellow-100 text-yellow-800 py-8 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2023 QuirkyCo. All rights reserved.</p>
                    <p className="mt-2">Note: This is a pre-order. Your card will not be charged until the product ships.</p>
                </div>
            </footer>
        </div>
    )
}