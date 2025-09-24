import { useLocation, useNavigate } from "react-router-dom";

function DietPlanDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const plan = location.state?.plan;

  console.log("plan==", plan);

  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-white bg-gray-900">
        <p className="mb-4">No diet plan found. Please generate one first.</p>
        <button
          onClick={() => navigate("/user/diet")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg shadow-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{plan.title}</h1>
        <button
          onClick={() => navigate("/user/diet")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg shadow-md"
        >
          Back
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6">{plan.description}</p>

      {/* Plan Overview */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-4">Plan Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-bold">Calories</p>
            <p>{plan.totalCalories} kcal</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-bold">Protein</p>
            <p>{plan.proteinTarget} g</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-bold">Carbs</p>
            <p>{plan.carbTarget} g</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-bold">Fats</p>
            <p>{plan.fatTarget} g</p>
          </div>
        </div>

        {/* Dates */}
        <div className="flex justify-between text-gray-400 text-sm mt-4">
          <p>
            <span className="font-semibold">Start:</span>{" "}
            {new Date(plan.startDate).toLocaleDateString()}
          </p>
          <p>
            <span className="font-semibold">End:</span>{" "}
            {new Date(plan.endDate).toLocaleDateString()}
          </p>
          <p>
            <span className="font-semibold">Duration:</span>{" "}
            {plan.durationWeeks} weeks
          </p>
          <p>
            <span className="font-semibold">Status:</span> {plan.status}
          </p>
        </div>
      </div>

      {/* Meals Breakdown */}
      <div className="space-y-8">
        {plan.meals?.map((meal, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4"
          >
            {/* Meal Title */}
            <h2 className="text-xl font-semibold mb-2 capitalize">
              {meal.mealType}
            </h2>

            {/* Food Items */}
            <ul className="list-disc list-inside space-y-2">
              {meal.items?.map((item, i) => (
                <li key={i} className="ml-4">
                  {item.food} – {item.quantity}
                  <span className="ml-2 text-sm text-gray-400">
                    ({item.calories} kcal | P:{item.protein}g C:{item.carbs}g
                    F:{item.fats}g)
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DietPlanDetails;

