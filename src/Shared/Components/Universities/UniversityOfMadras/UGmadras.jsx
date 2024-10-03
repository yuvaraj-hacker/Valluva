import React from 'react'

function UGmadras() {

    const programmes = [
        "B.A. CRIMINOLOGY & POLICE ADMINISTRATION",
        "B.A. ECONOMICS",
        "B.A. ENGLISH",
        "B.A. FRENCH",
        "B.A. HISTORICAL STUDIES",
        "B.A. PUBLIC ADMINISTRATION",
        "B.A. SOCIOLOGY",
        "B.A. TAMIL",
        "B.B.A. BUSINESS ADMINISTRATION",
        "B.C.A. COMPUTER APPLICATIONS",
        "B.COM COMPUTER APPLICATIONS",
        "B.COM. BANK MANAGEMENT",
        "B.COM. COMMERCE",
        "B.COM. CORPORATE SECRETARYSHIP",
        "B.F.A. MUSIC",
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

export default UGmadras
