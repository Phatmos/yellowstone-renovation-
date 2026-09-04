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
                { text: "Composite Deck Installation", link: "/cities/danville-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/danville-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/danville-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/danville-ky/windows" },
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
                { text: "Composite Decks", link: "/cities/georgetown-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/georgetown-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/georgetown-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/georgetown-ky/windows" },
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
                { text: "Composite Deck Installation", link: "/cities/richmond-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/richmond-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/richmond-ky/james-hardie-siding" },
                { text: "Energy-Efficient Windows", link: "/cities/richmond-ky/windows" },
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
                { text: "Composite Deck Installation", link: "/cities/nicholasville-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/nicholasville-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/nicholasville-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/nicholasville-ky/windows" },
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
                { text: "Composite Deck Installation", link: "/cities/frankfort-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/frankfort-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/frankfort-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/frankfort-ky/windows" },
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
                { text: "Composite Deck Installation", link: "/cities/versailles-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/versailles-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/versailles-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/versailles-ky/windows" },
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
                { text: "Composite Deck Installation", link: "/cities/winchester-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/winchester-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/winchester-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/winchester-ky/windows" },
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
                { text: "Composite Deck Installation", link: "/cities/berea-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/berea-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/berea-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/berea-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/berea-ky/" },
            ],
        },

        {
            name: "Lexington, KY",
            region: "Fayette County",
            image: "/images/city/deck-siding-lexington-40.webp",
            link: "/cities/lexington-ky/",
            services: [
                { text: "Deck Builder Lexington KY", link: "/cities/lexington-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/lexington-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/lexington-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/lexington-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/lexington-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/lexington-ky/" },
            ],
        },

        {
            name: "Athens, KY",
            region: "Fayette County",
            image: "/images/city/deck-siding-lexington-7.webp",
            link: "/cities/athens-ky/",
            services: [
                { text: "Deck Builder Athens KY", link: "/cities/athens-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/athens-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/athens-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/athens-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/athens-ky/windows" },
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
                { text: "Composite Deck Installation", link: "/cities/avon-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/avon-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/avon-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/avon-ky/windows" },
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
                { text: "Composite Deck Installation", link: "/cities/bracktown-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/bracktown-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/bracktown-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/bracktown-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/bracktown-ky/" },
            ],
        },

        {
            name: "Meadowthorpe, KY",
            region: "Fayette County",
            image: "/images/city/deck-siding-lexington-9.webp",
            link: "/cities/meadowthorpe-ky/",
            services: [
                { text: "Deck Builder Meadowthorpe KY", link: "/cities/meadowthorpe-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/meadowthorpe-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/meadowthorpe-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/meadowthorpe-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/meadowthorpe-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/meadowthorpe-ky/" },
            ],
        },

        {
            name: "Hamburg, KY",
            region: "Fayette County",
            image: "/images/city/deck-siding-lexington-31.webp",
            link: "/cities/hamburg-ky/",
            services: [
                { text: "Deck Builder Hamburg KY", link: "/cities/hamburg-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/hamburg-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/hamburg-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/hamburg-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/hamburg-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/hamburg-ky/" },
            ],
        },

        {
            name: "Wilmore, KY",
            region: "Jessamine County",
            image: "/images/city/deck-siding-lexington-5.webp",
            link: "/cities/wilmore-ky/",
            services: [
                { text: "Deck Builder Wilmore KY", link: "/cities/wilmore-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/wilmore-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/wilmore-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/wilmore-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/wilmore-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/wilmore-ky/" },
            ],
        },

        {
            name: "Keene, KY",
            region: "Jessamine County",
            image: "/images/city/deck-siding-lexington-1.webp",
            link: "/cities/keene-ky/",
            services: [
                { text: "Deck Builder Keene KY", link: "/cities/keene-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/keene-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/keene-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/keene-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/keene-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/keene-ky/" },
            ],
        },

        {
            name: "Brannon Woods, KY",
            region: "Jessamine County",
            image: "/images/city/deck-siding-lexington-26.webp",
            link: "/cities/brannon-woods-ky/",
            services: [
                { text: "Deck Builder Brannon Woods KY", link: "/cities/brannon-woods-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/brannon-woods-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/brannon-woods-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/brannon-woods-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/brannon-woods-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/brannon-woods-ky/" },
            ],
        },

        {
            name: "Waco, KY",
            region: "Madison County",
            image: "/images/city/deck-siding-lexington-14.webp",
            link: "/cities/waco-ky/",
            services: [
                { text: "Deck Builder Waco KY", link: "/cities/waco-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/waco-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/waco-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/waco-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/waco-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/waco-ky/" },
            ],
        },

        {
            name: "Kingston, KY",
            region: "Madison County",
            image: "/images/city/deck-siding-lexington-17.webp",
            link: "/cities/kingston-ky/",
            services: [
                { text: "Deck Builder Kingston KY", link: "/cities/kingston-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/kingston-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/kingston-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/kingston-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/kingston-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/kingston-ky/" },
            ],
        },

        {
            name: "Union City, KY",
            region: "Madison County",
            image: "/images/city/deck-siding-lexington-33.webp",
            link: "/cities/union-city-ky/",
            services: [
                { text: "Deck Builder Union City KY", link: "/cities/union-city-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/union-city-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/union-city-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/union-city-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/union-city-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/union-city-ky/" },
            ],
        },

        {
            name: "Valley View, KY",
            region: "Madison County",
            image: "/images/city/deck-siding-lexington-20.webp",
            link: "/cities/valley-view-ky/",
            services: [
                { text: "Deck Builder Valley View KY", link: "/cities/valley-view-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/valley-view-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/valley-view-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/valley-view-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/valley-view-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/valley-view-ky/" },
            ],
        },

        {
            name: "Midway, KY",
            region: "Woodford County",
            image: "/images/city/deck-siding-lexington-4.webp",
            link: "/cities/midway-ky/",
            services: [
                { text: "Deck Builder Midway KY", link: "/cities/midway-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/midway-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/midway-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/midway-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/midway-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/midway-ky/" },
            ],
        },

        {
            name: "Millville, KY",
            region: "Woodford County",
            image: "/images/city/deck-siding-lexington-30.webp",
            link: "/cities/millville-ky/",
            services: [
                { text: "Deck Builder Millville KY", link: "/cities/millville-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/millville-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/millville-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/millville-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/millville-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/millville-ky/" },
            ],
        },

        {
            name: "Nonesuch, KY",
            region: "Woodford County",
            image: "/images/city/deck-siding-lexington-10.webp",
            link: "/cities/nonesuch-ky/",
            services: [
                { text: "Deck Builder Nonesuch KY", link: "/cities/nonesuch-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/nonesuch-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/nonesuch-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/nonesuch-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/nonesuch-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/nonesuch-ky/" },
            ],
        },

        {
            name: "Stamping Ground, KY",
            region: "Scott County",
            image: "/images/city/deck-siding-lexington-18.webp",
            link: "/cities/stamping-ground-ky/",
            services: [
                { text: "Deck Builder Stamping Ground KY", link: "/cities/stamping-ground-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/stamping-ground-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/stamping-ground-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/stamping-ground-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/stamping-ground-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/stamping-ground-ky/" },
            ],
        },

        {
            name: "Sadieville, KY",
            region: "Scott County",
            image: "/images/city/deck-siding-lexington-22.webp",
            link: "/cities/sadieville-ky/",
            services: [
                { text: "Deck Builder Sadieville KY", link: "/cities/sadieville-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/sadieville-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/sadieville-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/sadieville-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/sadieville-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/sadieville-ky/" },
            ],
        },

        {
            name: "Ford, KY",
            region: "Clark County",
            image: "/images/city/deck-siding-lexington-8.webp",
            link: "/cities/ford-ky/",
            services: [
                { text: "Deck Builder Ford KY", link: "/cities/ford-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/ford-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/ford-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/ford-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/ford-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/ford-ky/" },
            ],
        },

        {
            name: "Trapp, KY",
            region: "Clark County",
            image: "/images/city/deck-siding-lexington-36.webp",
            link: "/cities/trapp-ky/",
            services: [
                { text: "Deck Builder Trapp KY", link: "/cities/trapp-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/trapp-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/trapp-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/trapp-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/trapp-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/trapp-ky/" },
            ],
        },

        {
            name: "Lawrenceburg, KY",
            region: "Anderson County",
            image: "/images/city/deck-siding-lexington-12.webp",
            link: "/cities/lawrenceburg-ky/",
            services: [
                { text: "Deck Builder Lawrenceburg KY", link: "/cities/lawrenceburg-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/lawrenceburg-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/lawrenceburg-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/lawrenceburg-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/lawrenceburg-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/lawrenceburg-ky/" },
            ],
        },

        {
            name: "Stringtown, KY",
            region: "Anderson County",
            image: "/images/city/deck-siding-lexington-21.webp",
            link: "/cities/stringtown-ky/",
            services: [
                { text: "Deck Builder Stringtown KY", link: "/cities/stringtown-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/stringtown-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/stringtown-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/stringtown-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/stringtown-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/stringtown-ky/" },
            ],
        },

        {
            name: "Paris, KY",
            region: "Bourbon County",
            image: "/images/city/deck-siding-lexington-25.webp",
            link: "/cities/paris-ky/",
            services: [
                { text: "Deck Builder Paris KY", link: "/cities/paris-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/paris-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/paris-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/paris-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/paris-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/paris-ky/" },
            ],
        },

        {
            name: "North Middletown, KY",
            region: "Bourbon County",
            image: "/images/city/deck-siding-lexington-35.webp",
            link: "/cities/north-middletown-ky/",
            services: [
                { text: "Deck Builder North Middletown KY", link: "/cities/north-middletown-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/north-middletown-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/north-middletown-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/north-middletown-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/north-middletown-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/north-middletown-ky/" },
            ],
        },

        {
            name: "Cynthiana, KY",
            region: "Harrison County",
            image: "/images/city/deck-siding-lexington-29.webp",
            link: "/cities/cynthiana-ky/",
            services: [
                { text: "Deck Builder Cynthiana KY", link: "/cities/cynthiana-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/cynthiana-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/cynthiana-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/cynthiana-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/cynthiana-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/cynthiana-ky/" },
            ],
        },

        {
            name: "Mount Sterling, KY",
            region: "Montgomery County",
            image: "/images/city/deck-siding-lexington-16.webp",
            link: "/cities/mount-sterling-ky/",
            services: [
                { text: "Deck Builder Mount Sterling KY", link: "/cities/mount-sterling-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/mount-sterling-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/mount-sterling-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/mount-sterling-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/mount-sterling-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/mount-sterling-ky/" },
            ],
        },

        {
            name: "Camargo, KY",
            region: "Montgomery County",
            image: "/images/city/deck-siding-lexington-28.webp",
            link: "/cities/camargo-ky/",
            services: [
                { text: "Deck Builder Camargo KY", link: "/cities/camargo-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/camargo-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/camargo-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/camargo-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/camargo-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/camargo-ky/" },
            ],
        },

        {
            name: "Jeffersonville, KY",
            region: "Montgomery County",
            image: "/images/city/deck-siding-lexington-24.webp",
            link: "/cities/jeffersonville-ky/",
            services: [
                { text: "Deck Builder Jeffersonville KY", link: "/cities/jeffersonville-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/jeffersonville-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/jeffersonville-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/jeffersonville-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/jeffersonville-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/jeffersonville-ky/" },
            ],
        },

        {
            name: "Lancaster, KY",
            region: "Garrard County",
            image: "/images/city/deck-siding-lexington-32.webp",
            link: "/cities/lancaster-ky/",
            services: [
                { text: "Deck Builder Lancaster KY", link: "/cities/lancaster-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/lancaster-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/lancaster-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/lancaster-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/lancaster-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/lancaster-ky/" },
            ],
        },
        {
            name: "Louisville, KY",
            region: "Jefferson County",
            image: "/images/city/deck-siding-lexington-1.webp",
            link: "/cities/louisville-ky/",
            services: [
                { text: "Deck Builder Louisville KY", link: "/cities/louisville-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/louisville-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/louisville-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/louisville-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/louisville-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/louisville-ky/" },
            ],
        },

        {
            name: "Bryantsville, KY",
            region: "Garrard County",
            image: "/images/city/deck-siding-lexington-37.webp",
            link: "/cities/bryantsville-ky/",
            services: [
                { text: "Deck Builder Bryantsville KY", link: "/cities/bryantsville-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/bryantsville-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/bryantsville-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/bryantsville-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/bryantsville-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/bryantsville-ky/" },
            ],
        },

        {
            name: "Harrodsburg, KY",
            region: "Mercer County",
            image: "/images/city/deck-siding-lexington-38.webp",
            link: "/cities/harrodsburg-ky/",
            services: [
                { text: "Deck Builder Harrodsburg KY", link: "/cities/harrodsburg-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/harrodsburg-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/harrodsburg-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/harrodsburg-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/harrodsburg-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/harrodsburg-ky/" },
            ],
        },

        {
            name: "Burgin, KY",
            region: "Mercer County",
            image: "/images/city/deck-siding-lexington-39.webp",
            link: "/cities/burgin-ky/",
            services: [
                { text: "Deck Builder Burgin KY", link: "/cities/burgin-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/burgin-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/burgin-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/burgin-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/burgin-ky/windows" },
                { text: "Exterior Remodeling", link: "/cities/burgin-ky/" },
            ],
        },

        {
            name: "Florence, KY",
            region: "Boone County",
            image: "/images/city/deck-siding-lexington-32.webp",
            link: "/cities/florence-ky/",
            services: [
                { text: "Deck Builder Florence KY", link: "/cities/florence-ky/deck-builder" },
                { text: "Composite Deck Installation", link: "/cities/florence-ky/composite-decking" },
                { text: "Vinyl Siding Installation", link: "/cities/florence-ky/vinyl-siding" },
                { text: "James Hardie Siding", link: "/cities/florence-ky/james-hardie-siding" },
                { text: "Window Replacement", link: "/cities/florence-ky/windows" },
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
