
import hu_logo from "../Assets/hu_logo.png";



export default function Hero() {

  return (
    <div className="bg-customPurple">
      <div >
        <div className="flex justify-around ">
            <div className="items-center">
          <div className="p-4 my-6 w-[200px] text-left text-[70px] text-white font-roboto font-bold ">
            Elevating community's Shopping experience
            </div>
            
          </div>

          
          <div className="w-auto h-64 my-24">
            <img
              src={hu_logo}
              className="object-cover w-full h-full rounded-lg" // Adjust these classes as needed
            />
          </div>
        </div>

        
 

        
      </div>
    </div>
  );
}
