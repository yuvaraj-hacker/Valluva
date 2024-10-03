import React from 'react'

function Certificatemadras() {

  
  const certificate = [
    "	Certificate Course in Accounting And Auditing",
    "	Certificate Course in Computer Applications",
    "Certificate Course in Corporate Social Responsibility",
    "Certificate Course in E-Commerce",
    "	Certificate Course in Indian Christianity",
    "Certificate Course in Karnatic Music",
    "Certificate Course in Library And Information Science",
    "Certificate Course in Management",
    "	Certificate Course in Naturopathy And Yogic Science",
    "	Certificate Course in Online Teaching",
    "Certificate Course in Police Administration",
    "	Certificate Course in Research Methods Of Social Sciences",
    "	Certificate Course in Scriptures And Interpretation",
    "	Certificate Course in Spoken Tamil",
    "Certificate Course in Taxation",
    "Certificate Course in Voice Training",
    "Certificate Course in Written Tamil",
  ];

  return (
    <>
      <section className="max-w-4xl  mt-4">
        <div className="overflow-x-auto border border-gray-300 ">
          <table className="min-w-full table-auto border-collapse">
            <thead className="">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-1/12">
                  S.No.
                </th>
                <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-11/12">
                  Name of the Certificate and Diploma Programme
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Certificatemadras
