// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes, pathname }) => {
    // ✅ Add <html lang="en">
    setHtmlAttributes({ lang: "en" });

    // The lightweight landing variant does not use Maps or address search.
    if (/^\/local-ky(?:\/|$)/.test(pathname || "")) return;

    // ✅ Keep your Google Maps script
    setHeadComponents([
        <script
            key="google-maps"
            src={`https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&libraries=places`}
            async
            defer
        />,
    ]);
};
