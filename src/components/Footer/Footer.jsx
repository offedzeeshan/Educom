import Si from "../images/Si.png";
import ic from "../images/I1.png";
function Footer() {
  return (
    <>
      <div className="flex justify-center space-x-32 py-12 bg-[#101828]">
        <div className="space-y-5">
          <img src={Si} alt="Edu" />
          <p className="text-[#EAECF0] max-w-64">
            Top learning experiences that create more talent in the world.
          </p>
        </div>
        <div className="space-x-28 flex justify-center">
          <div>
            <h5 className="text-[#98A2B3]">Product</h5>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Overview </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Features </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Solutions </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Tutorials </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Pricing </h6>{" "}
            </a>
          </div>
          <div>
            <h5 className="text-[#98A2B3]">Company</h5>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">About us </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Careers </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Press </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">News </h6>{" "}
            </a>
          </div>
          <div>
            <h5 className="text-[#98A2B3]">Legal</h5>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Twitter </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">LinkedIn </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">GitHub </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Dribbble </h6>{" "}
            </a>
          </div>
          <div>
            <h5 className="text-[#98A2B3]">Social</h5>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Terms </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Privacy </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Cookies </h6>{" "}
            </a>
            <a href="*">
              {" "}
              <h6 className="text-[#EAECF0]">Contact </h6>{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-28 pb-12 bg-[#101828]">
        <div>
          <h5 className="text-[#EAECF0]">© 2022 Ed-Circle. All rights reserved.</h5>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="*"><img src={ic} alt="iuc"></img></a>
          <a href="*"> <img src={ic} alt="iuc"></img></a>
          <a href="*"><img src={ic} alt="iuc"></img></a>
          <a href="*"> <img src={ic} alt="iuc"></img></a>
        </div>
      </div>
    </>
  );
}
export default Footer;
