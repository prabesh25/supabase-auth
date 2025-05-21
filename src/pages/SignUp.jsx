


import { useState } from "react";
//user data supabase bata lina ko lagi ra signup garauna ko lagi
import { supabase } from "../client";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

function SignUp() {
  //signup pachi archo route ma move huna ko lagi
  const navigate = useNavigate();
  //set form data ko kam user le type gardha you 3 tai update garnu ho
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // input hudha value update garaunu ho
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // email ra pass supabase lai send garna ko lagi
    //user lai signup garauna ko lagi.
    // full-name lai extar data jasari store garna. 
    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { full_name: formData.fullName },
        },
      });
      if (error) throw error;
      alert("Check your email for verification link.");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join the Festivity!</h1>
          <p className="text-gray-600">Create your free account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <UserIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-orange-100 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

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
                placeholder="Create a password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg hover:shadow-orange-500/30"
          >
            Start Celebrating
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already part of the fun?{" "}
          <Link
            to="/"
            className="text-orange-600 hover:text-orange-800 font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
