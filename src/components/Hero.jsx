import hu_logo from "../Assets/hu_logo.png";

export default function Hero() {
  return (
    <div className="bg-customPurple">
      <div>
        <div className="flex justify-around items-center flex-row sm:flex-row"> 
          {/* Text section */}
          <div className="w-48 text-left sm:text-center sm:w-[400px] p-4 my-6 text-[30px] sm:text-[70px] text-white font-roboto font-bold">
            Elevating community's Shopping experience
          </div>

          {/* Image section */}
          <div className="w-auto h-48 sm:h-64 my-6 sm:my-24 sm:ml-6">
            <img
              src={hu_logo}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
