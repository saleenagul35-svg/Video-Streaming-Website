import react, { useState } from "react"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const handleForm = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,


    }))
  }
  const [Contactdata, setContactData] = useState([]);
  const [alert, setAlert] = useState(false)

  const formSubmit = (e) => {
    e.preventDefault();
    setAlert(true)
    setTimeout(() =>
      setAlert(false)
      , 2000)
    setContactData((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        message: formData.message
      }

    ])
    setFormData({
      name: "",
      email: "",
      message: ""
    })
    console.log(formData);
    
  }

  return (
    <>
      {alert && (<Stack sx={{ width: '20%', position: "fixed", top: "0px", right: "50px", zIndex:"100" } }  spacing={2}   className={`transition-opacity duration-5000 ${
    alert ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}>
        <Alert severity="success">Message sent Successfully.</Alert>
      </Stack>)

      }

      <section className="bg-black text-white py-20 px-6 md:px-16 relative overflow-hidden">

        {/* Top Gradient Divider */}
        <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-black via-black/80 to-transparent"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-red-800">Touch</span>
            </h2>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Have questions about subscriptions, partnerships, or technical
              issues? Our team is here to help you 24/7. Reach out and we’ll
              get back to you as soon as possible.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>📧 saleenagul35@gmail.com</p>
              <p>📞 +92341-7309859</p>
              <p>📍 Lahore, Pakistan</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800">

            <form className="space-y-6" onSubmit={formSubmit}>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Full Name
                </label>
                <input
                  onChange={handleForm}
                  name="name"
                  value={formData.name}
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-md focus:outline-none focus:border-red-800 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Email Address
                </label>
                <input
                  onChange={handleForm}
                  name="email"
                  value={formData.email}
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-md focus:outline-none focus:border-red-800 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  onChange={handleForm}
                  value={formData.message}
                  rows="4"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-md focus:outline-none focus:border-red-800 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-800 hover:bg-red-700 transition duration-300 py-3 rounded-md font-semibold shadow-md"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black via-black/80 to-transparent"></div>

      </section>
      
    </>
  )
}
export default Contact