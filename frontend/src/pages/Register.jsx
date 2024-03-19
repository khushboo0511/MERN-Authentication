import axios from 'axios';
import React, { useState } from 'react';

function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerUser = async (e) => {
        e.preventDefault();
        // Add registration logic here
        const {name, email, password} = data
        try {
            const {data} = await axios.post('/register', {
                name, email, password
            })
        } catch (error) {

        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl mb-4 font-semibold">Register</h2>
                <form onSubmit={registerUser}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                        <input type="text" id="name" placeholder="Enter your name..." className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" placeholder="Enter your email..." className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <input type="password" id="password" placeholder="Enter your password..." className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
