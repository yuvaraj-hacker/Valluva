import React from 'react'

function Voactional() {


    const programmes = [
        "  General Duty Assistant   (Tamil & English )",
        " Refrigeration & AC   Technician (Tamil & English)",
        "  Vehicle Mechanic   (Tamil & English)",
        "Beauty Therapist  (Tamil & English)",
        " Office Automation   (Tamil &  English)",
        
    
        "In-Design (Tamil & English)",
        " Acupressure Therapist (Tamil & English) ",
        " Early Childhood Care &   Education (Tamil & English) ",
        " Fashion Design & Garment  Making  (Tamil & English)",

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
    )
}

export default Voactional
