import { useState, useEffect } from "react"
import Header from "../Components/Header"
import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import HeaderPublic from "../Components/HeaderPublic"
import { AxiosInstance } from "../Config/AxiosInstance"
import { useDispatch, useSelector } from "react-redux"
import { SaveUser } from "../src/features/Users/UserSlice"

function UserLayout() {
    const dispatch = useDispatch()
    const { isUserAuth } = useSelector((state) => state.user) // ✅ fixed
    const [loading, setLoading] = useState(true)

    const fetchProfile = async () => {
        try {
            const res = await AxiosInstance.get("user/profile")

            if (res.data?.UserData) {
                dispatch(SaveUser(res.data.UserData))
            }
        } catch (error) {
            console.log("fetch profile error===", error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
                <p className="text-xl font-semibold">Loading...</p>
            </div>
        )
    }

    return (
        <div>
            {/* Header */}
            {isUserAuth ? <Header /> : <HeaderPublic />}

            {/* Page Content */}
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default UserLayout
