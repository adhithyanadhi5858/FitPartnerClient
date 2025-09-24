import React, { useState } from 'react'
import { AxiosInstance } from '../../Config/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

function WorkoutPlan() {
  const [goal, setGoal] = useState("")
  const [daysPerWeek, setDaysPerWeek] = useState("")
  const [activity, setActivity] = useState("")
  const [equipments, setEquipments] = useState("")
  const navigate = useNavigate()

  const HandleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await AxiosInstance.post("/ai/workout", {
        goal,
        daysPerWeek,
        experience: activity,
        availableEquipment: equipments,
      })
      toast('Creating the plan!', {
        icon: '👏',
      });
        navigate("/user/workout-details", { state: { plan: res.data.workoutPlanObject } })
      // Reset fields
      setGoal("")
      setDaysPerWeek("")
      setActivity("")
      setEquipments("")
    } catch (error) {
      console.log("Workout Plan error ===", error.message)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center py-12 px-6'>
      <Toaster position="top-center"
        reverseOrder={false} />
      <h1 className='text-4xl font-bold '>Your Workout Plan</h1>
      <p className='text-gray-400 mt-2 text-center'>Get AI powered workout plan based on your body type and fitness goals</p>

      <form onSubmit={HandleSubmit} className='bg-black/40 border mt-8 text-primary border-gray-700 rounded-2xl p-8 shadow-lg w-full max-w-lg space-y-6'>

        {/* Goal */}
        <div>
          <label className="label text-white">Goal</label>
          <select
            name="goal"
            className="select select-bordered w-full"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          >
            <option value="" disabled>Select your goal</option>
            <option value="muscle gain">Muscle Gain</option>
            <option value="fat loss">Fat Loss</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        {/* Days Per Week */}
        <div>
          <label className="label text-white">Days Per Week</label>
          <input
            type="number"
            name="daysPerWeek"
            min="3"
            max="7"
            className="input input-bordered w-full"
            value={daysPerWeek}
            onChange={(e) => setDaysPerWeek(e.target.value)}
            required
          />
        </div>

        {/* Experience */}
        <div>
          <label className="label text-white">Experience</label>
          <select
            name="activity"
            className="select select-bordered w-full"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
          >
            <option value="" disabled>Select your experience</option>
            <option value="low">Less Than 6 months</option>
            <option value="moderate">6 months - 1 year</option>
            <option value="high">More than 1 year</option>
          </select>
        </div>

        {/* Equipments */}
        <div>
          <label className="label text-white">Available Equipments</label>
          <input
            type="text"
            name="equipments"
            placeholder='e.g. dumbbells, bench,gym membership'
            className="input input-bordered w-full"
            value={equipments}
            onChange={(e) => setEquipments(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">Generate Plan</button>
      </form>
    </div>
  )
}

export default WorkoutPlan
