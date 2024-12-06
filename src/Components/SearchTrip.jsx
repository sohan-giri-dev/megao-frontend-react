import React from "react";
import Inputlocation from "./Inputlocation";
import UserIcon from "../assets/PersonIcon.png"
import ScheduleIcon from "../assets/ScheduleIcon.png"

const SearchTrip = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Search trip</h2>
     <Inputlocation type='pickup location' locationIconType ={UserIcon} />
     <Inputlocation type='drop-off location' locationIconType ={Inputlocation} />
     <div className="flex items-center bg-gray-100 p-3 rounded-lg">
     <img src={ScheduleIcon} alt="Location Icon" className="mr-2 w-6 h-6" />
          <select className="bg-transparent w-full outline-none">
            <option>Pick up now</option>
            <option>Schedule for later</option>
          </select>
        </div>

        {/* For whom */}
        <div className="flex items-center bg-gray-100 p-3 rounded-lg">
        <img src={UserIcon} alt="Location Icon" className="mr-2 w-6 h-6" />
          <select className="bg-transparent w-full outline-none">
            <option>For me</option>
            <option>For someone else</option>
          </select>
        </div>
    <button className="w-full mt-6 bg-black py-3 rounded-lg text-white font-semibold">
        Search
      </button>
    </div>
  );
};

export default SearchTrip;
