import { Outlet } from 'react-router-dom'

function UserProtection() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-grey-800 to-gray-900 text-white'>
      <Outlet/>
    </div>
  )
}

export default UserProtection
