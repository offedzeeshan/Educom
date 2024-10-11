
import I1 from '../images/I1.png'
import I2 from '../images/I2.png'



export default function P4C({ name, education, experience, image }) {
  return (
    <>
      <div className="min-w-52 rounded overflow-hidden shadow-lg bg-[#F9FAFB]">
       <div className="flex justify-center">
        <img className="w-full h-full flex justify-center pt-2 object-fill max-w-28" src={image} alt="hnnkhaimg" />
        </div>
        <div className="p-4">
        <div>
          <p className="flex justify-center font-semibold">{name}</p>
        </div>
          <p className=" flex justify-center text-sm mb-2">{education}</p>
          <p className="text-gray-700 flex justify-center text-sm">{experience}</p>
          <div className="flex justify-center space-x-3 pt-8">
            <a href="*"><img src={I1} alt='twitter'/></a>
            <a href="*"><img src={I2} alt='linked in'/></a>
          </div>
        </div>
      </div>
    </>
  );
}
