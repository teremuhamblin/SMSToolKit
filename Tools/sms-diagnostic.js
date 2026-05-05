/*
 * sms-diagnostic.js — Diagnostic rapide pour SMSToolKit
 * Analyse : longueur, encodage, segmentation, UCS-2, GSM-7
 */

function detectEncoding(text) {
    const gsm7 =
        /^[\x00-\x7F€£¥èéùìòÇØøÅåΔΦΓΛΩΠΨΣΘΞÆæßÉ!"#%&'()*+,\-.\/0-9:;<=>?A-Z_ÄÖÑÜ§¿a-zäöñüà\s]*$/.test(
            text
        );

    return gsm7 ? "GSM-7" : "UCS-2";
}

function smsDiagnostic(text) {
    const encoding = detectEncoding(text);
    const limit = encoding === "GSM-7" ? 160 : 70;
    const segmentSize = encoding === "GSM-7" ? 153 : 67;

    const length = text.length;
    const segments = Math.ceil(length / segmentSize);

    return {
        encoding,
        length,
        limit,
        segments,
        segmentSize,
    };
}

// Exemple d'utilisation
window.runSmsDiagnostic = function () {
    const text = document.getElementById("sms-input").value;
    const result = smsDiagnostic(text);
    document.getElementById("sms-output").innerText = JSON.stringify(result, null, 2);
};
