import React from 'react'

function UGmanon() {
    const programmes = [
        "B.A. Tamil",
        " B.A. English",
        " B.A. History (English Medium)",
        "B.A. History (Tamil Medium)",
        " B.Com. (English Medium)",
        "B.Com. (Tamil Medium)",

        "B.A. Economics (English Medium)",
        "B.B.A. (English Medium)  ",


    ];

    const program = [
        "M.A. Tamil",
        " M.A. English ",
        " M.A. History (English Medium) ",
        "M.A. History (Tamil Medium) ",
        " M.Com. (English Medium) ",
        "M.Com. (Tamil Medium) ",
        "M.A. Economics (English Medium) ",
        "M.A. Journalism and Mass Communication                   (English Medium) ",
        "M.A. Criminology and Police Science (English Medium)  ",


    ];


    const science = [
        "B.Sc. Mathematics ",
        " B.Sc. Physics ",
        " B.Sc. Chemistry ",
        "B.L.I.Sc.(1 Year) (English Medium)    ",


    ];


    const sciencepro = [
        "M.Sc. Mathematics ",
        " M.Sc. Physics ",
        " M.Sc. Chemistry  ",
        " M.L.I.Sc. (1 Year) (English Medium) ",



    ];


    const diploma = [
        "C.L.I.Sc. (Certificate in Library and        Information Science ) – 6 Month",
        " C.Y.H.E. : (Certificate in Yoga for Human  Excellence)     – 6 Months ",
        "  P.G.D.C.A: (Post Graduate Diploma in       Computer Applications)    - 1 Year  ",
        "  D.Y.H.E. : (Diploma in Yoga for       Human Excellence)  – 1 Year ",



    ];








    return (
        <>
            <section className="max-w-4xl  mt-4">
                <p className=" lg:text-xl text-base mb-3 font-bold">Arts Programmes (Semester System) </p>
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


            <section className="max-w-4xl  mt-4">


                <div className="overflow-x-auto border border-gray-300 ">
                    <table className="min-w-full table-auto border-collapse">
                        <thead className="">
                            <tr>
                                <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-1/12">
                                    S.No.
                                </th>
                                <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-11/12">
                                    Name of the PostGraduate Programme
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {program.map((programme, index) => (
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







            <section className="max-w-4xl  mt-4">

                <p className=" lg:text-xl text-base mb-3 font-bold"> Science Programmes (Semester System)  (English Medium only) </p>
                <div className="overflow-x-auto border border-gray-300 ">
                    <table className="min-w-full table-auto border-collapse">
                        <thead className="">
                            <tr>
                                <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-1/12">
                                    S.No.
                                </th>
                                <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-11/12">
                                    Name of the UnderGraduate Programme
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {science.map((programme, index) => (
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









            <section className="max-w-4xl  mt-4">


                <div className="overflow-x-auto border border-gray-300 ">
                    <table className="min-w-full table-auto border-collapse">
                        <thead className="">
                            <tr>
                                <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-1/12">
                                    S.No.
                                </th>
                                <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-11/12">
                                    Name of the PostGraduate Programme
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sciencepro.map((programme, index) => (
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







            <section className="max-w-4xl  mt-4">

                <p className=" lg:text-xl text-base mb-3 font-bold">Certificate / Diploma / PG Diploma Programmes (English Medium) </p>
                <div className="overflow-x-auto border border-gray-300 ">
                    <table className="min-w-full table-auto border-collapse">

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

export default UGmanon
