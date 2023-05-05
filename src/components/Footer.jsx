import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";

import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ut imperdiet mi. Mauris commodo, ex facilisis viverra lobortis, ex
          mauris semper ante, ut pretium augue nibh quis enim.</p>
          <div className="flex md:w-[75%] justify-between my-6">
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/gavanescu.vlad/"><TiSocialFacebookCircular size={30}/></a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/vlad-gavanescu-b72656130/"><TiSocialLinkedinCircular size={30}/></a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/gavanescu.vlad/?hl=en"><AiOutlineInstagram size={30}></AiOutlineInstagram></a>
            <a rel="noreferrer" target="_blank" href="https://github.com/gavanescu23"><TiSocialGithubCircular size={30}/></a>
          </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
            <h6 className="font-medium text-gray-400">Favorites</h6>
        <ul>
            <li className="py-2 text-sm">BMW</li>
            <li className="py-2 text-sm">Audi</li>
            <li className="py-2 text-sm">Mercedes</li>
            <li className="py-2 text-sm">Volkswagen</li>
        </ul>
        </div>
        <div>
            <h6 className="font-medium text-gray-400">Gym stuff</h6>
        <ul>
            <li className="py-2 text-sm">Muscle-ups</li>
            <li className="py-2 text-sm">Pull-ups</li>
            <li className="py-2 text-sm">Push-ups</li>
            <li className="py-2 text-sm">Pistol squats</li>
        </ul>
        </div>
        <div>
            <h6 className="font-medium text-gray-400">PC info</h6>
        <ul>
            <li className="py-2 text-sm">GTX 1060 3GB</li>
            <li className="py-2 text-sm">i5-10400F 2.9GHZ 12 cores</li>
            <li className="py-2 text-sm">16GB RAM</li>
            <li className="py-2 text-sm">5TB Storage</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
