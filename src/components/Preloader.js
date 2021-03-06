import React from "react";
import '../scss/Preloader.scss';

export default function Preloader() {
    return (
        <div data-testid='preloader' className="app app_preloader">
            <div className="lds-hourglass"></div>
        </div>
    );
}
