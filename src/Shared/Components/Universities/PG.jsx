import React from 'react'

function PG() {
    return (
        <>
            <section className="max-w-[80rem] px-5 mx-auto py-10">


                <div className="mt-5">

                    <p className="text-sm text-gray-700 mb-2">
                        Duration for M.A, M.Sc, and M.Com, Programmes: 2 Years
                    </p>
                    <p className="text-sm text-gray-700 mb-6">
                        Duration for  M.L.I.S Programme: 1 Year
                    </p>
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
                                        Medium
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 w-4/12">
                                        Eligibility
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">M.A. Economics</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 " >
                                        B.A. Economics / Econometrics
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">2</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.A. English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">	 English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 " >
                                        A pass in B.A. English Literature (or) and degree with English as part II Language
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.A. Tamil</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil</td>
                                    <td className="py-2 px-4 text-sm text-gray-600">	A pass in B.A. Tamil / B.Lit. B.A. Applied for Tamil / Pulavar  Degree (or) any Degree with Tamil as part of I language.</td>
                                </tr>
                                <tr className="">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">4</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">M.A. History</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	Tamil & English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600" rowSpan={3}>Any UG Degree</td>
                                </tr>
                                <tr className="">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">5</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.A. Public Administration</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">6</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.A. Political Science</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600"></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">7</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">M.Sc. Mathematics</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600">B.Sc. Mathematics</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">8</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.Sc. Chemistry</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600" >
                                        B.Sc. Chemistry  </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">9</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.Sc. Physics</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b"> English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600">
                                        B.Sc. Physics
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">10</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Sc. Botany</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600">	B.Sc. Botany</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">11</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Sc. Zoology</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r"> English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600"> 	B.Sc. Zoology</td>
                                </tr>
                                <tr >
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">12</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Sc. Computer Science</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600" rowSpan={2}>B.Sc. Computer Science / B.Sc. I.T./B.C.A./Software Development (or) Any other degree equivalent accepted by the Syndicate.</td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">13</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">		M.Sc. Information Tech.</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">14</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">		M.SC. Geography</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600">B.Sc., Geography</td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">15</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.A. JOURNALISM and MASS COMMUNICATION	</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600">A Bachelor’s degree in any discipline from a recognized university, preferably with a background or interest in Media Studies, Communication, or related fields.</td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">16</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Com.	</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600"> A Bachelor’s degree in Commerce (B.Com)</td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">17</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Com. (Financial Management)	</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600"> A Bachelor’s degree in Commerce (B.Com), or a related field such as Business Administration or Economics, from a recognized university.</td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">18</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">M.Com. (Bank Management)</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600"> A Bachelor’s degree in Commerce (B.Com) or equivalent, or any related degree in Banking, Finance, or Business Administration from a recognized university.</td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">19</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">M.Com. (Computer Application)</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600">A Bachelor’s degree in Commerce (B.Com), Computer Science, Information Technology, or a related field from a recognized university.</td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">20</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">M.Sc. YOGA for HUMAN EXCELLENCE</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600"> Bachelor's degree in any discipline, preferably with a background in Yoga, Physical Education, or Health Sciences.</td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">21</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">M.H.R.M. – HUMAN RESOURCE MANAGEMENT</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600">Bachelor's degree in any discipline, with preference for Commerce, Business Administration, or Social Sciences.</td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">22</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">M.L.I.S. Master of Library & Information Science (one year programme)</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600">Bachelor's degree in any discipline, preference for B.L.I.S. or related fields.





                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PG
