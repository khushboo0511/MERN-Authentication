import React from 'react';
import { useState } from 'react';
import axios from 'axios'

function Login() {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = (e) => {
        e.preventDefault();
        axios.get('/')
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl mb-4 font-semibold">Login</h2>
                <form onSubmit={loginUser}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input type="text" placeholder="Enter your email..." className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input type="password" placeholder="Enter your password..." className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
