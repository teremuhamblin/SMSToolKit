#!/usr/bin/env node
/**
 * generate-config.js — Générateur de configuration SMSToolKit
 * Usage : node generate-config.js --smsc "+123456789" --encoding "UCS-2"
 */

import fs from "fs";
import path from "path";

const args = Object.fromEntries(
    process.argv.slice(2).map((arg) => {
        const [key, value] = arg.replace("--", "").split("=");
        return [key, value];
    })
);

const templatePath = path.join("templates", "config-template.json");
const outputPath = path.join("output-config.json");

if (!fs.existsSync(templatePath)) {
    console.error("[ERROR] Template introuvable :", templatePath);
    process.exit(1);
}

const template = JSON.parse(fs.readFileSync(templatePath, "utf8"));

if (args.smsc) template.smsc = args.smsc;
if (args.encoding) template.encoding = args.encoding;
if (args.senderId) template.senderId = args.senderId;

fs.writeFileSync(outputPath, JSON.stringify(template, null, 4));

console.log("=== SMSToolKit — Générateur de configuration ===");
console.log("Configuration générée :", outputPath);
