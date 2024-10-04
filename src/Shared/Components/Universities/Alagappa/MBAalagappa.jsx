import React from 'react'

function MBAalagappa() {
  return (
    <>
      <div className="mt-4">

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg text-justify">
            <thead>
              <tr className=" border-b">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r w-1/12">
                  Sl. No.
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r w-4/12">
                  Name of the Programme
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r w-2/12">
                  Medium
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 w-5/12">
                  Eligibility
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b">
                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.B.A.</td>
                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                <td className="py-2 px-4 text-sm text-gray-600 " >
                  Any UG Degree of this University or an equivalent examination accepted by the Syndicate thereto (10 + 2 + 3) including B.E./B.Tech. with a minimum of 50% marks in Part III
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MBAalagappa
