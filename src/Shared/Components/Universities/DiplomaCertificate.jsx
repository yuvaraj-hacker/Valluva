import React from 'react'

function DiplomaCertificate() {
    return (
        <>
             <section className="max-w-[80rem] px-5 mx-auto py-10">
            <div className="mt-5">
                
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                        <thead>
                            <tr className=" border-b">
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r w-1/12">
                                    Sl. No.
                                </th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r w-4/12">
                                    Name of the Programme
                                </th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r w-3/12">
                                    Duration
                                </th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 w-4/12">
                                    Eligibility
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className="border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Diploma in Yoga</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1 year</td>
                                <td className="py-2 px-4 text-sm text-gray-600 "  >
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">2</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Diploma in Thirukkural</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1 year</td>
                                <td className="py-2 px-4 text-sm text-gray-600 " rowSpan={2} >
                                    A pass in SSLC Examination (10th ).                              </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">		Diploma in Sanskrit</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	1 year</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">4</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	Certificate Course in Tamil Pandit Training.</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	1 year</td>
                                <td className="py-2 px-4 text-sm text-gray-600 " >
                                    A pass in Pulavar / B.Litt Tamil                              </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </section>
        </>
    )
}

export default DiplomaCertificate
