import { Resolution, Margin, Options } from "react-to-pdf";

export const pdfoptions: Options = {
    filename: "advanced-example.pdf",
    method: "save",
    resolution: Resolution.MEDIUM,
    page: {
        margin: Margin.MEDIUM,
        orientation: "landscape"
    },
    canvas: {
        mimeType: "image/jpeg",
        qualityRatio: 2
    },

    overrides: {
        pdf: {
            compress: true
        },
        canvas: {
            useCORS: true
        }
    }
};