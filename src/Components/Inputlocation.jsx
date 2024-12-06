import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import locIcon from "../assets/locicon.png";

const Inputlocation = ({type , locatioTypeIcon }) => {
  const [value, setValue] = useState(null);

  return (
    <div>
      <div className="flex items-center bg-gray-100 p-3 rounded-lg">
        {/* Location Icon */}
        <img src={locIcon} alt="Location Icon" className="mr-2 w-6 h-6" />
        {/* Google Places Autocomplete */}
        
        <GooglePlacesAutocomplete
          apiKey="AIzaSyCfyCaxzHFTg5-jesf5NCNB14GAFOA-RRo"
          selectProps={{
            value,
            onChange: setValue,
            placeholder: type,
            styles: {
              input: (provided) => ({
                ...provided,
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
                outline: "none",
                fontSize: "14px",
              }),
              control: (provided) => ({
                ...provided,
                border: "none",
                backgroundColor: "transparent",
                boxShadow: "none",
              }),
              placeholder: (provided) => ({
                ...provided,
                color: "#A0AEC0",
              }),
            },
          }}
        />
      </div>
    </div>
  );
};

export default Inputlocation;
