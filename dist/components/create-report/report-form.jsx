"use client";
import OverviewField from "./overview-field";
import DetailField from "./detail-field";
import Continue from "./continue-modal";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
const ReportForm = ({ report }) => {
    const methods = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            location: report.location || "",
            description: report.description || "",
            incident_type: report.incident_type || [],
            report_initiated_at: report.report_initiated_at,
            ppd_notified: report.ppd_notified || false,
        },
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    return (<div className="pt-20 px-4">
      {report ? "" : <Continue />}
      <p className="text-sm py-2">
        Please provide detailed information of the incident in this form
      </p>
      <hr />
      <FormProvider {...methods}>
        <form className="py-2" onSubmit={methods.handleSubmit(onSubmit)}>
          <h4 className="text-primary font-bold py-2 text-md">Overview</h4>

          <OverviewField incident_type={report ? report.incident_type : []}/>

          <h4 className="text-primary font-bold text-md py-2">Details</h4>

          <DetailField date={report && report.report_initiated_at.toISOString().split("T")[0]} time={report && report.report_initiated_at.toTimeString().split(" ")[0]}/>

          {/* <h4 className="text-primary font-bold text-md py-2">
           Connected Reports
           </h4>
           <ConnectedReportsField/> */}

          <button className="w-full bg-primary rounded-xl text-white py-2 p-2 mb-4 text-md">
            SAVE
          </button>
          <Link href={"/home"}>
            {" "}
            <button className="w-full rounded-xl text-primary text-md py-2 p-1 border border-black">
              CANCEL
            </button>
          </Link>
        </form>
      </FormProvider>
    </div>);
};
export default ReportForm;
