import React from 'react'
import SpaceXLogo from './SpaceXLogo'

export default function AppHeader() {
    return (
        <div id="header">
            <div className="flex justify-center px-16 py-8 sm:justify-start">
                <div className="">
                    <SpaceXLogo className="text-xs"/>
                </div>
                <ul className="hidden pt-2 ml-8 space-x-4 list-none sm:flex">
                    <li className="text-sm font-bold tracking-tighter uppercase"><a href="#">Falcon 9</a></li>
                    <li className="text-sm font-bold tracking-tighter uppercase"><a href="#">Falcon Heavy</a></li>
                    <li className="text-sm font-bold tracking-tighter uppercase"><a href="#">Dragon</a></li>
                    <li className="text-sm font-bold tracking-tighter uppercase"><a href="#">Starship</a></li>
                    <li className="text-sm font-bold tracking-tighter uppercase"><a href="#">Human Spaceflight</a></li>
                    <li className="text-sm font-bold tracking-tighter uppercase"><a href="#">Rideshare</a></li>
                </ul>
                <ul className="hidden pt-2 list-none sm:flex">
                    <li className="text-sm font-bold tracking-tighter uppercase"><a href="#">Shop</a></li>
                </ul>
            </div>
        </div>
    )
}
