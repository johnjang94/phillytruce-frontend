import flagIcon from "../../assets/create-form-image/flagIcon.svg";
import dropdownIcon from "../../assets/create-form-image/dropdownIcon.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
const OverviewField = ({ incident_type }) => {
    const { register, formState: { errors }, setValue, trigger, getValues } = useFormContext();
    const [selectedOptions, setSelectedOptions] = useState(incident_type ? incident_type : []);
    const [showIncident, setShowIncident] = useState(false);
    const incidents = [
        "Fight",
        "Shooting",
        "Bullying",
        "Threat",
        "Weapon",
        "Other",
    ];
    const handleCheckboxChange = (e, incident) => {
        if (e.target.checked) {
            setSelectedOptions([...selectedOptions, incident]);
        }
        else {
            setSelectedOptions(selectedOptions.filter((option) => option !== incident));
        }
    };
    const handleClick = (e) => {
        e.preventDefault();
        setShowIncident(!showIncident);
    };
    useEffect(() => {
        setValue("incident_type", selectedOptions);
        trigger("incident_type");
    }, [selectedOptions, setValue, trigger]);
    return (<>
      <fieldset className="border p-1 rounded-md border-black">
        <legend className="text-sm px-2">Incident Type</legend>
        <button onClick={handleClick} className="w-full">
          <div className="relative flex flex-row">
            <Image src={flagIcon} alt="Flag Icon"/>
            <input type="text" placeholder="Select" value={selectedOptions} className="block w-full bg-white" {...register("incident_type", {
        validate: () => {
            var _a;
            return (((_a = getValues('incident_type')) === null || _a === void 0 ? void 0 : _a.length) > 0) ||
                "Please select atleast one incident option";
        },
    })} readOnly/>

            <Image src={dropdownIcon} alt="dropdown Icon"/>
          </div>
        </button>
      </fieldset>
      
      {showIncident && (<div className="w-full flex flex-col bg-gray-100 px-8 py-4 gap-3 rounded-lg shadow-md">
          <small>Select all that apply</small>

          {incidents.map((incident, index) => (<div key={index}>
              <input type="checkbox" className="w-4 h-4" value={incident} checked={selectedOptions.includes(incident)} onChange={(e) => handleCheckboxChange(e, incident)}/>
              <label className="pl-4">{incident}</label>
            </div>))}
        </div>)}
      {errors.incident_type && (<p className="text-red-700 py-2">Please select atleast one incident</p>)}
    </>);
};
export default OverviewField;
