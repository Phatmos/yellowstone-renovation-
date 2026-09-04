import React, { useMemo, useState } from "react";
import { fenceOptions, gateOptions } from "../data/fenceOptions";
import { calculateFenceRange } from "../data/calculateFenceRange";
import * as styles from "../styles/FenceEstimateCalculator.module.css";

const fenceTypes = Object.entries(fenceOptions).map(([id, item]) => ({
    id,
    label: item.label,
    image: item.image,
    description: `Explore ${item.label.toLowerCase()} fence styles`,
}));

const marginOptions = [
    { id: "10", label: "10%" },
    { id: "15", label: "15%" },
    { id: "20", label: "20%" },
    { id: "25", label: "25%" },
    { id: "30", label: "30%" },
    { id: "35", label: "35%" },
];

const initialState = {
    fenceType: "",
    style: "",
    height: "",
    post: "",
    top: "",
    color: "",
    singleGates: 0,
    doubleGates: 0,
    feet: "",
    margin: "20",
};

export default function FenceEstimateCalculator() {
    const [step, setStep] = useState(0);
    const [selection, setSelection] = useState(initialState);

    const currentFence = fenceOptions[selection.fenceType];
    const result = useMemo(() => calculateFenceRange(selection), [selection]);

    const update = (field, value) => {
        setSelection((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const resetAfterFenceType = (fenceType) => {
        setSelection({
            fenceType,
            style: "",
            height: "",
            post: "",
            top: "",
            color: "",
            singleGates: 0,
            doubleGates: 0,
            feet: "",
            margin: "20",
        });
    };

    const restart = () => {
        setSelection(initialState);
        setStep(0);
    };

    const back = () => {
        if (step > 0) setStep((prev) => prev - 1);
    };

    const next = () => {
        if (step < 10 && canNext()) {
            setStep((prev) => prev + 1);
        }
    };

    const canNext = () => {
        if (step === 0) return true;
        if (step === 1) return !!selection.fenceType;
        if (step === 2) return !!selection.style;
        if (step === 3) return !!selection.height;
        if (step === 4) return !!selection.post;
        if (step === 5) return !!selection.top;
        if (step === 6) return !!selection.color;
        if (step === 7) return true;
        if (step === 8) return !!selection.feet && Number(selection.feet) > 0;
        if (step === 9) return !!selection.margin;
        return true;
    };

    const renderImageCards = (items, selectedValue, onSelect) => {
        return (
            <div className={styles.grid}>
                {items.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        className={`${styles.card} ${selectedValue === item.id ? styles.activeCard : ""}`}
                        onClick={() => onSelect(item.id)}
                    >
                        <div className={styles.imageWrap}>
                            <img
                                src={item.image || "/images/fences/placeholder.jpg"}
                                alt={item.label}
                                className={styles.image}
                                onError={(e) => {
                                    e.currentTarget.src = "/images/fences/placeholder.jpg";
                                }}
                            />
                        </div>

                        <div className={styles.cardBody}>
                            <div className={styles.cardLabel}>{item.label}</div>
                            {item.description && (
                                <div className={styles.cardDescription}>{item.description}</div>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        );
    };

    const summaryLabel = (items, value) => {
        return items.find((x) => x.id === value)?.label || "-";
    };

    const changeGateCount = (field, action) => {
        setSelection((prev) => {
            const currentValue = Number(prev[field] || 0);
            let nextValue = currentValue;

            if (action === "minus") {
                nextValue = Math.max(0, currentValue - 1);
            }

            if (action === "plus") {
                nextValue = Math.min(10, currentValue + 1);
            }

            return {
                ...prev,
                [field]: nextValue,
            };
        });
    };

    const getGateSummary = () => {
        const single = Number(selection.singleGates || 0);
        const double = Number(selection.doubleGates || 0);

        if (single === 0 && double === 0) return "No Gate";
        if (single > 0 && double === 0) return "Single Gate Only";
        if (single === 0 && double > 0) return "Double Gate Only";
        return "Mixed Gates";
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1>Fence Estimate Calculator</h1>
                <button
                    type="button"
                    className={styles.secondaryBtn}
                    onClick={restart}
                >
                    Start New Project
                </button>
            </div>

            <div className={styles.stepText}>Step {step + 1} of 11</div>

            <div className={styles.panel}>
                {step === 0 && (
                    <div className={styles.heroStart}>
                        <div className={styles.heroOverlay} />
                        <div className={styles.heroStartInner}>
                            <h2 className={styles.heroTitle}>Start Project</h2>
                            <p className={styles.heroSubtitle}>
                                Build a quick visual estimate with the customer step by step.
                            </p>
                            <button
                                type="button"
                                className={styles.primaryBtn}
                                onClick={next}
                            >
                                Start
                            </button>
                        </div>
                    </div>
                )}

                {step === 1 && (
                    <>
                        <h2 className={styles.sectionTitle}>Choose Fence Type</h2>
                        {renderImageCards(
                            fenceTypes,
                            selection.fenceType,
                            resetAfterFenceType
                        )}
                    </>
                )}

                {step === 2 && currentFence && (
                    <>
                        <h2 className={styles.sectionTitle}>Choose Style</h2>
                        {renderImageCards(currentFence.styles, selection.style, (id) =>
                            update("style", id)
                        )}
                    </>
                )}

                {step === 3 && currentFence && (
                    <>
                        <h2 className={styles.sectionTitle}>Choose Height</h2>
                        <div className={styles.optionRow}>
                            {Object.keys(currentFence.heights).map((height) => (
                                <button
                                    key={height}
                                    type="button"
                                    className={`${styles.optionBtn} ${selection.height === height ? styles.activeOption : ""}`}
                                    onClick={() => update("height", height)}
                                >
                                    {height} ft
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {step === 4 && currentFence && (
                    <>
                        <h2 className={styles.sectionTitle}>Choose Post</h2>
                        {renderImageCards(currentFence.posts, selection.post, (id) =>
                            update("post", id)
                        )}
                    </>
                )}

                {step === 5 && currentFence && (
                    <>
                        <h2 className={styles.sectionTitle}>Choose Cap / Top Style</h2>
                        {renderImageCards(currentFence.tops, selection.top, (id) =>
                            update("top", id)
                        )}
                    </>
                )}

                {step === 6 && currentFence && (
                    <>
                        <h2 className={styles.sectionTitle}>Choose Color / Finish</h2>
                        {renderImageCards(currentFence.colors, selection.color, (id) =>
                            update("color", id)
                        )}
                    </>
                )}

                {step === 7 && (
                    <>
                        <h2 className={styles.sectionTitle}>Choose Gates</h2>
                        {renderImageCards(gateOptions, "", () => { })}

                        <div className={styles.counterGrid}>
                            <div className={styles.counterCard}>
                                <div className={styles.counterTitle}>Single Gates</div>
                                <div className={styles.counterControls}>
                                    <button
                                        type="button"
                                        className={styles.counterBtn}
                                        onClick={() => changeGateCount("singleGates", "minus")}
                                    >
                                        −
                                    </button>

                                    <div className={styles.counterValue}>
                                        {selection.singleGates}
                                    </div>

                                    <button
                                        type="button"
                                        className={styles.counterBtn}
                                        onClick={() => changeGateCount("singleGates", "plus")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className={styles.counterCard}>
                                <div className={styles.counterTitle}>Double Gates</div>
                                <div className={styles.counterControls}>
                                    <button
                                        type="button"
                                        className={styles.counterBtn}
                                        onClick={() => changeGateCount("doubleGates", "minus")}
                                    >
                                        −
                                    </button>

                                    <div className={styles.counterValue}>
                                        {selection.doubleGates}
                                    </div>

                                    <button
                                        type="button"
                                        className={styles.counterBtn}
                                        onClick={() => changeGateCount("doubleGates", "plus")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {step === 8 && (
                    <>
                        <h2 className={styles.sectionTitle}>Total Linear Feet</h2>
                        <div className={styles.feetBox}>
                            <input
                                type="number"
                                min="1"
                                placeholder="Enter total linear feet"
                                value={selection.feet}
                                onChange={(e) => update("feet", e.target.value)}
                                className={styles.input}
                            />
                        </div>
                    </>
                )}

                {step === 9 && (
                    <>
                        <h2 className={styles.sectionTitle}>Choose Margin</h2>
                        <div className={styles.optionRow}>
                            {marginOptions.map((option) => (
                                <button
                                    key={option.id}
                                    type="button"
                                    className={`${styles.optionBtn} ${selection.margin === option.id ? styles.activeOption : ""}`}
                                    onClick={() => update("margin", option.id)}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {step === 10 && result && (
                    <>
                        <h2 className={styles.sectionTitle}>Approximate Price Range</h2>

                        <div className={styles.summary}>
                            <div>
                                <strong>Fence Type:</strong> {currentFence?.label || "-"}
                            </div>
                            <div>
                                <strong>Style:</strong>{" "}
                                {currentFence ? summaryLabel(currentFence.styles, selection.style) : "-"}
                            </div>
                            <div>
                                <strong>Height:</strong> {selection.height} ft
                            </div>
                            <div>
                                <strong>Post:</strong>{" "}
                                {currentFence ? summaryLabel(currentFence.posts, selection.post) : "-"}
                            </div>
                            <div>
                                <strong>Top:</strong>{" "}
                                {currentFence ? summaryLabel(currentFence.tops, selection.top) : "-"}
                            </div>
                            <div>
                                <strong>Color:</strong>{" "}
                                {currentFence ? summaryLabel(currentFence.colors, selection.color) : "-"}
                            </div>
                            <div>
                                <strong>Gate Setup:</strong> {getGateSummary()}
                            </div>
                            <div>
                                <strong>Single Gates:</strong> {selection.singleGates || 0}
                            </div>
                            <div>
                                <strong>Double Gates:</strong> {selection.doubleGates || 0}
                            </div>
                            <div>
                                <strong>Linear Feet:</strong> {selection.feet || 0}
                            </div>
                            <div>
                                <strong>Margin:</strong> {selection.margin || 0}%
                            </div>
                        </div>

                        <div className={styles.resultBox}>
                            <div className={styles.resultLine}>
                                <span>Approx. base total:</span>
                                <strong>
                                    ${result.baseTotal.toLocaleString()}
                                </strong>
                            </div>

                            <div className={styles.resultLine}>
                                <span>Approx. price per linear foot:</span>
                                <strong>
                                    ${result.lowPerFt} - ${result.highPerFt}
                                </strong>
                            </div>

                            <div className={styles.resultLine}>
                                <span>Approx. total:</span>
                                <strong>
                                    ${result.lowTotal.toLocaleString()} - ${result.highTotal.toLocaleString()}
                                </strong>
                            </div>
                        </div>

                        <p className={styles.note}>
                            This is a rough budget estimate only. Final price may change after
                            exact measurements, site conditions, demolition needs, access,
                            slope, gate hardware, and material availability.
                        </p>
                    </>
                )}
            </div>

            <div className={styles.footer}>
                <button
                    type="button"
                    className={styles.secondaryBtn}
                    onClick={back}
                    disabled={step === 0}
                >
                    Back
                </button>

                {step < 10 ? (
                    <button
                        type="button"
                        className={styles.primaryBtn}
                        onClick={next}
                        disabled={!canNext()}
                    >
                        Next
                    </button>
                ) : (
                    <button
                        type="button"
                        className={styles.primaryBtn}
                        onClick={restart}
                    >
                        Start Over
                    </button>
                )}
            </div>
        </div>
    );
}