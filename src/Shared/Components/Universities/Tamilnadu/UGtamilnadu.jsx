import React from 'react'

function UGtamilnadu() {



    const programmes = [
        "B.B.A.  (Tamil & English)",
        "B.A. Tamil  (Tamil)",
        " B.A. Sociology  (Tamil & English)",
        "B.A. Economics  (Tamil & English)",
        " B.A. History  (Tamil & English)",
        "B.A. English  (English)",
        "B.A. Political Science  (Tamil & English)",
        ". B.Com.  (Tamil & English)",
        "B.C.A.  &  LE  (English) ",
        " B.Sc. Maths  (English) ",
        "B.Ed. Special Education  (Tamil & English)",
      
      ];


    return (
        <>
            
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
        </>
    )
}

export default UGtamilnadu
