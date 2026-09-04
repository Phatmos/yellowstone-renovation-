import React, { useState, useEffect } from "react";
import "../styles/DeckQuoteForm.css";

const TOTAL_STEPS = 8;

const initialData = {
    zipCode: "",
    city: "",
    street: "",
    projectCategory: "build_replace",
    deckSize: "100_300",
    floors: "one",
    material: "composite",
    timeline: "planning",
    details: "",
    name: "",
    email: "",
    phone: "",
};

const lookupZipCity = (zip) => {
    switch (zip) {
        case "40356": return "Nicholasville, KY";
        case "40390": return "Wilmore, KY";
        case "40340": return "Keene, KY";
        case "40502": case "40503": case "40504": case "40505": case "40507":
        case "40508": case "40509": case "40510": case "40511": case "40513":
        case "40514": case "40515": case "40516": case "40517":
            return "Lexington, KY";
        case "40601": case "40602": case "40603": case "40604":
        case "40618": case "40619":
            return "Frankfort, KY";
        case "40383": case "40384": return "Versailles, KY";
        case "40324": return "Georgetown, KY";
        case "40342": case "40350": return "Lawrenceburg, KY";
        case "40475": case "40476": return "Richmond, KY";
        case "40391": case "40392": return "Winchester, KY";
        case "40361": case "40362": return "Paris, KY";
        case "40330": return "Harrodsburg, KY";
        case "40422": case "40423": return "Danville, KY";
        case "40353": return "Mt Sterling, KY";
        case "40311": return "Cynthiana, KY";
        case "40336": return "Irvine, KY";
        case "40444": return "Lancaster, KY";
        default:
            return "";
    }
};

const calculatePriceRange = ({ deckSize, material, floors }) => {
    let minSq = 120;
    let maxSq = 220;

    if (deckSize === "under_100") {
        minSq = 80;
        maxSq = 100;
    } else if (deckSize === "over_300") {
        minSq = 300;
        maxSq = 420;
    }

    let minPer = 30;
    let maxPer = 55;

    if (material === "wood") {
        minPer = 25;
        maxPer = 40;
    } else if (material === "composite") {
        minPer = 40;
        maxPer = 70;
    }

    if (floors === "two_plus") {
        minPer *= 1.3;
        maxPer *= 1.3;
    }

    const low = Math.round(minSq * minPer);
    const high = Math.round(maxSq * maxPer);

    return { low, high };
};

export default function DeckQuoteForm() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState(initialData);
    const [error, setError] = useState("");
    const [submitMessage, setSubmitMessage] = useState("");
    const [zipCity, setZipCity] = useState("");
    const [loadingEstimate, setLoadingEstimate] = useState(false);

    useEffect(() => {
        const navType = performance.getEntriesByType("navigation")[0].type;
        if (navType === "reload") {
            localStorage.removeItem("deck_estimate_saved");
            localStorage.removeItem("estimate_loaded_once");
        }
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem("deck_estimate_saved");
        if (saved) {
            const parsed = JSON.parse(saved);
            setData(parsed.data);
            setZipCity(lookupZipCity(parsed.data.zipCode));
            setStep(8);
        }
    }, []);

    const autoSendEmail = async (finalData) => {
        try {
            await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    _subject: "AUTO Deck Estimate Request",
                    ...finalData,
                    timestamp: new Date().toLocaleString(),
                }),
            });
        } catch (e) {
            console.error("Auto email error", e);
        }
    };

    useEffect(() => {
        if (step === 8) {
            const estimateShown = localStorage.getItem("estimate_loaded_once");

            const range = calculatePriceRange(data);
            const fullData = {
                ...data,
                estimated_low: range.low,
                estimated_high: range.high,
            };

            if (!estimateShown) {
                setLoadingEstimate(true);

                setTimeout(() => {
                    setLoadingEstimate(false);
                    localStorage.setItem("estimate_loaded_once", "1");
                    localStorage.setItem("deck_estimate_saved", JSON.stringify({ data }));
                    autoSendEmail(fullData);
                }, 3000);
            } else {
                localStorage.setItem("deck_estimate_saved", JSON.stringify({ data }));
                autoSendEmail(fullData);
            }
        }
    }, [step]);

    const handleChange = (field) => (e) => {
        setData((prev) => ({ ...prev, [field]: e.target.value }));
        setError("");
    };

    const handleZipChange = (e) => {
        const value = e.target.value.replace(/[^\d]/g, "");
        setData((prev) => ({ ...prev, zipCode: value }));

        if (/^\d{5}$/.test(value)) {
            setZipCity(lookupZipCity(value));
        } else {
            setZipCity("");
        }
    };

    const scrollTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    const next = () => {
        if (step === 1 && !data.zipCode) {
            setError("ZIP code is required.");
            return;
        }
        if (step === 2 && (!data.street || !data.city)) {
            setError("Please enter your full address.");
            return;
        }
        if (step === 3 && !data.projectCategory) {
            setError("Select your project type.");
            return;
        }
        if (step === 4 && !data.deckSize) {
            setError("Select deck size.");
            return;
        }
        if (step === 5 && (!data.material || !data.floors)) {
            setError("Please complete this step.");
            return;
        }
        if (step === 6 && !data.timeline) {
            setError("Select your project timeline.");
            return;
        }
        if (step === 7 && !data.phone) {
            setError("Phone number is required.");
            return;
        }

        setError("");
        setStep((s) => Math.min(TOTAL_STEPS, s + 1));
        scrollTop();
    };

    const back = () => {
        setError("");
        setStep((s) => Math.max(1, s - 1));
        scrollTop();
    };

    const livePriceRange = calculatePriceRange(data);
    const progressPercent = Math.round((step / TOTAL_STEPS) * 100);

    return (
        <div className="dq-page">

            {loadingEstimate && (
                <div className="dq-preloader">
                    <div className="dq-preloader-box">
                        <div className="dq-spin"></div>
                        <h2>Preparing your custom estimate…</h2>
                    </div>
                </div>
            )}

            <header className="dq-header">
                <div className="dq-header-inner">
                    <img src="/favicon.png" className="dq-logo" />
                    <div className="dq-header-text">
                        <h1>Compare quotes from local Deck & Porch Builders</h1>
                        <p>Answer a few quick questions to get a personalized estimate.</p>
                    </div>
                </div>
            </header>

            <main className="dq-main">
                <div className="dq-main-inner">
                    <div className="dq-card">

                        <div className="dq-progress">
                            <div
                                className="dq-progress-bar"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>

                        <div className="dq-step-label">
                            STEP {step} OF {TOTAL_STEPS}
                        </div>

                        {error && <div className="dq-error">{error}</div>}
                        {submitMessage && <div className="dq-success">{submitMessage}</div>}

                        <form onSubmit={(e) => e.preventDefault()}>

                            {/* STEP 1 */}
                            {step === 1 && (
                                <>
                                    <h2 className="dq-title">Enter your project location</h2>
                                    <label className="dq-label">
                                        ZIP code
                                        <input
                                            type="text"
                                            value={data.zipCode}
                                            onChange={handleZipChange}
                                            className="dq-input"
                                            placeholder="40356"
                                            maxLength={5}
                                            autoComplete="postal-code"
                                        />
                                    </label>
                                    {zipCity && <div className="dq-zip-city">{zipCity}</div>}
                                </>
                            )}

                            {/* STEP 2 */}
                            {step === 2 && (
                                <>
                                    <h2 className="dq-title">What's your address?</h2>
                                    <label className="dq-label">
                                        Street
                                        <input
                                            type="text"
                                            value={data.street}
                                            onChange={handleChange("street")}
                                            className="dq-input"
                                            placeholder="123 Main St"
                                            autoComplete="address-line1"
                                        />
                                    </label>

                                    <label className="dq-label">
                                        City
                                        <input
                                            type="text"
                                            value={data.city}
                                            onChange={handleChange("city")}
                                            className="dq-input"
                                            placeholder="Nicholasville"
                                            autoComplete="address-level2"
                                        />
                                    </label>
                                </>
                            )}

                            {/* STEP 3 */}
                            {step === 3 && (
                                <>
                                    <h2 className="dq-title">What describes your project?</h2>

                                    <div className="dq-radio-group">
                                        {[
                                            ["build_new", "Build a NEW deck"],
                                            ["replace", "Replace an old deck"],
                                            ["rebuild", "Rebuild (tear-down & build new)"],
                                            ["repair", "Repair existing deck"],
                                            ["clean_seal", "Clean / Seal / Restore"],
                                        ].map(([val, label]) => (
                                            <label className="dq-radio-card" key={val}>
                                                <input
                                                    type="radio"
                                                    name="projectType"
                                                    value={val}
                                                    checked={data.projectCategory === val}
                                                    onChange={() => setData({ ...data, projectCategory: val })}
                                                />
                                                <span>{label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* STEP 4 */}
                            {step === 4 && (
                                <>
                                    <h2 className="dq-title">Deck size?</h2>

                                    <div className="dq-radio-group">
                                        <label className="dq-radio-card">
                                            <input
                                                type="radio"
                                                name="deckSize"
                                                value="under_100"
                                                checked={data.deckSize === "under_100"}
                                                onChange={handleChange("deckSize")}
                                            />
                                            <span>Under 100 sq. ft.</span>
                                        </label>

                                        <label className="dq-radio-card">
                                            <input
                                                type="radio"
                                                name="deckSize"
                                                value="100_300"
                                                checked={data.deckSize === "100_300"}
                                                onChange={handleChange("deckSize")}
                                            />
                                            <span>100–300 sq. ft.</span>
                                        </label>

                                        <label className="dq-radio-card">
                                            <input
                                                type="radio"
                                                name="deckSize"
                                                value="over_300"
                                                checked={data.deckSize === "over_300"}
                                                onChange={handleChange("deckSize")}
                                            />
                                            <span>Over 300 sq. ft.</span>
                                        </label>
                                    </div>
                                </>
                            )}

                            {/* STEP 5 */}
                            {step === 5 && (
                                <>
                                    <h2 className="dq-title">Structure & material</h2>

                                    <p className="dq-subtitle">Levels?</p>
                                    <div className="dq-radio-group dq-radio-inline">
                                        <label className="dq-radio-chip">
                                            <input
                                                type="radio"
                                                name="floors"
                                                value="one"
                                                checked={data.floors === "one"}
                                                onChange={handleChange("floors")}
                                            />
                                            <span>1 level</span>
                                        </label>

                                        <label className="dq-radio-chip">
                                            <input
                                                type="radio"
                                                name="floors"
                                                value="two_plus"
                                                checked={data.floors === "two_plus"}
                                                onChange={handleChange("floors")}
                                            />
                                            <span>2+ levels</span>
                                        </label>
                                    </div>

                                    <p className="dq-subtitle">Material?</p>
                                    <div className="dq-radio-group dq-radio-inline">
                                        <label className="dq-radio-chip">
                                            <input
                                                type="radio"
                                                name="material"
                                                value="composite"
                                                checked={data.material === "composite"}
                                                onChange={handleChange("material")}
                                            />
                                            <span>Composite</span>
                                        </label>

                                        <label className="dq-radio-chip">
                                            <input
                                                type="radio"
                                                name="material"
                                                value="wood"
                                                checked={data.material === "wood"}
                                                onChange={handleChange("material")}
                                            />
                                            <span>Wood</span>
                                        </label>

                                        <label className="dq-radio-chip">
                                            <input
                                                type="radio"
                                                name="material"
                                                value="not_sure"
                                                checked={data.material === "not_sure"}
                                                onChange={handleChange("material")}
                                            />
                                            <span>Not sure</span>
                                        </label>
                                    </div>
                                </>
                            )}

                            {/* STEP 6 */}
                            {step === 6 && (
                                <>
                                    <h2 className="dq-title">When do you need the work?</h2>

                                    <div className="dq-radio-group">
                                        <label className="dq-radio-card">
                                            <input
                                                type="radio"
                                                name="timeline"
                                                value="within_2_weeks"
                                                checked={data.timeline === "within_2_weeks"}
                                                onChange={handleChange("timeline")}
                                            />
                                            <span>Within 2 weeks</span>
                                        </label>

                                        <label className="dq-radio-card">
                                            <input
                                                type="radio"
                                                name="timeline"
                                                value="more_than_2_weeks"
                                                checked={data.timeline === "more_than_2_weeks"}
                                                onChange={handleChange("timeline")}
                                            />
                                            <span>More than 2 weeks</span>
                                        </label>

                                        <label className="dq-radio-card">
                                            <input
                                                type="radio"
                                                name="timeline"
                                                value="planning"
                                                checked={data.timeline === "planning"}
                                                onChange={handleChange("timeline")}
                                            />
                                            <span>Still planning</span>
                                        </label>
                                    </div>

                                    <textarea
                                        className="dq-textarea"
                                        rows={4}
                                        value={data.details}
                                        onChange={handleChange("details")}
                                        placeholder="Example: 12x16 composite deck…"
                                    />
                                </>
                            )}

                            {/* STEP 7 — PHONE */}
                            {step === 7 && (
                                <>
                                    <h2 className="dq-title">How can we contact you?</h2>

                                    <label className="dq-label">
                                        Phone number
                                        <input
                                            type="tel"
                                            className="dq-input"
                                            value={data.phone}
                                            placeholder="(859) 123-4567"
                                            onChange={handleChange("phone")}
                                            autoComplete="tel"
                                        />
                                    </label>

                                    {error && <div className="dq-error">{error}</div>}
                                </>
                            )}

                            {/* STEP 8 — FINAL ESTIMATE + APPOINTMENT OPTIONS */}
                            {step === 8 && (
                                <div className="dq-estimate-block">
                                    <h3>Your estimated project cost</h3>

                                    <p className="dq-result-price">
                                        ${livePriceRange.low.toLocaleString()} – ${livePriceRange.high.toLocaleString()}
                                    </p>

                                    <p className="dq-result-note">
                                        Final cost may vary depending on railings, stairs, structure height, and design.
                                    </p>
 
                                    {/* 👉 Schedule Appointment = goes to calendar (Step 9) */}
                                    <button
                                        type="button"
                                        className="dq-btn-primary dq-btn-wide"
                                        onClick={() => setStep(9)}
                                    >
                                        Schedule Appointment
                                    </button>

                                    {/* 👉 UPDATED: FREE DESIGN → /contact/ */}
                                    <a href="/contact/" className="dq-btn-secondary dq-btn-wide">
                                        Get a Free Design
                                    </a>

                                    <a href="tel:18597657267" className="dq-btn-tertiary dq-btn-wide">
                                        Call (859) 765-7267
                                    </a>
                                </div>
                            )}

                            {/* STEP 9 — Appointment Date + Time */}
                            {step === 9 && (
                                <>
                                    <h2 className="dq-title">Choose your appointment day</h2>

                                    {/* CALENDAR */}
                                    <div className="calendar-grid">
                                        {Array.from({ length: 14 }).map((_, i) => {
                                            const d = new Date();
                                            d.setDate(d.getDate() + i);

                                            const label = d.toLocaleDateString("en-US", {
                                                weekday: "short",
                                                month: "short",
                                                day: "numeric",
                                            });

                                            return (
                                                <div
                                                    key={i}
                                                    className={`calendar-cell ${data.apptDate === d.toISOString().split("T")[0] ? "active" : ""}`}
                                                    onClick={() =>
                                                        setData({ ...data, apptDate: d.toISOString().split("T")[0] })
                                                    }
                                                >
                                                    {label}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <h2 className="dq-title" style={{ marginTop: "1.5rem" }}>
                                        Select a time
                                    </h2>

                                    <div className="time-grid">
                                        {[
                                            "08:00 AM", "09:00 AM", "10:00 AM",
                                            "11:00 AM", "12:00 PM", "01:00 PM",
                                            "02:00 PM", "03:00 PM", "04:00 PM",
                                            "05:00 PM", "06:00 PM",
                                        ].map((t) => (
                                            <div
                                                key={t}
                                                className={`time-cell ${data.apptTime === t ? "active" : ""}`}
                                                onClick={() => setData({ ...data, apptTime: t })}
                                            >
                                                {t}
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        className="dq-btn-primary dq-btn-wide"
                                        onClick={async () => {
                                            if (!data.apptDate || !data.apptTime) {
                                                setError("Please select both date and time.");
                                                return;
                                            }

                                            setError("");

                                            await fetch("/api/lead", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    Accept: "application/json",
                                                },
                                                body: JSON.stringify({
                                                    _subject: "New Deck Appointment",
                                                    ...data,
                                                    appointment_date: data.apptDate,
                                                    appointment_time: data.apptTime,
                                                    timestamp: new Date().toLocaleString(),
                                                }),
                                            });

                                            window.location.href = "/thank-you/";
                                        }}
                                    >
                                        Confirm Appointment →
                                    </button>

                                    {error && <div className="dq-error">{error}</div>}

                                    <button type="button" className="dq-btn-secondary" onClick={() => setStep(8)}>
                                        Back
                                    </button>
                                </>
                            )}

                            <div className="dq-actions">
                                {step > 1 && step < 8 && (
                                    <button
                                        type="button"
                                        className="dq-btn-secondary"
                                        onClick={back}
                                    >
                                        Back
                                    </button>
                                )}

                                {step < TOTAL_STEPS && (
                                    <button
                                        type="button"
                                        className="dq-btn-primary"
                                        onClick={next}
                                    >
                                        Next
                                    </button>
                                )}
                            </div>

                        </form>
                    </div>
                </div>
            </main>

            <footer className="dq-footer">
                <div className="dq-footer-inner">
                    <img src="/favicon.png" className="dq-logo-small" />
                    <span>© {new Date().getFullYear()} Yellowstone Renovation</span>
                </div>
            </footer>

        </div>
    );
}
