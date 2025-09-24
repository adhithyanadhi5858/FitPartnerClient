import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

function WorkoutDetails() {
  const location = useLocation()
  const navigate = useNavigate()

  const plan = location.state?.plan

  if (!plan) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-gray-900">
        <p>No workout plan found. Please generate one first.</p>
        <button onClick={() => navigate("/workout")} className="btn btn-primary ml-4">Go Back</button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-6">Your Workout Plan</h1>
        <button
          onClick={() => navigate("/user/workout")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg shadow-md"
        >
          Back
        </button>
      </div>
      <div className="space-y-6">
        {plan.days.map((day, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{day.day}</h2>
            <ul className="space-y-2">
              {day.exercises.map((ex, idx) => (
                <li key={idx} className="border-b border-gray-700 pb-2">
                  <span className="font-semibold">{ex.name}</span> — {ex.sets} sets × {ex.reps} reps
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkoutDetails
