// Generates generated/toolbox-{dark,light}.svg — a borderless 2x2 grid of
// labeled icon rows. Icons are inlined as data URIs so the SVG is self-contained.
// Run: node scripts/gen-toolbox.mjs
import { writeFileSync, mkdirSync } from "node:fs";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const ICONS = {
  python: [`${DEVICON}/python/python-original.svg`, "Python"],
  c: [`${DEVICON}/c/c-original.svg`, "C"],
  ocaml: [`${DEVICON}/ocaml/ocaml-original.svg`, "OCaml"],
  typescript: [`${DEVICON}/typescript/typescript-original.svg`, "TypeScript"],
  typst: ["https://cdn.simpleicons.org/typst", "Typst"],
  rocq: ["https://raw.githubusercontent.com/F1uctus/kalman.v/main/paper/images/icon-rocq-orange.svg", "Rocq"],
  go: [`${DEVICON}/go/go-original.svg`, "Go"],
  java: [`${DEVICON}/java/java-original.svg`, "Java"],
  spring: [`${DEVICON}/spring/spring-original.svg`, "Spring"],
  dart: [`${DEVICON}/dart/dart-original.svg`, "Dart"],
  flutter: [`${DEVICON}/flutter/flutter-original.svg`, "Flutter"],
  csharp: [`${DEVICON}/csharp/csharp-original.svg`, "C#"],
  llvm: [{ dark: "https://cdn.simpleicons.org/llvm/9aa7b3", light: "https://cdn.simpleicons.org/llvm" }, "LLVM"],
  spacy: ["https://cdn.simpleicons.org/spacy", "spaCy"],
  postgresql: [`${DEVICON}/postgresql/postgresql-original.svg`, "PostgreSQL"],
  docker: [`${DEVICON}/docker/docker-original.svg`, "Docker"],
  nixos: [`${DEVICON}/nixos/nixos-original.svg`, "NixOS"],
};

const GROUPS = [
  { label: "I write daily", icons: ["python", "c", "ocaml", "typescript", "typst"], col: 0, row: 0 },
  { label: "Proof assistants I use", icons: ["rocq"], col: 1, row: 0 },
  { label: "I make enterprise software in", icons: ["go", "java", "spring", "dart", "flutter", "csharp"], col: 0, row: 1 },
  { label: "Keeps ending up on my desk", icons: ["llvm", "spacy", "postgresql", "docker", "nixos"], col: 1, row: 1 },
];

const ICON = 28, PITCH = 36;
const COL_X = [2, 490];
const ROW_LABEL_Y = [15, 79];
const ROW_ICON_Y = [26, 90];
const WIDTH = 700, HEIGHT = 122;
const FONT = "'Segoe UI', Ubuntu, 'Helvetica Neue', Arial, sans-serif";
const THEMES = { dark: "#e6edf3", light: "#1f2328" };

const dataUri = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const mime = url.endsWith(".png") ? "image/png" : "image/svg+xml";
  const buf = Buffer.from(await res.arrayBuffer());
  return `data:${mime};base64,${buf.toString("base64")}`;
};

// name -> { dark: uri, light: uri } (same uri for both when a single URL is given)
const uris = Object.fromEntries(
  await Promise.all(Object.entries(ICONS).map(async ([k, [url]]) => {
    if (typeof url === "string") {
      const uri = await dataUri(url);
      return [k, { dark: uri, light: uri }];
    }
    return [k, { dark: await dataUri(url.dark), light: await dataUri(url.light) }];
  })),
);

mkdirSync("generated", { recursive: true });
for (const [theme, textColor] of Object.entries(THEMES)) {
  let body = "";
  for (const g of GROUPS) {
    const x = COL_X[g.col];
    body += `  <text x="${x}" y="${ROW_LABEL_Y[g.row]}" font-family="${FONT}" font-size="15" font-weight="600" fill="${textColor}">${g.label}</text>\n`;
    g.icons.forEach((name, i) => {
      body += `  <image x="${x + i * PITCH}" y="${ROW_ICON_Y[g.row]}" width="${ICON}" height="${ICON}" href="${uris[name][theme]}"><title>${ICONS[name][1]}</title></image>\n`;
    });
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label="Toolbox">\n${body}</svg>\n`;
  writeFileSync(`generated/toolbox-${theme}.svg`, svg);
}
console.log("done");
