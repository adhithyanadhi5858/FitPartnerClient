import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import HeaderPublic from '../Components/HeaderPublic'

function UserLayout() {
    return (
        <div>

            {/* Header */}
            <Header/>

            {/* Page Content */}
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-grey-800 to-gray-900 text-white">
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default UserLayout
