import { fenceOptions } from "../data/fenceOptions";

export function calculateFenceRange(selection) {
    const { fenceType, style, height, post, top, color, feet, gate } = selection;

    if (!fenceType || !style || !height || !post || !top || !color || !feet) {
        return null;
    }

    const config = fenceOptions[fenceType];
    if (!config) return null;

    const styleItem = config.styles.find((x) => x.id === style);
    const postItem = config.posts.find((x) => x.id === post);
    const topItem = config.tops.find((x) => x.id === top);
    const colorItem = config.colors.find((x) => x.id === color);
    const heightAdd = config.heights[height];

    if (!styleItem || !postItem || !topItem || !colorItem || !heightAdd) {
        return null;
    }

    let lowPerFt =
        config.baseRange[0] +
        styleItem.add[0] +
        heightAdd[0] +
        postItem.add[0] +
        topItem.add[0] +
        colorItem.add[0];

    let highPerFt =
        config.baseRange[1] +
        styleItem.add[1] +
        heightAdd[1] +
        postItem.add[1] +
        topItem.add[1] +
        colorItem.add[1];

    let gateLow = 0;
    let gateHigh = 0;

    if (gate === "single") {
        gateLow = 250;
        gateHigh = 600;
    }

    if (gate === "double") {
        gateLow = 700;
        gateHigh = 1600;
    }

    const feetNum = Number(feet);

    const lowTotal = Math.round(lowPerFt * feetNum + gateLow);
    const highTotal = Math.round(highPerFt * feetNum + gateHigh);

    return {
        lowPerFt: Math.round(lowPerFt),
        highPerFt: Math.round(highPerFt),
        lowTotal,
        highTotal,
    };
}