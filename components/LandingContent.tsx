'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
    {
        name: 'Kevin',
        avatar: 'K',
        title: 'Software Engineer',
        description: "This is the best application I've used!"
    },
    {
        name: 'Sarah',
        avatar: 'S',
        title: 'Web Developer',
        description: "Cannot believe how easy it is to use!"
    },
    {
        name: 'James',
        avatar: 'J',
        title: 'CEO',
        description: "I've been able to generate so much content for my business!"
    },
    {
        name: 'Lily',
        avatar: 'L',
        title: 'Designer',
        description: "Wow! This is amazing!"
    },
]

const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default LandingContent