import React from 'react';
import Appstore from "./appstore";
import Benifits from "./benifits";
import HowitWorks from "./how-it-works";
import Testinomials from "./testinomials";
import Trustedcomponies from "./trusted-componies";

export default function Maincontent() {
    return (
        <main className="text-primary-700 text-standard font-matter leading-normal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="py-12 md:py-20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="text-center md:text-left">
                            <a href="https://cal.com/blog/v-4-7" className="inline-flex items-center text-sm bg-gray-100 text-gray-800 rounded-full px-3 py-1 mb-4">
                                <span>Cal.com launches v4.7</span>
                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Track Your Job Applications with Ease.
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Never lose track of a job application again. Monitor, organize, and follow up effortlessly with ZapMyJob.
                            </p>
                            <button className="bg-black text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center w-full sm:w-auto">
                                <img src="https://www.datocms-assets.com/77432/1729797489-google.svg" alt="Google" className="w-5 h-5 mr-2" />
                                Sign up with Google
                            </button>
                            <p className="mt-4 text-sm text-gray-500">No credit card required</p>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                {/* Calendar component goes here */}
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold mb-4">Calendar Preview</h2>
                                    <p className="text-gray-600">Interactive calendar component to be implemented here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it Works Section */}
                <HowitWorks />

                {/* Trusted Companies Section */}
                <Trustedcomponies />

                {/* Benefits Section */}
                <Benifits />

                {/* Testimonials Section */}
                <Testinomials />

                {/* App Store Section */}
                <Appstore />

                {/* Wall of Love Section */}
                <section className="py-12 md:py-20 bg-green-700 text-white rounded-xl my-12">
                    <div className="text-center">
                        <span className="inline-block bg-white text-green-700 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                            Wall of love
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">See why our users love Cal.com</h2>
                        <p className="text-xl mb-8">Read the impact we've had from those who matter most - our customers.</p>
                    </div>
                    <div className="senja-embed" data-id="6a0c4b74-527a-4058-bded-8a358821c1a0"></div>
                </section>

                {/* Customers Section */}
                <section className="py-12 bg-orange-600 rounded-xl text-white">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold">Scheduling for companies and employees of</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                        {/* Add customer logos here */}
                        <img src="https://www.datocms-assets.com/77432/1726142372-deel-1.svg" alt="Deel" className="h-8" />
                        <img src="https://www.datocms-assets.com/77432/1726142372-vercel-logo.svg" alt="Vercel" className="h-8" />
                        <img src="https://www.datocms-assets.com/77432/1731350987-mercury.svg" alt="Mercury" className="h-8" />
                        <img src="https://www.datocms-assets.com/77432/1731689014-angellist.svg" alt="AngelList" className="h-8" />
                        <img src="https://www.datocms-assets.com/77432/1731351596-clip-path-group-marketing-site-3-0.svg" alt="Marketing Site" className="h-8" />
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 mt-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-2">
                            <img src="/cal-logo.svg" alt="Cal.com" className="h-8 mb-4" />
                            <p className="text-gray-600 mb-4">Our mission is to connect a billion people by 2031 through calendar scheduling.</p>
                            <div className="flex space-x-4">
                                {/* Add social media icons here */}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Self-hosted</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">SaaS Hosting</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Enterprise</a></li>
                                {/* Add more links */}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Use Cases</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sales</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Marketing</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Customer Support</a></li>
                                {/* Add more links */}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                                {/* Add more links */}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
                        <p>&copy; 2023 Cal.com, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </main>
    );
}

