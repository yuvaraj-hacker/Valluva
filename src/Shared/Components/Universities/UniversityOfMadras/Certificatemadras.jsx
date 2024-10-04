import React from 'react'

function Certificatemadras() {
  const certificate = [
    "Certificate in Accounting And Auditing (English & Tamil)",
    "Certificate in Computer Applications (English)",
    "Certificate in Corporate Social Responsibility (English)",
    "Certificate in E-Commerce (English)",
    "Certificate in Indian Christianity (English)",
    "Certificate in Karnatic Music (English & Tamil)",
    "Certificate in Library And Information Science (English & Tamil)",
    "Certificate in Management (English)",
    "Certificate in Police Administration (English & Tamil)",
    "Certificate in Research Methods Of Social Sciences (English)",
    "Certificate in Christian Scriptures And Interpretation (English)",
    "Certificate in Voice Training (English)",
    "Certificate in Spoken Tamil",
    "Certificate in Taxation (English)",
    "Certificate in Written Tamil",
    "Certificate in Online Teaching (English)",
  ];

  // Corresponding duration array
  const durations = [
    "Six Months",
    "One Year",
    "Six Months",
    "One Year",
    "Six Months",
    "Six Months",
    "Six Months",
    "Six Months",
    "Six Months",
    "Six Months",
    "Six Months",
    "Six Months",
    "Six Months",
    "Six Months",
    "Six Months",
    "Six Months",
  ];

  return (
    <>
      <section className="max-w-4xl  mt-4">
        <div className="overflow-x-auto border border-gray-300">
          <table className="min-w-full table-auto border-collapse">
            <thead className="">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-1/12">
                  S.No.
                </th>
                <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-7/12">
                  Name of the Certificate and Diploma Programme
                </th>
                <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-4/12">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {certificate.map((programme, index) => (
                <tr key={index} className="bg-white hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-3 text-sm text-center text-gray-700">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-left text-gray-700">
                    {programme}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-center text-gray-700">
                    {durations[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Certificatemadras;
