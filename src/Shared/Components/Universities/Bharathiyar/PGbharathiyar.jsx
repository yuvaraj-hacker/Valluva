import React from 'react'

function PGbharathiyar() {

    const programmes = [
        "Master of Computer Applications",
        "M.Sc. Applied Psychology",
        "M.Sc. Computer Science",
        "M.Sc. Information Technology",
        "Master of Commerce",
        "M.Com - Computer Applications",
        "M.A. Economics",
        "M.A. Journalism & Mass Communication",
        "M.A. Tamil Literature",
        "M.A. English Literature",
        "M.A. History",
        "Master of Social Work",
        "M.Sc. Physics",
        "M.Sc. Mathematics",
        "Master of Business Administration",
    ];

    // Corresponding durations array
    const durations = [
        "2 years",
        "2 years",
        "2 years",
        "2 years",
        "2 years",
        "2 years",
        "2 years",
        "2 years",
        "2 years",
        "2 years",
        "2 years",
        "2 years",
        "2 years",
        "2 years",
        "2 years",
    ];

    const eligibilities = [
        "Bachelor's degree in Computer Science or equivalent",
        "Bachelor's degree in any discipline",
        "Bachelor's degree in Computer Science or equivalent",
        "Bachelor's degree in Information Technology or equivalent",
        "Bachelor's degree in Commerce or equivalent",
        "Bachelor's degree in Commerce or Computer Applications",
        "Bachelor's degree in Economics or equivalent",
        "Bachelor's degree in Journalism or any discipline",
        "Bachelor's degree in Tamil or Literature-related field",
        "Bachelor's degree in English or Literature-related field",
        "Bachelor's degree in History or equivalent",
        "Bachelor's degree in Social Work or equivalent",
        "Bachelor's degree in Physics or equivalent",
        "Bachelor's degree in Mathematics or equivalent",
        "Bachelor's degree in any discipline",
    ];

    return (
        <section className="max-w-8xl mt-4">
            <div className="overflow-x-auto border border-gray-300">
                <table className="min-w-full table-auto border-collapse text-justify">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-1/12">
                                S.No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-2/12">
                                Name of the Postgraduate Programme
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-1/12">
                                Duration
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 text-center w-5/12">
                                Eligibility
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
                                <td className="border border-gray-300 px-4 py-3 text-sm text-center text-gray-700">
                                    {durations[index]}
                                </td>
                                <td className="border border-gray-300 px-4 py-3 text-sm text-left text-gray-700">
                                    {eligibilities[index]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default PGbharathiyar;
