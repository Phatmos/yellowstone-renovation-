import React, { useState } from "react";
import "../styles/ServiceAreasGrid.css";

/* --- Inline SVG Icons (no external libs) --- */
const MapPinIcon = ({ size = 16, color = "#0a923d" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z"
            stroke={color}
            strokeWidth="2"
            fill="none"
        />
        <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2" fill="none" />
    </svg>
);

const HammerIcon = ({ size = 15, color = "#0a923d" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M14 4l6 6-2 2-6-6 2-2z" fill={color} />
        <path d="M3 21l7-7" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 5l2-2 3 3-2 2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export default function ServiceAreasGrid({ accent = "#0a923d" }) {
    const [areas] = useState([
        {
            name: "Danville, KY",
            region: "Boyle County",
            image: "/images/city/deck-siding-lexington-11.webp",
            link: "/cities/danville-ky/",
            services: [
                { text: "Deck Builder Danville KY", link: "/cities/danville-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/danville-ky/" },
            ],
        },

        {
            name: "Georgetown, KY",
            region: "Scott County",
            image: "/images/city/deck-siding-lexington-3.webp",
            link: "/cities/georgetown-ky/",
            services: [
                { text: "Deck Builder Georgetown KY", link: "/cities/georgetown-ky/deck-builder" },
                { text: "Composite Decks", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Home Remodeling", link: "/cities/georgetown-ky/" },
            ],
        },

        {
            name: "Richmond, KY",
            region: "Madison County",
            image: "/images/city/deck-siding-lexington-27.webp",
            link: "/cities/richmond-ky/",
            services: [
                { text: "Deck Builder Richmond KY", link: "/cities/richmond-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Energy-Efficient Windows", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/richmond-ky/" },
            ],
        },

        {
            name: "Nicholasville, KY",
            region: "Jessamine County",
            image: "/images/city/deck-siding-lexington-19.webp",
            link: "/cities/nicholasville-ky/",
            services: [
                { text: "Deck Builder Nicholasville KY", link: "/cities/nicholasville-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/nicholasville-ky/" },
            ],
        },

        {
            name: "Frankfort, KY",
            region: "Franklin County",
            image: "/images/city/deck-siding-lexington-6.webp",
            link: "/cities/frankfort-ky/",
            services: [
                { text: "Deck Builder Frankfort KY", link: "/cities/frankfort-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/frankfort-ky/" },
            ],
        },

        {
            name: "Versailles, KY",
            region: "Woodford County",
            image: "/images/city/deck-siding-lexington-34.webp",
            link: "/cities/versailles-ky/",
            services: [
                { text: "Deck Builder Versailles KY", link: "/cities/versailles-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/versailles-ky/" },
            ],
        },

        {
            name: "Winchester, KY",
            region: "Clark County",
            image: "/images/city/deck-siding-lexington-2.webp",
            link: "/cities/winchester-ky/",
            services: [
                { text: "Deck Builder Winchester KY", link: "/cities/winchester-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/winchester-ky/" },
            ],
        },

        {
            name: "Berea, KY",
            region: "Madison County",
            image: "/images/city/deck-siding-lexington-15.webp",
            link: "/cities/berea-ky/",
            services: [
                { text: "Deck Builder Berea KY", link: "/cities/berea-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/berea-ky/" },
            ],
        },

        {
            name: "Lexington, KY",
            region: "Fayette County",
            image: "/images/city/deck-siding-lexington-40.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Lexington KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Athens, KY",
            region: "Fayette County",
            image: "/images/city/deck-siding-lexington-7.webp",
            link: "/cities/athens-ky/",
            services: [
                { text: "Deck Builder Athens KY", link: "/cities/athens-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/athens-ky/" },
            ],
        },

        {
            name: "Avon, KY",
            region: "Fayette County",
            image: "/images/city/deck-siding-lexington-23.webp",
            link: "/cities/avon-ky/",
            services: [
                { text: "Deck Builder Avon KY", link: "/cities/avon-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/avon-ky/" },
            ],
        },

        {
            name: "Bracktown, KY",
            region: "Fayette County",
            image: "/images/city/deck-siding-lexington-13.webp",
            link: "/cities/bracktown-ky/",
            services: [
                { text: "Deck Builder Bracktown KY", link: "/cities/bracktown-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/bracktown-ky/" },
            ],
        },

        {
            name: "Meadowthorpe, KY",
            region: "Fayette County",
            image: "/images/city/deck-siding-lexington-9.webp",
            link: "/cities/meadowthorpe-ky/",
            services: [
                { text: "Deck Builder Meadowthorpe KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/meadowthorpe-ky/" },
            ],
        },

        {
            name: "Hamburg, KY",
            region: "Fayette County",
            image: "/images/city/deck-siding-lexington-31.webp",
            link: "/cities/hamburg-ky/",
            services: [
                { text: "Deck Builder Hamburg KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/hamburg-ky/" },
            ],
        },

        {
            name: "Wilmore, KY",
            region: "Jessamine County",
            image: "/images/city/deck-siding-lexington-5.webp",
            link: "/cities/wilmore-ky/",
            services: [
                { text: "Deck Builder Wilmore KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/wilmore-ky/" },
            ],
        },

        {
            name: "Keene, KY",
            region: "Jessamine County",
            image: "/images/city/deck-siding-lexington-1.webp",
            link: "/cities/keene-ky/",
            services: [
                { text: "Deck Builder Keene KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/keene-ky/" },
            ],
        },

        {
            name: "Brannon Woods, KY",
            region: "Jessamine County",
            image: "/images/city/deck-siding-lexington-26.webp",
            link: "/cities/brannon-woods-ky/",
            services: [
                { text: "Deck Builder Brannon Woods KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/brannon-woods-ky/" },
            ],
        },

        {
            name: "Waco, KY",
            region: "Madison County",
            image: "/images/city/deck-siding-lexington-14.webp",
            link: "/cities/waco-ky/",
            services: [
                { text: "Deck Builder Waco KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/waco-ky/" },
            ],
        },

        {
            name: "Kingston, KY",
            region: "Madison County",
            image: "/images/city/deck-siding-lexington-17.webp",
            link: "/cities/kingston-ky/",
            services: [
                { text: "Deck Builder Kingston KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/kingston-ky/" },
            ],
        },

        {
            name: "Union City, KY",
            region: "Madison County",
            image: "/images/city/deck-siding-lexington-33.webp",
            link: "/cities/union-city-ky/",
            services: [
                { text: "Deck Builder Union City KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/union-city-ky/" },
            ],
        },

        {
            name: "Valley View, KY",
            region: "Madison County",
            image: "/images/city/deck-siding-lexington-20.webp",
            link: "/cities/valley-view-ky/",
            services: [
                { text: "Deck Builder Valley View KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/valley-view-ky/" },
            ],
        },

        {
            name: "Midway, KY",
            region: "Woodford County",
            image: "/images/city/deck-siding-lexington-4.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Midway KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Millville, KY",
            region: "Woodford County",
            image: "/images/city/deck-siding-lexington-30.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Millville KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Nonesuch, KY",
            region: "Woodford County",
            image: "/images/city/deck-siding-lexington-10.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Nonesuch KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Stamping Ground, KY",
            region: "Scott County",
            image: "/images/city/deck-siding-lexington-18.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Stamping Ground KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Sadieville, KY",
            region: "Scott County",
            image: "/images/city/deck-siding-lexington-22.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Sadieville KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Ford, KY",
            region: "Clark County",
            image: "/images/city/deck-siding-lexington-8.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Ford KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Trapp, KY",
            region: "Clark County",
            image: "/images/city/deck-siding-lexington-36.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Trapp KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Lawrenceburg, KY",
            region: "Anderson County",
            image: "/images/city/deck-siding-lexington-12.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Lawrenceburg KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Stringtown, KY",
            region: "Anderson County",
            image: "/images/city/deck-siding-lexington-21.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Stringtown KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Paris, KY",
            region: "Bourbon County",
            image: "/images/city/deck-siding-lexington-25.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Paris KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "North Middletown, KY",
            region: "Bourbon County",
            image: "/images/city/deck-siding-lexington-35.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder North Middletown KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Cynthiana, KY",
            region: "Harrison County",
            image: "/images/city/deck-siding-lexington-29.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Cynthiana KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Mount Sterling, KY",
            region: "Montgomery County",
            image: "/images/city/deck-siding-lexington-16.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Mount Sterling KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Camargo, KY",
            region: "Montgomery County",
            image: "/images/city/deck-siding-lexington-28.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Camargo KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Jeffersonville, KY",
            region: "Montgomery County",
            image: "/images/city/deck-siding-lexington-24.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Jeffersonville KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Lancaster, KY",
            region: "Garrard County",
            image: "/images/city/deck-siding-lexington-32.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Lancaster KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },
        {
            name: "Louisville, KY",
            region: "Jefferson County",
            image: "/images/city/deck-siding-lexington-1.webp",
            link: "/cities/louisville-ky/",
            services: [
                { text: "Deck Builder Louisville KY", link: "/cities/louisville-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/louisville-ky/" },
            ],
        },

        {
            name: "Bryantsville, KY",
            region: "Garrard County",
            image: "/images/city/deck-siding-lexington-37.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Bryantsville KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Harrodsburg, KY",
            region: "Mercer County",
            image: "/images/city/deck-siding-lexington-38.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Harrodsburg KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Burgin, KY",
            region: "Mercer County",
            image: "/images/city/deck-siding-lexington-39.webp",
            link: "/cities/",
            services: [
                { text: "Deck Builder Burgin KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/" },
            ],
        },

        {
            name: "Florence, KY",
            region: "Boone County",
            image: "/images/city/deck-siding-lexington-32.webp",
            link: "/cities/florence-ky/",
            services: [
                { text: "Deck Builder Florence KY", link: "/deck-builder/" },
                { text: "Composite Deck Installation", link: "/composite-decks/" },
                { text: "Vinyl Siding Installation", link: "/vinyl-siding/" },
                { text: "James Hardie Siding", link: "/james-hardie-siding/" },
                { text: "Window Replacement", link: "/windows/" },
                { text: "Exterior Remodeling", link: "/cities/florence-ky/" },
            ],
        },


    ]);



    return (
        <section className="serviceareas-modern">
            <div className="serviceareas-container">
                <h1 className="serviceareas-title" style={{ color: accent }}>
                    Areas We Serve
                </h1>
                <p className="serviceareas-subtitle">
                    Yellowstone Renovation provides expert siding, windows, and exterior remodeling
                    across Central Kentucky. Choose your city below to explore local services and details.
                </p>

                <div className="serviceareas-modern-grid">
                    {areas.map((city, index) => (
                        <div className="modern-card" key={index}>
                            <div className="modern-image">
                                <img src={city.image} alt={city.name} />
                                <div className="overlay"></div>
                                <div className="city-info">
                                    <h2>{city.name}</h2>
                                    {city.region && (
                                        <p>
                                            <span className="icon">
                                                <MapPinIcon color="#ffffff" size={16} />
                                            </span>
                                            {city.region}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="modern-body">
                                <div className="tags">
                                    <span style={{ background: accent }}>Deck</span>
                                    <span style={{ background: "#0a7733" }}>Siding</span>
                                    <span style={{ background: "#0f552bff" }}>Windows</span>
                                </div>

                                <ul>
                                    {city.services?.map((service, i) => (
                                        <li key={i}>
                                            <span className="icon">
                                                <HammerIcon color={accent} size={15} />
                                            </span>
                                            <a href={service.link}>{service.text}</a>
                                        </li>
                                    ))}
                                </ul>

                                <a href={city.link} className="explore-btn" style={{ background: accent }}>
                                    Explore Details →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
