import Card from './Card'
import F1 from '../images/f1.png'
import F2 from '../images/f1.png'
import F3 from '../images/f1.png'

function  Page2(){
    const projects = [
        {
          title: "User Experience",
          description: "Lessons on design that cover the most recent developments",
          href: "*",
          src: `${F1}`,
        },
        {
          title: "Web Developement",
          description: "Classes in development that cover the most recent advancements in web.",
          href: "*",
          src: `${F2}`,
        },
        {
            title: "Marketing",
          description: "Marketing courses that cover the most recent marketing trends",
          href: "*",
          src: `${F3}`,
        },
      
      ];
    return(
        <>
        <div className="mt-12">
            <div  className=" flex justify-center text-[#7F56D9;] font-bold">
            <h6>Our Services</h6>
            </div>
            <div className=" flex justify-center text-center text-4xl mt-4 font-semibold">
                <h1>Fostering a playful & engaging learning <br></br> environment</h1>
            </div>
            <div className='flex place-content-between mx-40 items-center space-x-6 mt-6 mb-20 '>
            {
                          projects.map((project, index) => {
                            return (
                              <Card
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

export default Page2







