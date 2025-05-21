




import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import { SparklesIcon, CakeIcon, GiftIcon } from "@heroicons/react/24/solid";


// token prop accept garya for checking 
const Homepage = ({ token }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // sessionStorage.removeItem('token')
    // builtin signout method vai halyo 
    await supabase.auth.signOut();
    // logpout pachi user lai home page ma redirect garna ko lagi
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-700 to-fuchsia-600">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-white">Celebration Zone</div>
            <div className="flex items-center space-x-4">
              <span className="text-orange-100">Welcome, {token.user.user_metadata.full_name}!</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-600/90 cursor-pointer hover:bg-blue-800/80 text-white rounded-lg transition-colors shadow hover:shadow-orange-500/30"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-6 rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
            <SparklesIcon className="h-20 w-20 text-orange-300" />
          </div>
          <h1 className="text-4xl font-bold text-white mt-8 mb-4">
           
          Let's Celebrate Together!
          <p>🎉🎉🎉</p>
          </h1>
          <span className="text-[39px]  p-2 rounded-2xl font-bold text-orange-100">Welcome, {token.user.user_metadata.full_name}!</span>

          <p className="text-orange-100 mt-2 text-xl">
            You're now part of our Supabase community
          </p>
        </div>

        
      </main>
    </div>
  );
};

export default Homepage;
