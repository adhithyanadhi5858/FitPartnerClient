import { useState } from 'react'
import { AxiosInstance } from '../../Config/AxiosInstance'
import { useNavigate } from 'react-router-dom'

function DietPlan() {
  const [age, setAge] = useState()
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [goal, setGoal] = useState()
  const [activity, setActivity] = useState()

  const navigate = useNavigate()


  const HandleSubmit = (e) => {
    e.preventDefault()
    try {
      AxiosInstance.post("/ai/diet", {
        age,
        weight,
        height,
        goal,
        activity
      })
        .then(res => {
          console.log("diet plan===", res.data)
          navigate("/user/diet-details", { state: { plan: res.data.dietPlanObject } })
        })
        .catch(err => {
          console.log("Diet plan error===", err.message)
        })

    } catch (error) {
      console.log("Workout Plan error===", error.message)
    }
  }


  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center py-12 px-6'>
      <h1 className='text-4xl font-bold '>Your Diet Plan</h1>
      <p className='text-gray-400 mt-2 text-center'>Get AI powered workout plan based on your body type and fitness goals</p>
      <form onSubmit={HandleSubmit} className='g-black/40 border mt-8 text-primary border-gray-700 rounded-2xl p-8 shadow-lg w-full max-w-lg space-y-6'>
        <div>
          <label className="label text-white">Age</label>
          <input
            type="number"
            name="age"
            className="input input-bordered w-full"
            required
            value={age || ""}                 // bind state
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label className="label text-white">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            className="input input-bordered w-full"
            required
            value={weight || ""}              // bind state
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div>
          <label className="label text-white">Height (cm)</label>
          <input
            type="number"
            name="height"
            className="input input-bordered w-full"
            required
            value={height || ""}              // bind state
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div>
          <label className="label text-white">Goal</label>

          <select
            name="goal"
            className="select select-bordered w-full"
            required
            value={goal || ""}                // bind state
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="" disabled>-- Select Goal --</option>
            <option value="muscle gain">Muscle Gain</option>
            <option value="fat loss">Fat Loss</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        <div>
          <label className="label text-white">Activity Level</label>

          <select
            name="activity"
            className="select select-bordered w-full"
            required
            value={activity || ""}            // bind state
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="" disabled>-- Select Activity --</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
        <button className="btn btn-primary w-full">Generate Plan</button>

      </form>
    </div>
  )
}

export default DietPlan
