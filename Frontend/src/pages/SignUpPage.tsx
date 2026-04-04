import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="min-h-[100vh] flex">
      
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-300 to-blue-700 text-white flex-col">
        <h1 className="text-5xl font-bold mb-4">Mind Campus</h1>
        <p className="text-lg">Build With ❤️</p>
        <p className="text-sm mt-2">By Alpha Builders</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-blue-200">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">
          
          <h2 className="text-2xl font-semibold text-center mb-2">
            Create an Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Sign up to continue to Brainly
          </p>

          {/* INPUTS */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* BUTTON */}
          <button className="w-full mt-6 py-2 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-lg font-semibold hover:opacity-90">
            Sign Up
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer">
                <Link to="/login">
                    Login
                </Link>
            </span>
          </p>

          {/* SOCIAL */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">
              or sign up with
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center gap-4">
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              G
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              f
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              t
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SignUpPage;