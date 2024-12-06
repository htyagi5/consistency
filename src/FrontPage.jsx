import React from 'react';
import { useNavigate } from 'react-router-dom';

function FrontPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            {/* Embedded Content */}
            <iframe
                className="w-full h-4/5 bg-transparent"
                src="https://app.endlesstools.io/embed/b14a8efc-3893-4ce0-bc1a-ca2601a1a370"
                title="Embedded Content"
            ></iframe>

            {/* Navigation Button */}
            <button
                className="mt-6 px-6 py-3 bg-slate-600 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md"
                onClick={() => navigate('/startbtn')}
            >
                Let's go -->
            </button>
        </div>
    );
}

export default FrontPage;
