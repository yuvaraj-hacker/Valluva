import React from 'react'

function ShortTerm() {
    
    const programmes = [
        "M.A.Tamil      (Tamil & English )",
        "  Logistics & Supply Chain    Management  (English)",
        " Office Automation  (Tamil & English)",
        "Basic Computer Operations  (English)",
        " Industrial Safety & Security (English)",
        "Cold Storage Management  (English)",
        " Beautician (English)",
        "Tailoring and Dress Making (Tamil & English)",
        " Life Skills and Personality    Development (English) ",
        " Surface Embellishments (Tamil & English) ",
        " Yoga Education (English)",
        " Social Justice (Tamil & English)",
        " Road Safety & First Aid (Tamil )",
        "  Gnana Tamil (Tamil )",
        " Theatre Arts (Tamil )",

    ];
  return (
    <section className="max-w-4xl  mt-4">
    <div className="overflow-x-auto border border-gray-300 ">
        <table className="min-w-full table-auto border-collapse text-justify">
            <thead className="">
                <tr>
                    <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-1/12">
                        S.No.
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-11/12">
                        Name of the Undergraduate Programme
                    </th>
                </tr>
            </thead>
            <tbody>
                {programmes.map((programme, index) => (
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
  )
}

export default ShortTerm
