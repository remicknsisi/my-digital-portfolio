import React from "react";

export default function About() {
    return (
        <div className="px-20 py-20">
            <h1 className="text-3xl md:text-5xl mb-4 font-medium text-center">
                About Me
            </h1>
            <div className="items-center p-5">
                <div className="flex flex-wrap">
                    <p className="pt-6 pb-5 text-lg md:text-xl">
                        Hey, I'm Sisi (sounds like see-see). I'm a certified Software Engineer with a passion for both technology and creativity.
                    </p>
                    <div className="flex flex-wrap md:flex-row items-center pt-5 pb-5">
                        <p className="md:pr-5 text-lg md:text-xl md:w-1/2 lg:w-2/3">
                            My journey into the tech world has been a unique blend... starting by dipping my toes in the water at a creative brand agency (SMAKK Studios) where as an account coordinator I got an inside look at the creative marketing funnel. I was dazzled by the work of UX designers and web developers together to build or re-build beautiful brands from scratch. I later transitioned into my current role in Ad Operations at Horizon Media. In this role, I've learned to love working more technically - earning certifications in Google Campaign Manager, Double Verify, and Innovid. But I wanted more of a challenge.
                        </p>
                        <div className="p-2 md:w-1/2 lg:w-1/3">
                            <img
                                className="max-h-96 border-8"
                                alt="Sisi standing in front of the Hogwarts Express at Universal Studios"
                                src="./HogwartsExpress.png"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:flex-row items-center pt-5 pb-5">
                        <p className="pt-6 pb-5 text-lg md:text-xl">
                            In August of 2023, I achieved certification in Ruby, Ruby on Rails, React and JavaScript through the intensive Flatiron School Software Engineering bootcamp program, conquering a challenging curriculum in under a year. I'm actively looking for professional opportunities to dive into the tech world and put these skills to the test. My ideal role would exist in the periphery of designers, but let me continue to hone my coding skills by supporting them as a developer.
                        </p>
                        <div className="p-2 mx-auto">
                            <img
                                className="max-h-96 border-8"
                                alt="Sisi's Flatiron School Softare Engineering Bootcamp Certificate"
                                src="./Certificate.png"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:flex-row items-center pt-5 pb-5">
                        <div className="p-2 md:w-1/2">
                            <img
                                className="max-h-96 border-8"
                                alt="Sisi giving her valedictorian speech at GHS graduation 2016"
                                src="./Graduation.png"
                            />
                        </div>
                        <p className="md:pl-5 text-lg md:text-xl md:w-1/2">
                            I've also always been committed to giving my best effort in my academic pursuits. In high school, I had the honor of being the valedictorian, which I attribute to my dedication to learning and my genuine love for education. During my time at Boston College, I maintained a solid 3.7 GPA, which I'm proud of because it reflects my consistent commitment to excellence in my studies. Working for a company that champions ongoing education would be a dream!
                        </p>
                    </div>
                    <p className="pt-6 pb-5 text-lg md:text-xl">
                        What sets me apart is my ability to learn quickly and adapt. I made the transition into Ad Operations from creative branding with no prior experience, quickly advancing to a senior-level role in just over a year. Precision and attention to detail have always been my forte, as I consistently conduct thorough quality assurance checks on self-generated and team-produced content.
                    </p>
                    <div className="flex flex-wrap md:flex-row items-center">
                        <p className="pr-5 text-lg md:text-xl md:w-1/2 lg:w-2/3">
                            Beyond the world of work, I'm a part-time dog sitter on the Rover app, proudly holding the title of a "star sitter" 🐶. Recently, I actually became the proud mother of a Pomeranian puppy! His name is Cowboy. When I'm not coding or caring for furry friends, you'll find me on my yoga mat or indulging in the occasional arts & crafts project. I thrive on new challenges and am always eager to use my experiences and determined spirit to help others. Feel free to reach out to me—I'm always up for a good conversation!

                        </p>
                        <div className="p-2 md:w-1/2 lg:w-1/3">
                            <img
                                className="max-h-96 border-8"
                                alt="Cowboy the Pomeranian"
                                src="./Cowboy.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}