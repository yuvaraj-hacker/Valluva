import React from 'react'

function PGmadras() {

  const program = [
    "M.A. SOCIOLOGY",
    "	M.A. APPLIED SAIVA SIDDHANTHA",
    "	M.A. CHRISTIAN STUDIES",
    "	M.A. ECONOMICS",
    "	M.A. ENGLISH",
    "	M.A. HISTORICAL STUDIES",
    "	M.A. HUMAN RIGHTS AND DUTIES EDUCATION",

    "M.A. JOURNALISM",
    "	M.A. POLITICAL SCIENCE",
    "M.A. PUBLIC ADMINISTRATION",
    "M.A. SANSKRIT",
    "M.A. TAMIL",
    "M.B.A. FINACIAL MANAGEMENT",
    "M.B.A. HOSPITAL MANAGEMENT",
    "	M.B.A. HUMAN RESOURCE MANAGEMENT",
    "	M.B.A. LOGISTICS & SUPPLY CHAIN MANAGEMENT",
    "		M.B.A. MARKETING MANAGEMENT",
    "		M.B.A. SYSTEMS MANAGEMENT",
    "	M.COM. COMMERCE",
    "	M.F.A. MUSIC",
    "		M.SC. COUNSELLING PSYCHOLOGY",
    "	M.SC. CYBER FORENSICS & INFORMATION SECURITY",
    "	M.SC. GEOGRAPHY",
    "	M.SC. INFORMATION TECHNOLOGY (I.T.)",
    "	M.SC. MATHEMATICS",
    "		M.SC. PSYCHOLOGY",
    "		MASTER OF COMPUTER APPLICATION",
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
                  Name of the PostGraduate Programme
                </th>
              </tr>
            </thead>
            <tbody>
              {program.map((programme, index) => (
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

export default PGmadras
