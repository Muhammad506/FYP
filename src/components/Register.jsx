import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Register = () => {
  return (
    <main className="h-screen flex flex-col md:flex-row text-white overflow-hidden">
      <div className="w-full md:w-2/3 relative opacity-10 md:opacity-100 object-cover">
        <a
          className="absolute z-50 left-2 top-2 opacity-75 hover:opacity-100 text-white border rounded-3xl px-4 py-1"
          href="/"
        >
          Back
        </a>
        <img
          src="https://intelliwriter.io/backgrounds/Loginbg.webp"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-[#0F172A] w-full md:w-1/3 p-5 flex flex-col items-center overflow-y-auto">
        <img src="navbar.png" alt="navbar" className="px-28 pb-10" />
        <h1 className="font-bold text-4xl text-center">Register</h1>
        <p className="text-gray-300 py-5 px-6 text-center">
          Start generating your thoughts with Intelliwriter.io
        </p>

        <form className="w-full max-w-xs space-y-4">
          {/* Name */}
          <div>
            <div className="flex items-center border rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] p-2">
              <CgProfile className="text-white mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Name"
                aria-label="Name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center border rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] p-2">
              <MdEmail className="text-white mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center border rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] p-2">
              <RiLock2Fill className="text-white mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="confirmation"
            >
              Strong Password: IntelliWriter@738
            </label>
            <div className="flex items-center border rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] p-2">
              <RiLock2Fill className="text-white mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                type="password"
                placeholder="Confirm Your Password"
                aria-label="Confirmation"
              />
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#6F26C8] to-[#4B1D84] hover:from-[#4B1D84] hover:to-[#6F26C8] text-white font-bold py-2 px-4 rounded-full w-full">
            Register
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="blank" className="text-pink-500 hover:text-pink-700">
            Login
          </a>
        </p>
      </div>
    </main>
  );
};

export default Register;
