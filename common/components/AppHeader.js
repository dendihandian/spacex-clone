import React from 'react'
import SpaceXLogo from './SpaceXLogo'

export default function AppHeader() {
    return (
        <div id="header">
            <div className="px-16 py-8 flex justify-center sm:justify-start">
                <SpaceXLogo className="text-xs"/>
            </div>
        </div>
    )
}
