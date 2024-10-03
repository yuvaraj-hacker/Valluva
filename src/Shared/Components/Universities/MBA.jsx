import React from 'react'

function MBA() {
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
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	Master of Business Administration(MBA)</td>
                                <td className="py-2 px-4 text-sm text-gray-600 border-r border-b">	English</td>
                                <td className="py-2 px-4 text-sm text-gray-600 " >
                                Any undergraduate degree from this university or an equivalent (10 + 2 + 3), including B.E./B.Tech., with a minimum of 50% marks in Part III.                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </section>

        </>
    )
}

export default MBA
