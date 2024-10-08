import React from 'react'

function UGmadras() {

    const programmes = [
        "B.A. TAMIL",
        "B.A. LITERATURE IN TAMIL",
        "B.A. FRENCH",
        "B.A. ENGLISH",
        "B.A. ECONOMICS (ENGLISH & TAMIL)",
        "B.A. HISTORICAL STUDIES (ENGLISH & TAMIL)",
        "B.A. SOCIOLOGY (ENGLISH)",
        "B.A. PUBLIC ADMINISTRATION (ENGLISH & TAMIL)",
        "B.A. CRIMINOLOGY & POLICE ADMINISTRATION (ENGLISH)",
        "B.COM. [General] (ENGLISH & TAMIL)",
       "B.COM. BANK MANAGEMENT (ENGLISH & TAMIL)",
       "B.B.A - [BACHELOR OF BUSINESS ADMINISTRATION] (ENGLISH & TAMIL)",
        "B.SC. MATHEMATICS (ENGLISH)",
       "B.SC. PSYCHOLOGY (ENGLISH)",
       "B.SC. GEOGRAPHY (ENGLISH)",
       
       
        "B.C.A. - [BACHELOR OF COMPUTER APPLICATIONS] (ENGLISH)",

        "B.F.A. [MUSIC] (ENGLISH & TAMIL)",
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
