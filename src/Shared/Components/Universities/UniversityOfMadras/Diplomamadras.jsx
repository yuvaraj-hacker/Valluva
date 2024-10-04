import React from 'react'

function Diplomamadras() {
  const diploma = [
    "Diploma in Accounting and Finance (English)",
    "Diploma in Financial Management (English)",
    "Diploma in Functional Arabic",
    "Diploma in Hospital Management (English)",
    "Diploma in Human Resource Management (English) ",
    "Diploma in Information Security and Cyber Law (English)",
    "Diploma in Intellectual Property Rights (English)",
    " Diploma in Labour Law (English)",
    "Diploma in Logistics & Supply Chain Management (English)",
    "Diploma in Management (English)",
    "Diploma in Marketing Management (English)",
    "Diploma in Naturopathy and Yogic Sciences (English)",
    "Diploma in Police Administration (English & Tamil)",
    "Diploma in School Management (English)",
    "Diploma in Systems Management (English)",
    "Diploma in Taxation, Finance and Investment (English)",
    "Diploma in Teaching Methodology in Music (English & Tamil)",
    "Diploma in Yoga (English & Tamil)",
    "Diploma in Tourism and Travel Management (English)",
  

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
                  Diploma Course
                </th>
              </tr>
            </thead>
            <tbody>
              {diploma.map((programme, index) => (
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

export default Diplomamadras
