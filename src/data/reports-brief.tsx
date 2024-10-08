"use client";
import React, { useState } from "react";
import reportData from "@/data/report";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

const ReportsBrief: React.FC = () => {
  const [clickedReports, setClickedReports] = useState<string[]>([]);

  const handleClick = (reportName: string) => {
    if (!clickedReports.includes(reportName)) {
      setClickedReports([...clickedReports, reportName]);
    }
  };

  return (
    <div id="reports-brief" className="">
      {reportData.map((report, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-4 flex justify-between items-center"
          onClick={() => handleClick(report.reportName)}
          style={{
            fontWeight: clickedReports.includes(report.reportName)
              ? "normal"
              : "bold",
          }}
        >
          <div>
            <h2 className="text-md">{report.reportName}</h2>
            <p className="text-sm">{report.reportDate}</p>
          </div>
          <Link href="/mock-reports/[mock_report_number]">
            <button className="flex gap-5 items-center">
              <p className="font-bold text-sm">New Message</p>
              <SlArrowRight />
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ReportsBrief;
