import  P4C from './P4C.jsx'
import A1 from '../images/Avatar1.png'
import A2 from '../images/Avatar2.png'
import A3 from '../images/Avatar3.png'
import A4 from '../images/Avatar4.png'

function Page4 (){
    const project4 = [
        {
            name: "Name",
            education: "Joined 2002",
            experience: "2yrs at jdfntryidol",
            image: `${A1}`,
        },
        {
            name: "Name",
            education: "Joined 2002",
            experience: "2yrs atdfjkbv tryidol",
            image: `${A2}`,
        },
        {
            name: "Name",
            education: "Joined 2002",
            experience: "2yrs at tryidol",
            image: `${A3}`,
        },
        {
            name: "Name",
            education: "Joined 2002",
            experience: "2yrs at tryidol",
            image: `${A4}`,
        },
      
      ];
    return (
        <>
        <div>
            <div>
                <p className="flex justify-center text-sm text-[#6941C6] font-bold mb-2">Tutors</p>
                <h1 className="flex justify-center font-bold text-3xl">Meet the Heroes</h1>
                <p className="flex justify-center text-gray-600 mt-2">On Ed-Circle, instructors from all over the world instruct millions
                     of students. We offer the knowledge and abilities.</p>
            </div>
            <div className='flex place-content-between mx-40 items-center space-x-6 mt-7 mb-6'>
            {
                          project4.map((project, index) => {
                            return (
                              <P4C
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
            </div>
        </div>
        </>
    )
}
export default Page4;