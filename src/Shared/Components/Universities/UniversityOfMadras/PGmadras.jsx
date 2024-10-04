import React from 'react'

function PGmadras() {

  const program = [
    "M.A. TAMIL",
    "	M.A. ENGLISH",
    "	M.A. ECONOMICS (ENGLISH & TAMIL)",
    "	M.A. CHRISTIAN STUDIES (ENGLISH)",
    "	M.A. HISTORICAL STUDIES (ENGLISH & TAMIL)",
    "M.A. SOCIOLOGY (ENGLISH)",
    "	M.A. POLITICAL SCIENCE (ENGLISH & TAMIL)",
    "M.A. SANSKRIT (ENGLISH)",
    "	M.A. APPLIED SAIVA SIDDHANTHA (TAMIL)",
    "M.A. PUBLIC ADMINISTRATION (ENGLISH & TAMIL)",
    
    "M.A. JOURNALISM (ENGLISH)",
  
   "M.COM. (ENGLISH & TAMIL)",
   "M.SC. MATHEMATICS (ENGLISH)",
   "M.SC. PSYCHOLOGY (ENGLISH)",
   "M.SC. COUNSELLING PSYCHOLOGY (ENGLISH)",
   "M.SC. CYBER FORENSICS & INFORMATION SECURITY (ENGLISH)",
   "M.SC. GEOGRAPHY (ENGLISH)",
   "M.SC. INFORMATION TECHNOLOGY (ENGLISH)",
   "M.F.A. MUSIC (ENGLISH & TAMIL)",
   
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
