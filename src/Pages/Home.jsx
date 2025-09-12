import { Dumbbell, Apple } from "lucide-react";
import { Link } from 'react-router-dom';
import WorkoutPlanCard from "../../Components/WorkoutPlanCard";

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-grey-800 to-gray-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-8 py-16">

          {/* text section */}
          <div className="max-w-xl space-y-6">

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Your <span className="text-primary">AI Trainer</span>
              for Diet & Workout Plans
            </h1>

            <p className="text-gray-300 text-lg">
              "Discipline is the bridge between goals and results."
              FitPartner helps you achieve both with smart, personalized plans.
            </p>

            <div className="flex gap-4">
              <Link to={"user/diet"} className="btn btn-primary flex items-center gap-2 px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
                <Apple className="w-5 h-5" /> Get Diet Plan
              </Link>
              <Link to={"user/workout"} className="btn btn-secondary flex items-center gap-2 px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
                <Dumbbell className="w-5 h-5" /> Get Workout Plan
              </Link>
            </div>
          </div>

          {/* image section */}
          <div className="">
            <img className='rounded-2xl shadow-lg object-cover w-full h-[350px]' src="Assets/ai-personal-trainer.jpeg" alt="Ai Personal Trainer" />
          </div>
        </div>

        {/* show all Diet Plan by userId  */}
        <div className="felx">
          <WorkoutPlanCard/>
        </div>


      </div>
    </>
  )
}

export default Home
