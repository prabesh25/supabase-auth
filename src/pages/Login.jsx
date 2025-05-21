
import { useState } from "react";
import { supabase } from "../client";
import { Link, useNavigate } from "react-router-dom";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

// settoken vanne prop accept 
function Login({ setToken }) {
  // user lai loginin pachi archo page ma navigate hai
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  // user input ma update garna ko lagi
  // jun ma type hudai cha tei matara update huncha.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // supabase sanga given name ra pass le login garauna    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      //settoken ko through bata user info lai save garna
      setToken(data);
      navigate("/homepage");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-slate-100/85 backdrop-blur-sm rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Sign in to join the celebration</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <EnvelopeIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-orange-100 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <LockClosedIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-orange-100 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg hover:shadow-orange-500/30"
          >
            Let's Celebrate!
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          New here?{" "}
          <Link
            to="/signup"
            className="text-orange-600 hover:text-orange-800 font-semibold"
          >
            Join the Party
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
