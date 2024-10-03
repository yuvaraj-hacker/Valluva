import React from 'react'

function Seperate() {
    return (
        <>
            <section className="max-w-[80rem] px-5 mx-auto py-10">
                <h2 className="text-2xl font-bold text-blue-900 mb-5">
                    UG Non-Semester Programmes
                </h2>
                <p className="text-sm text-gray-700 mb-2">
                    Duration for B.A, B. Lit, B.Sc, B.B.A, B.Com Programmes: 3 Years
                </p>
                <p className="text-sm text-gray-700 mb-6">
                    Duration for B.L.I.S Programme: 1 Year
                </p>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                        <thead>
                            <tr className=" border-b">
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                    Sl. No.
                                </th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                    Name of the Programme
                                </th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                    Medium
                                </th>
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                                    Eligibility
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className=" ">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A. Tamil</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil</td>
                                <td className="py-2 px-4 text-sm text-gray-600 " rowSpan={2}>
                                    A pass in 10 + 2 with Tamil as a Language paper for BA Tamil
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">2</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">B.Lit. Tamil</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">Tamil</td>
                            </tr>
                            <tr className="">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A. Economics</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil</td>
                                <td className="py-2 px-4 text-sm text-gray-600"></td>
                            </tr>
                            <tr className="">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">4</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A. English</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600"></td>
                            </tr>
                            <tr className="">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">5</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A. History</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil</td>
                                <td className="py-2 px-4 text-sm text-gray-600">
                                    A pass in Higher Secondary Examination (10+2)
                                </td>
                            </tr>
                            <tr className="">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">6</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.A. Public Administration</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600"></td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">7</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">B.A. Political Science</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600"></td>
                            </tr>
                            <tr className="">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">8</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.B.A.</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil & English</td>
                                <td className="py-2 px-4 text-sm text-gray-600" rowSpan={3}>
                                    Eligibility for B.B.A., B.Com ., B.Com., Computer Applications, B.Com., Bank Management –
                                    A pass in Higher Secondary Examination (10 + 2) with Commerce and Accountancy. 20% of seats may be reserved for Vocational Stream. The candidate who has passed a Diploma in Commerce or Modern Office Practice (3 years) of equivalent awarded by the Directorate of Technical Education / National Council of Vocational Training is eligible for lateral entry to 2nd year
                                </td>
                            </tr>
                            <tr className="">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">9</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">B.Com.</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">Tamil & English</td>
                                <td className="py-2 px-4 text-sm text-gray-600">
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">10</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">B.Com. (Bank Management)</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600"></td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">11</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">B.Sc.
                                    Mathematics</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">Tamil & English</td>
                                <td className="py-2 px-4 text-sm text-gray-600"> A pass in the Higher Secondary Examination (10 + 2) with Mathematics as one of the core subjects.</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">12</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. Chemistry</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600">A pass in the Higher Secondary Examination (10 + 2) with Chemistry as one of the core subjects.</td>
                            </tr>
                            <tr className=" border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">13</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. Physics</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600">A pass in the Higher Secondary Examination (10 + 2) with Physics as one of the core subjects.</td>
                            </tr>
                            <tr className=" border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">14</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. Botany</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600">A pass in Higher Secondary Examination (10 + 2) with Botany or Biology with Chemistry.</td>
                            </tr>
                            <tr className=" border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">15</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. Zoology</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600">A pass in 10 +2 with Mathematics, Physics, Chemistry and Biology or Physics, Chemistry, Botany and Zoology or Biology as one of the core subjects.</td>
                            </tr>
                            <tr className=" border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">16</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">B.Sc.
                                    Geography</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600">A pass in the Higher Secondary Examination, (10 + 2)</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">17</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. Computer Science</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600" rowSpan={2}>A pass in the Higher Secondary Examination (10 + 2) with Computer Science or Mathematics as one of the core subjects.</td>
                            </tr>
                            <tr className=" border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">18</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc.
                                    Information Technology</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600"></td>
                            </tr>
                            <tr className=" border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">19</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">B.C.A. (COMPUTER APPLICATIONS)</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600">	A pass in the Higher Secondary Examination (10 + 2) with Mathematics as one of the core subjects.</td>
                            </tr>
                            <tr className=" border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">20</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Lib.I.Sc.(one year programme)</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">English</td>
                                <td className="py-2 px-4 text-sm text-gray-600">A pass in any UG Degree (after 10th and +2)</td>
                            </tr>
                            <tr className=" border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">21</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">B.A. AFZAL-UL-ULAMA</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                <td className="py-2 px-4 text-sm text-gray-600"></td>
                            </tr>

                            <tr className=" border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">22</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Com. Computer Application</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                <td className="py-2 px-4 text-sm text-gray-600"></td>
                            </tr>
                            <tr className=" border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">23</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. Hospital Administration</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                <td className="py-2 px-4 text-sm text-gray-600"></td>
                            </tr>
                            <tr className=" border-b">
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">24</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r">	B.Sc. YOGA FOR HUMAN EXCELLENCE</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                <td className="py-2 px-4 text-sm text-gray-600"></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-blue-900 mb-5">
                        PG Non-Semester Programmes
                    </h2>
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
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Sl. No.
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Name of the Programme
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Medium
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
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
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600"></td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">16</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Com.	</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600"></td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">17</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">	M.Com. (Financial Management)	</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600"></td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">18</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">M.Com. (Bank Management)</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600"></td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">19</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">M.Com. (Computer Application)</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600"></td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">20</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">M.Sc. YOGA for HUMAN EXCELLENCE</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600"></td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">21</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">M.H.R.M. – HUMAN RESOURCE MANAGEMENT</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600"></td>
                                </tr>
                                <tr className=" border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">22</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r">M.L.I.S. Master of Library & Information Science (one year programme)</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-blue-900 mb-5">
                        MBA
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                            <thead>
                                <tr className=" border-b">
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Sl. No.
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Name of the Programme
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Medium
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                                        Eligibility
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	M.B.A.</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 " >
                                        Any UG Degree of this University or an equivalent examination accepted by the Syndicate thereto (10 + 2 + 3) including B.E./B.Tech. with a minimum of 50% marks in Part III
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-blue-900 mb-5">
                        MCA
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                            <thead>
                                <tr className=" border-b">
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Sl. No.
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Name of the Programme
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Medium
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                                        Eligibility
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">		M.C.A. PROGRAMME</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 " >

                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">2</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">		M.C.A. LATERAL ENTRY</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 " >

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-blue-900 mb-5">
                        DIPLOMA PROGRAMMES
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                            <thead>
                                <tr className=" border-b">
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Sl. No.
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Name of the Programme
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Duration
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                                        Eligibility
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">1</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">P.G.D.C.A.</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600 " >
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">2</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">P.G. Diploma in Geoinformatics</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600 " >
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">3</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">P.G. Diploma in Intellectual Property Rights</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600 "  >
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">4</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">P.G. Diploma in Bioinformatics</td>
                                    <td className="py-2 px-4 text-sm text-gray-600 border-r border-b"></td>
                                    <td className="py-2 px-4 text-sm text-gray-600 "  >
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-blue-900 mb-5">
                        DIPLOMA & CERTIFICATE PROGRAMMES
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                            <thead>
                                <tr className=" border-b">
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Sl. No.
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Name of the Programme
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-r">
                                        Duration
                                    </th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
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

export default Seperate
