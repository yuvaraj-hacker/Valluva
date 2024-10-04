import React from 'react'

function CertificateProgram() {
    
    const programmes = [
        "Modern Techniques &     Technology in  Teaching (English)",
        " BS-VI: Emission Standards (English)",
        "  ICT in Functional Tamil   (Tamil )",
        "Conservation Techniques  (English)",
        " Brain Based Learning Techniques     (English)",
        " Adv. Technological Applications in  Teaching Mathematics (English)",
        "Adolescence Educatio (English)",
        "Aquaculture (English)",
        " Chemical Laboratory Safety  Management (English) ",
        "  Environmental Conservation  (English) ",
        " Climate Change  (English)",
        " Entrepreneurship  Development  (English)",

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

export default CertificateProgram


