import Lpbg from "./images/Lpbg.png";
// import Button from '@mui/material/Button';
// import sampleimage from "./images/Sample Logo.png";
import footer from "./images/footerimg.png";
import Duolingo from "./images/Duolingo.png";
import Codecov from "./images/Codecov.png";
import Magicleap from "./images/MagicLeap.png";
import Usertesting from "./images/UserTesting.png";
import studentimg from "./images/Untitled design.png";
import Frame10 from "./images/Frame10.png";
import Frame11 from "./images/Frame11.png";
import Frame12 from "./images/Frame12.png";
// import Page3 from "./page3/page3.jsx";

var sectionStyle = {
  width: "100%",
  height: "600px",
  backgroundImage: `url(${Lpbg})`,
};

function Lp() {
  return (
    <>
      <section className="bg-no-repeat bg-cover bg-center" style={sectionStyle}>
        <div className="flex items-center mr-0">
          <div>
            <div className="ml-36 mt-0 text-[64px] leading-[82px]">
              UP YOUR <span className="text-[#7F56D9;]">SKILLS</span>
              <br></br>
              TO <span className="text-[#7F56D9;]">ADVANCE</span> YOUR<br></br>
              <span className="text-[#7F56D9;]">CAREER</span> PATH
            </div>
            <div>
              <p className="ml-36 mt-5 w-[600px] text-[gray;]">
                Provides you with the latest online learning system and material
                that help your knowledge growing
              </p>
            </div>
          </div>
          <div className="mt-4 mr-8">
            <img src={studentimg} alt="student img" />
          </div>
        </div>
        <div className="ml-36 space-x-2">
          {/* <Button variant="contained">Get Started</Button>
           <Button variant="contained">Get Free Trial</Button> */}
          <button
            variant="contained"
            className="rounded-md border-[2px] py-2 px-2 bg-[#6941C6;] text-white"
          >
            Get Started
          </button>
          <button
            variant="contained"
            className="rounded-md border-[2px] py-2 px-2 bg-[#F4EBFF;] text-[#6941C6]"
          >
            Get free trial
          </button>
        </div>
        <div className="ml-36 mb-10 gap-4 max-w-[420px] flex my-8">
          <a href="*">
            <img src={Frame10} alt="LOGO" />
          </a>
          <a href="*">
            <img src={Frame11} alt="LOGO" />
          </a>
          <a href="*">
            <img src={Frame12} alt="LOGO" />
          </a>
        </div>

        <div className="flex items-center mx-[6rem] justify-evenly">
          <img src={footer} className="flex  max-w-36" alt="footer" />
          <img src={Duolingo} className="flex  max-w-36" alt="footer" />
          <img src={Codecov} className="flex  max-w-36" alt="footer" />
          <img src={Usertesting} className="flex  max-w-36" alt="footer" />
          <img src={Magicleap} className="flex  max-w-36" alt="footer" />
        </div>
      </section>
      
      {/* <Page3/> */}
    </>
  );
}
export default Lp;
