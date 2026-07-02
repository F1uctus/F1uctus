// Renders GitHub stats cards to static SVGs using github-readme-stats sources.
// Run from inside a github-readme-stats checkout: node render-stats.mjs <out-dir>
import { writeFileSync, mkdirSync } from "node:fs";
import fetchStats from "./src/fetchers/stats.js";
import fetchTopLanguages from "./src/fetchers/top-languages.js";
import renderStatsCard from "./src/cards/stats.js";
import { renderTopLanguages } from "./src/cards/top-languages.js";

const USER = "F1uctus";
const OUT = process.argv[2] ?? "gen";
mkdirSync(OUT, { recursive: true });

const stats = await fetchStats(USER, true);
const langs = await fetchTopLanguages(USER);

const statsOpts = { show_icons: true, hide_border: true, hide_title: true };
const langsOpts = { layout: "compact", hide_border: true };

writeFileSync(`${OUT}/stats-dark.svg`, renderStatsCard(stats, { ...statsOpts, theme: "gruvbox" }));
writeFileSync(`${OUT}/stats-light.svg`, renderStatsCard(stats, { ...statsOpts, theme: "gruvbox_light" }));
writeFileSync(`${OUT}/langs-dark.svg`, renderTopLanguages(langs, { ...langsOpts, theme: "gruvbox" }));
writeFileSync(`${OUT}/langs-light.svg`, renderTopLanguages(langs, { ...langsOpts, theme: "gruvbox_light" }));
console.log("done");
