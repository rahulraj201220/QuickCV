import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
export const Contact = () => {
  return (
<div className="flex justify-center items-center mt-16">
  <div className="card w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-base-100">
    {/* Heading */}
    <h2 className="text-3xl font-bold text-center mb-6 text-teal-600">
      Connect With Me
    </h2>

    {/* LinkedIn */}
    <div className="flex items-center justify-between mb-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center space-x-3">
        <FaLinkedin className="text-teal-600 text-3xl" />
        <div>
          <h3 className="font-semibold text-lg">LinkedIn</h3>
          <p className="text-sm text-gray-600">linkedin.com/in/rahulraj201220</p>
        </div>
      </div>
      <button
        className="btn btn-sm bg-teal-600 border-none hover:bg-teal-500"
        onClick={() =>
          window.open("https://linkedin.com/in/rahulraj201220", "_blank")
        }
      >
        Go
      </button>
    </div>

    {/* GitHub */}
    <div className="flex items-center justify-between mb-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center space-x-3">
        <FaGithub className="text-teal-600 text-3xl" />
        <div>
          <h3 className="font-semibold text-lg">GitHub</h3>
          <p className="text-sm text-gray-600">https://github.com/rahulraj201220</p>
        </div>
      </div>
      <button
        className="btn btn-sm bg-teal-600 border-none hover:bg-teal-500"
        onClick={() => window.open("https://github.com/rahulraj201220", "_blank")}
      >
        Go
      </button>
    </div>

    
  </div>
</div>
  )
}

