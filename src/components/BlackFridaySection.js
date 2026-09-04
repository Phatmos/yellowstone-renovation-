import React, { useEffect, useState } from "react";
import * as styles from "../styles/BlackFridaySection.module.css";

const BlackFridaySection = () => {
    const [step, setStep] = useState(1);

    const [zip, setZip] = useState("");
    const [zipError, setZipError] = useState("");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const [timeLeft, setTimeLeft] = useState({});
    const [expired, setExpired] = useState(false);

    // ------------------------------
    // 25-DAY COUNTDOWN
    // ------------------------------
    useEffect(() => {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 25);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endDate - now;

            if (distance <= 0) {
                setExpired(true);
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // ------------------------------
    // ZIP validation
    // ------------------------------
    const handleZipChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 5) setZip(value);

        if (value.length === 5) {
            setZipError("");
        } else if (value.length > 0) {
            setZipError("ZIP code must be 5 digits");
        } else {
            setZipError("");
        }
    };

    const isZipValid = zip.length === 5;
    const isStep2Valid = name.length > 1 && phone.length >= 10;

    // ------------------------------
    // SEND TO EMAIL — WORKING
    // ------------------------------
    const handleSubmit = async () => {
        setLoading(true);
        setSubmitError("");

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/renovationyellowstone@gmail.com",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        _subject: "Black Friday Deal Lead",
                        _template: "table",
                        _captcha: "false",

                        zip,
                        name,
                        phone,
                        message: "Customer requested Black Friday 15% OFF deal",
                        timestamp: new Date().toLocaleString(),
                    }),
                }
            );

            const data = await response.json();

            if (data.success === "true" || data.success === true) {
                window.location.href = "/thank-you/";
            } else {
                setSubmitError("Something went wrong. Try again.");
            }
        } catch (err) {
            setSubmitError("Network error. Try again.");
        }

        setLoading(false);
    };

    return (
        <div className={styles.section}>
            <div className={styles.shineLayer}></div>
            <div className={styles.goldRings}></div>

            <h2 className={styles.title}>
                Black Friday <span className={styles.goldText}>15% OFF</span>
            </h2>

            <p className={styles.sub}>
                Lock in the discount today — build your deck in spring.
            </p>

            {/* Countdown */}
            {!expired ? (
                <div className={styles.countdownBox}>
                    <div className={styles.countItem}>
                        <span>{timeLeft.days}</span> days
                    </div>
                    <div className={styles.countItem}>
                        <span>{timeLeft.hours}</span> hr
                    </div>
                    <div className={styles.countItem}>
                        <span>{timeLeft.minutes}</span> min
                    </div>
                    <div className={styles.countItem}>
                        <span>{timeLeft.seconds}</span> sec
                    </div>
                </div>
            ) : (
                <div className={styles.expiredBox}>
                    Offer no longer available.
                </div>
            )}

            <div className={styles.formCard}>
                <div className={styles.steps}>
                    <div className={`${styles.stepDot} ${step === 1 ? styles.activeStep : ""}`}>1</div>
                    <div className={styles.stepLine}></div>
                    <div className={`${styles.stepDot} ${step === 2 ? styles.activeStep : ""}`}>2</div>
                </div>

                {/* STEP 1 */}
                {step === 1 && (
                    <>
                        <input
                            type="text"
                            placeholder="Enter ZIP"
                            className={styles.input}
                            value={zip}
                            autoComplete="postal-code"
                            onChange={handleZipChange}
                        />

                        {zipError && <p className={styles.error}>{zipError}</p>}

                        <button
                            className={styles.primaryBtn}
                            disabled={!isZipValid}
                            onClick={() => setStep(2)}
                        >
                            Continue →
                        </button>
                    </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className={styles.input}
                            value={name}
                            autoComplete="name"
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="tel"
                            placeholder="Phone"
                            className={styles.input}
                            value={phone}
                            autoComplete="tel"
                            onChange={(e) =>
                                setPhone(e.target.value.replace(/\D/g, ""))
                            }
                        />

                        {submitError && <p className={styles.error}>{submitError}</p>}

                        <button
                            className={styles.primaryBtn}
                            disabled={!isStep2Valid || loading}
                            onClick={handleSubmit}
                        >
                            {loading ? "Submitting…" : "Submit →"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default BlackFridaySection;
