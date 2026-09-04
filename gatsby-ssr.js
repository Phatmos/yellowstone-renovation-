// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
    // ✅ Add <html lang="en">
    setHtmlAttributes({ lang: "en" });

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
