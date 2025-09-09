function DietPlanCard({ plan }) {
  if (!plan) return null;

  return (
    <div className="card bg-base-100 shadow-xl border p-6">
      <h2 className="text-2xl font-bold text-primary mb-2">{plan.title}</h2>
      <p className="text-gray-600 mb-4">{plan.description}</p>

      <div className="space-y-4">
        {plan.meals?.map((meal, idx) => (
          <div key={idx} className="border rounded-lg p-3">
            <h3 className="font-semibold text-lg">{meal.type}</h3>
            <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
              {meal.items?.map((item, i) => (
                <li key={i}>
                  {item.food} – {item.quantity} 
                  <span className="text-gray-500">
                    ({item.calories} cal, P:{item.protein}g C:{item.carbs}g F:{item.fats}g)
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm font-semibold">
        <p>Total Calories: {plan.totalCalories}</p>
        <p>Protein Target: {plan.proteinTarget}g</p>
        <p>Carbs Target: {plan.carbTarget}g</p>
        <p>Fats Target: {plan.fatTarget}g</p>
      </div>
    </div>
  );
}

export default DietPlanCard;
