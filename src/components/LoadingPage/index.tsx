import React from 'react';

interface IProps {
    isActive: boolean
}

function LoadingPage(props: IProps) {
    const { isActive } = props;

    return (
        <div className="w-screen flex justify-center items-center fixed h-screen bg-primary" style={{
            top: 0,
            left: 0,
            height: isActive ? "100vh" : "0vh",
            opacity: isActive ? 1 : 0,
            transition: "all 2s",
            zIndex: 999999
        }}>
            <p className="font-secondary text-2xl text-gray-50">WOA Architects</p>
        </div>
    )
}

export default LoadingPage