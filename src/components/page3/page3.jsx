import Card3 from './P3C.jsx'
import Image1 from '../images/Image1.png' 
import Image2 from '../images/Image2.png' 
import Image3 from '../images/Image3.png' 

function Page3 (){
    const project = [
        {
          title: "Figma UI UX Design..",
          description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
          href: "*",
          img: `${Image1}`,
          No: "637",
          name: "Aditya",
          year: "Joined 2002",
          photo: "",

        },
        {
          title: "Learn With Shoaib",
          description: "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
          href: "*",
          img: `${Image2}`,
          No: "637",
           name: "Rahul",
          year: "Joined 2002",
          photo: "",
        },
        {
            title: "Building User Interface..",
          description: "Learn how to apply User Experience (UX) principles to your website designs.",
          href: "*",
          img: `${Image3}`,
          No: "637",
          name: "Shubham",
          year: "Joined 2002",
          photo: "",
        },
      
      ];

    return(

        <>
       <div >
            <div className="ml-40 text-[#6941C6] font-semibold">
                Explore Programs
            </div>
            <div className="ml-40 text-4xl font-semibold mt-2">
                Our Most Popular Class
            </div>
            <div className="ml-40 text-gray-600 mt-3 mb-5">
                Let's join our famous class, the knowledge provided will definitely be useful for you.
            </div>
            <div className='flex place-content-between mx-40 items-center space-x-6 mt-7 mb-8'>
            {
                          project.map((project, index) => {
                            return (
                              <Card3
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
            </div>
            <div className='mx-40 flex justify-center  mb-10'>
                <button className='border-2 px-2 py-1 bg-[#F9FAFB] rounded-lg' type="button">Explore All Programs</button>
            </div>
        
        </div> 
        </>
    )
}

export default Page3;