export const GlobalGetInTouch = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
          <div className="w-full max-w-[672px] h-full max-h-[516px] p-6 bg-white rounded-lg ">
            <h2 className="mb-6 text-4xl font-semibold text-center text-[#113045]">Get in touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 text-base rounded-md font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#113045]"
                  
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 text-base rounded-md font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#113045]"
            
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-1 text-base rounded-md font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#113045]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-[#113045] rounded-md hover:bg-[#113150bf] focus:outline-none focus:ring-2 focus:ring-[#113045]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      );
}