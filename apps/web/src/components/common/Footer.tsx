import React from "react";
import { Link } from "react-router-dom";
import { commonImages } from "../../data/common/images";

const Footer: React.FC = () => {
	return (
		<div className="bg-bgFooterGreen text-textNormalWhite font-semibold p-10">
			<div className="flex flex-col justify-center gap-7 sm:flex-row">
				<div className="flex flex-col items-center w-full sm:items-start sm:w-1/6">
					<img src={commonImages.company_logo} alt="logo-image" />
					<p className="text-sm">
						In this version, I've replaced the color values with the
					</p>
				</div>
				<div className="flex flex-col items-center w-full sm:items-start sm:w-1/6">
					<h1 className="text-xl font-bold">Address</h1>
					<p className="text-sm">
						key names as strings for each color definition.
					</p>
					<h1 className="text-xl font-bold">Contact</h1>
					<p className="text-sm">+91 7518034435</p>
					<p className="text-sm">shailendraftp0001@gmail.com</p>
				</div>
				<div className="flex flex-col items-center w-full sm:items-start sm:w-1/6">
					<h1 className="text-xl font-bold">Explore</h1>
					<Link className="text-sm" to="/">
						Home
					</Link>
					<Link className="text-sm" to="/">
						About
					</Link>
					<Link className="text-sm" to="/">
						Services
					</Link>
					<Link className="text-sm" to="/">
						Blogs
					</Link>
					<Link className="text-sm" to="/">
						Team
					</Link>
				</div>
				<div className="flex flex-col items-center w-full sm:items-start sm:w-1/6">
					<h1 className="text-xl font-bold">Resources</h1>
					<Link className="text-sm" to="/">
						Documentation
					</Link>
					<Link className="text-sm" to="/">
						Privacy Policy
					</Link>
					<Link className="text-sm" to="/">
						Press Files
					</Link>
					<Link className="text-sm" to="/">
						Contacts
					</Link>
				</div>
			</div>
			{/* 
      Uncomment the following block when you want to use it and add proper TypeScript types

      <div className="flex flex-col items-center gap-5 p-5 w-full">
        <h1 className="text-xl font-semibold sm:2xl">
          Subscribe Our Newsletter
        </h1>
        <div className="flex gap-3 flex-wrap text-sm font-semibold">
          <input
            type="text"
            placeholder="Your e mail"
            className="p-2 pl-12 pr-12 placeholder:text-textNormalBlack outline-none rounded-full text-textNormalBlack"
          />
          <button className="bg-bgFooterButton text-textFooterButton p-2 pl-4 pr-4 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
      */}
		</div>
	);
};

export default Footer;
