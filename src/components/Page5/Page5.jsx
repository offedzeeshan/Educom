import Edc from '../images/Sample Logo.png'
import A4 from '../images/Avatar4.png'

function Page5 (){
    return(
        <>
        <div className='mt-14 mb-12 pb-7 pt-7 bg-[#F9FAFB]'>
            <div className='flex justify-center mb-7'>
                <img  src={Edc} alt='Edu-Circle'/>
            </div>
            <div className='flex justify-center'>
                <p className='text-4xl text-center mx-40'>Courses was fantastic! It is Master platform 
                    for those looking to start a new career, or need a refresher.</p>
            </div>
            <div className=''>
                <div className='flex justify-center py-6'>
                    <img alt='A4' src={A4}/>
                </div>
                <div  className='flex justify-center'>
                    <p>Jacob Jones</p>
                </div>
                <div  className='flex justify-center'>
                    <p>Harward University</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Page5;