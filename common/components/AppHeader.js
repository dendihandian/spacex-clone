import React from 'react'
import SpaceXLogo from './SpaceXLogo'

export default function AppHeader() {
    return (
        <div id="header">
            <div className="px-16 py-8 flex justify-center sm:justify-start">
                <div className="">
                    <SpaceXLogo className="text-xs"/>
                </div>
                <ul className="list-none flex px-2">
                    <li className="mx-2 mt-1 uppercase font-bold tracking-tighter">Falcon 9</li>
                    <li className="mx-2 mt-1 uppercase font-bold tracking-tighter">Falcon Heavy</li>
                    <li className="mx-2 mt-1 uppercase font-bold tracking-tighter">Dragon</li>
                    <li className="mx-2 mt-1 uppercase font-bold tracking-tighter">Starship</li>
                    <li className="mx-2 mt-1 uppercase font-bold tracking-tighter">Human Spaceflight</li>
                    <li className="mx-2 mt-1 uppercase font-bold tracking-tighter">Rideshare</li>
                </ul>
            </div>
        </div>
    )
}
