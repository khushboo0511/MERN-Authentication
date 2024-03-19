import React from 'react';

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-500 text-white py-20 px-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
                    <p className="text-lg mb-8">Discover amazing things with us.</p>
                    <button className="bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">Get Started</button>
                </div>
            </section>

            {/* Featured Content Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Featured Content</h2>
                    {/* Add your featured content here */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Example card */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">Featured Item</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        {/* Add more cards as needed */}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-blue-500 text-white py-20 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">About Us</h2>
                    <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta odio ac erat suscipit, in accumsan elit viverra.</p>
                    <button className="bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">Learn More</button>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                    <p className="text-lg mb-8">Have questions? Feel free to reach out to us.</p>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">Contact</button>
                </div>
            </section>
        </div>
    );
}

export default Home;
