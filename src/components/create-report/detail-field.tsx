import locationIcon from "../../assets/create-form-image/locationIcon.svg";
import editIcon from "../../assets/create-form-image/editIcon.svg";
import dateIcon from "../../assets/create-form-image/dateIcon.svg";
import timeIcon from "../../assets/create-form-image/timeIcon.svg";
import descriptionIcon from "../../assets/create-form-image/descriptionIcon.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";
import DatePicker from "./date-picker";
import { useFormContext } from "react-hook-form";

type DetailFieldData = {
  date: Date | undefined;
  time: Date | undefined;
};

type ReportData = {
  description: string;
  location: string;
  ppd_notified: boolean;
  date: string;
  time:string;
};

const DateInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.placeholder = getCurrentDate();
    }
  }, []);

  return (
    <input
      type="text"
      ref={inputRef}
      className="block w-1/2 bg-white placeholder:text-black text-sm"
      readOnly
    />
  );
};

function getCurrentDate(): string {
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
  const dd = String(today.getDate()).padStart(2, "0");
  const yy = String(today.getFullYear()); // Get the last two digits of the year

  return `${yy}-${mm}-${dd}`;
}

const getCurrentTime = (): string => {
  const now = new Date();
  let hh = now.getHours();
  const mm = String(now.getMinutes()).padStart(2, "0");
  const hours = String(hh).padStart(2, "0");

  return `${hours}:${mm}`;
};

const TimeInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.placeholder = getCurrentTime();
    }
  }, []);

  return (
    <input
      type="text"
      ref={inputRef}
      className="block w-1/2 appearance-none bg-white placeholder:text-black"
      readOnly
    />
  );
};

const DetailField: React.FC<DetailFieldData> = ({ date, time }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ReportData>();

  const todayDate = getCurrentDate();
  const todayTime = getCurrentTime(); 


  return (
    <>
      <fieldset className="border p-1 rounded-md border-black">
        <legend className="text-sm px-2">Location</legend>
        <div className="relative">
          <div className="flex flex-row">
            <Image src={locationIcon} alt="Location Icon" />
            <input
              type="text"
              placeholder="Where did this take Place?"
              className="block w-full p-1 focus:outline-none bg-white"
              {...register("location", { required: true })}
            />

            <Image src={editIcon} alt="Icon" />
          </div>
        </div>
      </fieldset>
      {errors.location && (
        <p className="text-red-700 py-2">Please enter the location</p>
      )}
      <div className="flex flex-row gap-4 py-2">
        <input
          type="hidden"
          value={todayDate}
          {...register("date", {
            required: "Report Date and Time is Required",
          })}
        />
        <fieldset className="border p-1 rounded-md w-1/2 border-black">
          <legend className="text-sm px-2">Date</legend>
          <div className="relative">
            <div className="flex flex-row">
              {date ? (
                <DatePicker reportedDate={new Date(date)} />
              ) : (
                <>
                  <Image src={dateIcon} alt="Date Icon" />
                  <DateInput />
                </>
              )}
            </div>
          </div>
        </fieldset>
        <input
          type="hidden"
          value={todayTime}
          {...register("time", {
            required: "Report Date and Time is Required",
          })}
        />
        <fieldset className="border p-1 rounded-md w-1/2 border-black">
          <legend className="text-sm px-2">Time</legend>
          <div className="relative">
            <div className="flex flex-row">
              <Image src={timeIcon} alt="Time Icon" />
              {time ? (
                <input
                  type="text"
                  value={new Date(time).toLocaleTimeString()}
                  className="block w-1/2 focus:outline-none bg-white placeholder:text-black"
            
                />
              ) : (
                <TimeInput />
              )}
            </div>
          </div>
        </fieldset>
      </div>
      <fieldset className="border p-1 rounded-md border-black">
        <legend className="text-sm px-2">Description</legend>
        <div className="relative">
          <div className="flex flex-row">
            <Image src={descriptionIcon} alt="Description Icon" />
            <textarea
              placeholder="Please describe/explain what happened in detail."
              className="block w-full px-4 focus:outline-none"
              {...register("description", {
                required: "Incident Description is Required",
              })}
            />
            <Image src={editIcon} alt="Icon" />
          </div>
        </div>
      </fieldset>
      {errors.description && (
        <p className="text-red-700 py-2">
          Please enter the incident description
        </p>
      )}
      <div className="pt-6 pb-4 px-3 flex flex-row justify-start">
        <input
          type="checkbox"
          className="w-5 h-5 border-1 border-primary "
          {...register("ppd_notified")}
        />
        <label htmlFor="PPD Notified" className="pl-8">
          PPD Notified
        </label>
      </div>
    </>
  );
};

export default DetailField;
