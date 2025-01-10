
export const Launchpads = () => {
    return (
    <div classNameName="bg-gray-100">

        <div classNameName="text-center p-8">
            <div className="text-2xl font-bold text-gray-800">What Are Launchpads?</div>

            <div className="text-xl text-gray-600 mt-2 mb-8">About Our Launchpads</div>

            <div className="flex flex-wrap justify-center gap-8">

                <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center ">
                    <div className="p-4 rounded-full bg-green-100">
                        <img
                            src="/Launch-img/plug.png"
                        />
                    </div>
                    <div className="text-lg font-bold text-gray-800 mb-2">Building Connections</div>
                    <p className="text-gray-600">
                    It provides a platform where entrepreneurs can network, collaborate,
                    and form meaningful relationships to drive growth and success.
                    </p>
                </div>


                <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center ">
                    <div className="p-4 rounded-full bg-blue-100">
                        <img
                            src="/Launch-img/progress.jpg"
                        />
                    </div>
                    <div className="text-lg font-bold text-gray-800 mb-2">Enhancing Skills</div>
                    <p className="text-gray-600">
                    We provide resources and mentorship to help aspiring entrepreneurs
                    develop the skills needed to succeed in the startup world.
                    </p>
                </div>


                <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center ">
                    <div className="p-4 rounded-full bg-yellow-100">
                        <img
                            src="/Launch-img/lock.jpg"
                        />
                    </div>
                    <div className="text-lg font-bold text-gray-800 mb-2">Unlocking Opportunities</div>
                    <p className="text-gray-600">
                    We help you access a range of opportunities, from funding to
                    partnerships, that can accelerate your startup journey and foster
                    growth.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )   
}
