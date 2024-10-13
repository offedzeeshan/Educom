import P6C from './P6C'
import P61 from '../images/P61.png'
import P62 from '../images/P62.png'

function Page6 (){
    const project6 = [
        {
            title: "Three Pillars of User Delight",
            image: `${P61}`,
            description: "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
        },
        {
            title: "UX Mapping Methods",
            image: `${P62}`,
            description: "Visual-design principles can be applied consistently throughout the process of creating a polished UX map...",
        },
        {
          title: "UX Mapping Methods",
          image: `${P62}`,
          description: "Visual-design principles can be applied consistently throughout the process of creating a polished UX map...",
      },
        
      
      ];
    return (
        <>
        <div className='pb-7'>
            <div className='ml-40 mb-5'><p className='font-bold'>Our recent blogs</p></div>
            <div>
            <div className=' flex justify-center px-32 mb-28'>
            {
                          project6.map((project, index) => {
                            return (
                              <P6C
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
            </div>
                <div></div>
            </div>
        </div>
        </>
    )
}
export default Page6;