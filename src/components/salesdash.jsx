import sampleimage from "./images/Sample Logo.png";
// import Button from '@mui/material/Button';
import Lp from "../components/lp.jsx";
import Page3 from '../components/page3/page3.jsx'
import Page2 from '../components/page2/page2.jsx'
import Page4 from '../components/Page4/Page4.jsx'
import Page5 from '../components/Page5/Page5.jsx'
import Page6 from '../components/Page6/Page6.jsx'
import Footer from '../components/Footer/Footer.jsx'

function SalesDash() {
  return (
    <>
      <div className="Navbar flex justify-around items-center my-4">
        <div>
          <img src={sampleimage} alt="LOGO" />
        </div>
        <div className="border-[2px] flex  rounded-2xl">
          <input
            type="text"
            className="outline-none px-8"
            placeholder="Want to learn?"
          />
          <button
            type="button"
            className="inline-flex mx-3 w-full justify-center outline-none px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  ring-inset hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Explore?
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* <div className="relative inline-block text-left">

            
        </div> */}
        <div>
          <ul className="flex space-x-3">
            <a href="*"> <li>Program</li></a>
            <a href="*"> <li>Enterprise</li></a>
            <a href="*"> <li>Universities</li></a>
          </ul>
        </div>
        <div className="flex space-x-3 items-center">
          <a href="*">Sign In</a>
          <button
            variant="contained"
            className="rounded-lg border-[2px] py-2 px-2 bg-[#6941C6;] text-white"
          >
            Create Free Account
          </button>
        </div>
      </div>
      <Lp />
      <Page2 />
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Footer/>
    </>
  );
}

export default SalesDash;
