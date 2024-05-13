import {
	AiOutlineWhatsApp,
	AiFillInstagram,
	AiFillHeart,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa"

function Footer() {
	return (
		<section className="bg-dark-hard">
			<footer className="container mx-auto px-5 py-10 grid grid-cols-10 gap-x-5 gap-y-10 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
				{/* grid items-section-1 */}
				<div className="col-span-5 md:col-span-4 lg:col-span-2">
					<ul className="text-[#959EAD] text-sm space-y-4 mt-5 md:text-base">
					</ul>
				</div>
				<div className="col-span-10 md:col-span-4 md:order-first lg:col-span-2">
					<p className="text-sm mt-4 text-dark-light text-center md:text-left lg:text-sm">
						You can message us via our social networks
					</p>
					<ul className="flex justify-center items-center md:justify-start mt-5 space-x-4">
						<li>
							<a href="https://wa.me/50237917763?text=Hi!,%20my%20name%20is%20Pedro%20Lopez,%20how%20can%20I%20help%20you?">
								<AiOutlineWhatsApp className="w-6 h-6 text-white" />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/pedhri_/">
								<AiFillInstagram className="w-6 h-6 text-white" />
							</a>
						</li>
						<li>
							<a href="#">
								<FaGithub className="w-6 h-6 text-white" />
							</a>
						</li>
					</ul>
				</div>
				<div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
					<div className="bg-primary text-white p-3 rounded-full">
						<AiFillHeart className="w-7 h-auto" />
					</div>
					<p className="font-bold italic text-dark-light">
						Copyright © 2024. Pedro Lopez
					</p>
				</div>
			</footer>
		</section>
	);
}

export default Footer;
