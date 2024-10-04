import React from 'react'

function PGtamilnadu() {


    const programmes = [
        "M.A.Tamil      (Tamil )",
        " M.A.Political Science (Tamil & English)",
        "  M.A.Sociology    (Tamil & English)",
        "M.A.History  (Tamil & English)",
        " M.A.English     (English)",
        "M.A.Criminology and Criminal                Justice Administration  (English)",
        " M.Com. (English)",
        "M.S.W. (Tamil & English)",
        " M.B.A. (English) ",
        " M.Sc.Psychology   (English) ",
        " M.Sc.Maths  (English)",

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
                                    Name of the Postgraduate Programme
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

export default PGtamilnadu
