import React from 'react'

function Diplomamadras() {
  const diploma = [
    "		Diploma Course in Yoga",
    "	Diploma Course in Logistics And Supply Chain Management",
    "Diploma Course in Marketing Management",
    "	Diploma Course in School Management",
    "	Diploma Course in Systems Management",
    "	Diploma Course in Taxation",
    "	Diploma Course In Taxation, Finance, And Investment",
    "Diploma Course in Teaching Methodology In Music",
    "		Diploma Course in Tourism & Travel Management",
    "		Diploma Course in Accounting And Finance",
    "	Diploma Course in Financial Management",
    "	Diploma Course in Functional Arabic",
    "		Diploma Course in Hospital Management",
    "	Diploma Course in Hotel Management",
    "	Diploma Course in Human Resource Management",
    "	Diploma Course in Intellectual Property Rights",
    "		Diploma Course in Labour Law",
    "	Diploma Course in Management",
    "		Diploma Course in Police Administration",
    "	Diploma in Information Security And Cyber Law",
    "Diploma in Naturopathy & Yogic Sciences",

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
