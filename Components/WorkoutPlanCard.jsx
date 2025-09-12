function WorkoutPlanCard({workout}) {
  if (!workout) return null;

  return (
    <div className="card bg-base-100 shadow-xl border p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Workout Plan</h2>

      <div className="space-y-6">
        {workout.days?.map((day, idx) => (
          <div key={idx} className="border-b pb-3">
            <h3 className="font-semibold text-lg mb-2">{day.day}</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              {day.exercises?.map((ex, i) => (
                <li key={i}>
                  {ex.name} – {ex.sets} sets × {ex.reps} reps
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPlanCard;
