"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flower } from "lucide-react"
import Link from 'next/link'

export default function Component() {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const targetDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).getTime()

        const interval = setInterval(() => {
            const now = new Date().getTime()
            const difference = targetDate - now

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)

            setTimeLeft({ days, hours, minutes, seconds })

            if (difference < 0) {
                clearInterval(interval)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-yellow-100 to-green-100">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <Flower className="h-6 w-6 text-green-600" />
                    <span className="sr-only">Dandilion Fest</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#register">
                        Register
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#feedback">
                        Feedback
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Welcome to Dandilion Fest
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Join us for an exciting festival of game demos, tournaments, workshops, and live entertainment,
                                    all hosted by our lovable mascot, Dandy!
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Countdown to Dandilion Fest</CardTitle>
                                        <CardDescription>Mark your calendars for the gaming event of the year!</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-4 gap-4 text-center">
                                            <div>
                                                <div className="text-2xl font-bold">{timeLeft.days}</div>
                                                <div className="text-xs text-gray-500">Days</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                                                <div className="text-xs text-gray-500">Hours</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                                                <div className="text-xs text-gray-500">Minutes</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                                                <div className="text-xs text-gray-500">Seconds</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Dandilion Fest</h2>
                        <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                            Dandilion Fest is a celebration of gaming culture, bringing together enthusiasts, developers, and
                            casual players for an unforgettable experience. Featuring game demos, exciting tournaments, insightful
                            workshops, and live entertainment, theres something for everyone at our festival.
                        </p>
                        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Game Demos</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Get hands-on experience with the latest and upcoming games from indie developers and major studios.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Tournaments</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Compete in thrilling tournaments across various genres and win exciting prizes!</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Workshops</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Learn from industry experts in our interactive workshops covering game design, development, and more.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section id="register" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pre-Register Now</h2>
                        <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                            Be the first to know about Dandilion Fest updates and secure your spot at the event!
                        </p>
                        <form className="mt-8 space-y-4">
                            <Input placeholder="Your Name" />
                            <Input type="email" placeholder="Your Email" />
                            <Button type="submit" className="w-full">Sign Up for Updates</Button>
                        </form>
                    </div>
                </section>
                <section id="feedback" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">We Want Your Feedback</h2>
                        <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                            Help us make Dandilion Fest the best it can be! Let us know what excites you the most.
                        </p>
                        <form className="mt-8 space-y-4">
                            <RadioGroup defaultValue="option-one">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">Game Demos</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">Tournaments</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-three" id="option-three" />
                                    <Label htmlFor="option-three">Workshops</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-four" id="option-four" />
                                    <Label htmlFor="option-four">Live Entertainment</Label>
                                </div>
                            </RadioGroup>
                            <Textarea placeholder="What else would you like to see at Dandilion Fest?" />
                            <Button type="submit">Submit Feedback</Button>
                        </form>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Dandilion Fest. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}