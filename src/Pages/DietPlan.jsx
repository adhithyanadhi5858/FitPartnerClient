import React from 'react'

import { useState } from "react";

export default function DietPlan() {
  const [form, setForm] = useState({
    age: "",
    weight: "",
    height: "",
    goal: "muscle gain",
    activity: "moderate",
  });

  const [dietPlan, setDietPlan] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 later connect to backend API here
    setDietPlan({
      breakfast: "Oats + 3 Boiled Eggs + Banana",
      lunch: "Brown Rice + Chicken Breast + Vegetables",
      snack: "Whey Protein Shake + Almonds",
      dinner: "Chapati + Fish Curry + Salad",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-extrabold text-primary mb-6">Generate Diet Plan</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-black/40 border text-primary border-gray-700 rounded-2xl p-8 shadow-lg w-full max-w-lg space-y-6"
      >
        <div>
          <label className="label">Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Height (cm)</label>
          <input
            type="number"
            name="height"
            value={form.height}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
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
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        <div>
          <label className="label">Activity Level</label>
          <select
            name="activity"
            value={form.activity}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>

        <button className="btn btn-primary w-full">Generate Plan</button>
      </form>

      {/* Result */}
      {dietPlan && (
        <div className="mt-10 bg-black/50 p-8 rounded-xl w-full max-w-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Your Diet Plan</h2>
          <ul className="space-y-3">
            <li><strong>Breakfast:</strong> {dietPlan.breakfast}</li>
            <li><strong>Lunch:</strong> {dietPlan.lunch}</li>
            <li><strong>Snack:</strong> {dietPlan.snack}</li>
            <li><strong>Dinner:</strong> {dietPlan.dinner}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

