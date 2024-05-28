import React from 'react'
import { StateCard } from '../common/states-card'
import { ConfusedIcon, DizzyIcon, SickIcon } from '@/assets/icons'


export const Header = () => {
    return (
        <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 gap-7 mb-7 md:mb-12">
            <StateCard dataKeys={["Critical", "Status", "Current Status of site"]} dataValue={[]} />
            <div className="bg-green-500 p-4 pb-5 px-8 text-white rounded-lg">
                <div className=" grid place-content-center bg-white p-[6px] size-9 rounded-md mb-4">
                    <DizzyIcon />
                </div>
                <h2 className="text-[22px] font-semibold mb-3">Undetermined</h2>
                <h3 className="text-[17px]">Source</h3>
                <p className="text-[13px]">Current Power Source</p>
            </div>
            <div className="bg-orange-400 p-4 pb-5 px-8 text-white rounded-lg">
                <div className=" grid place-content-center bg-white p-[6px] size-9 rounded-md mb-4">
                    <ConfusedIcon />
                </div>
                <h2 className="text-[22px] font-semibold mb-3">Infinitehr</h2>
                <h3 className="text-[17px]">Estimated Backup</h3>
                <p className="text-[13px]">Current Battery Backup Available</p>
            </div>
            <div className="bg-indigo-950 p-4 pb-5 px-8 text-white rounded-lg">
                <div className=" grid place-content-center bg-white p-[6px] size-9 rounded-md mb-4">
                    <SickIcon />
                </div>
                <h2 className="text-[22px] font-semibold mb-3">Site Load</h2>
                <h3 className="text-[17px]">0kW</h3>
                <p className="text-[13px]">Current Site Load</p>
            </div>
        </div>
    )
}

