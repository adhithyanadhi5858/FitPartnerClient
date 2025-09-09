import { useState } from "react";

export default function WorkoutPlan() {
  const [form, setForm] = useState({
    experience: "beginner",
    goal: "muscle gain",
    daysPerWeek: 4,
  });

  const [workoutPlan, setWorkoutPlan] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 later connect with backend API
    setWorkoutPlan([
      { day: "Day 1: Chest & Triceps", exercises: ["Bench Press", "Dumbbell Flys", "Tricep Dips"] },
      { day: "Day 2: Back & Biceps", exercises: ["Pull-Ups", "Barbell Rows", "Bicep Curls"] },
      { day: "Day 3: Rest" },
      { day: "Day 4: Legs & Shoulders", exercises: ["Squats", "Lunges", "Shoulder Press"] },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-extrabold text-primary mb-6">Generate Workout Plan</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-black/40 border text-primary border-gray-700 rounded-2xl p-8 shadow-lg w-full max-w-lg space-y-6"
      >
        <div>
          <label className="label">Experience Level</label>
          <select
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label className="label">Goal</label>
          <select
            name="goal"
            value={form.goal}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="muscle gain">Muscle Gain</option>
            <option value="fat loss">Fat Loss</option>
            <option value="strength">Strength</option>
          </select>
        </div>

        <div>
          <label className="label">Days Per Week</label>
          <input
            type="number"
            name="daysPerWeek"
            value={form.daysPerWeek}
            onChange={handleChange}
            min="3"
            max="7"
            className="input input-bordered w-full"
          />
        </div>

        <button className="btn btn-primary w-full">Generate Plan</button>
      </form>

      {/* Result */}
      {workoutPlan && (
        <div className="mt-10 bg-black/50 p-8 rounded-xl w-full max-w-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Your Workout Plan</h2>
          {workoutPlan.map((day, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">{day.day}</h3>
              {day.exercises ? (
                <ul className="list-disc list-inside text-gray-300">
                  {day.exercises.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">Rest or Active Recovery</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
