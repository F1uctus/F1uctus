## 👋 Hi there

Math BSc '26. My thesis formalizes Kalman filtering in the Rocq prover.
By day I build tooling that helps certify safety-critical embedded software.
Off-keyboard I'm usually into reading and also slowly learning Japanese.

<p float="left">
  <a href="https://t.me/F1uctus">
    <img width="32" hspace="5" title="Telegram" src="https://cdn.simpleicons.org/telegram" />
  </a>
  <a href="mailto:ilya.i.nikitin@proton.me">
    <img width="32" hspace="5" title="Proton Mail" src="https://cdn.simpleicons.org/protonmail" />
  </a>
  <a href="mailto:ilya.i.nikitin@mail.ru">
    <img width="32" hspace="5" title="Mail.ru" src="https://cdn.simpleicons.org/maildotru" />
  </a>
  <a href="https://reddit.com/u/F1uctus">
    <img width="32" hspace="5" title="Reddit" src="https://cdn.simpleicons.org/reddit" />
  </a>
  <a href="https://discordapp.com/users/430682719933038593">
    <img width="32" hspace="5" title="Discord" src="https://cdn.simpleicons.org/discord" />
  </a>
  <a href="https://gitlab.com/F1uctus">
    <img width="32" hspace="5" title="GitLab" src="https://cdn.simpleicons.org/gitlab" />
  </a>
  <a href="https://codeberg.org/f1uctus">
    <img width="32" hspace="5" title="Codeberg" src="https://cdn.simpleicons.org/codeberg" />
  </a>
</p>

### I'm working on

- 🧮 **Formal verification**:
  [kalman.v](https://github.com/F1uctus/kalman.v), my BSc thesis, the Kalman filter formalized in [Rocq](https://rocq-prover.org)+[MathComp](https://github.com/math-comp/math-comp)+[Infotheo](https://github.com/affeldt-aist/infotheo)+[CoqEAL](https://github.com/rocq-community/coqeal). It is largely dedicated to discrete Riccati theory and the algebraic Riccati equation, and written upon Kailath–Sayed–Hassibi's *Linear Estimation*. The extracted OCaml produces the numerical experiments for the thesis.
- 🛠️ **Certifiable embedded (full-time job)**:
  I write the tools verification teams run: static analysis and instrumentation of embedded C with LLVM/libclang; statement, decision and MC/DC code coverage; DO-178C / DO-330 tool qualification; air-gapped CI.
- ⚙️ **Language & tooling research**:
  [Axion](https://github.com/F1uctus/Axion), a long-running educational experiment: lexer, parser, C#/Python/Lua emitters. Smaller tools I maintain: [plint](https://github.com/F1uctus/plint), a PDF layout linter for frozen-print documents, and [rocq-comment-fmt](https://github.com/F1uctus/rocq-comment-fmt), a comment formatter for Rocq, both in OCaml; [vscode-scope-search](https://github.com/F1uctus/vscode-scope-search) for search & replace within semantic scopes; [typst-djvu](https://github.com/F1uctus/typst-djvu) for DjVu parsing in Typst (Rust → WASM); [textmate.typ](https://github.com/F1uctus/textmate.typ), a TextMate grammar converter.
- 🗣️ **NLP & ML**:
  [ttc](https://github.com/F1uctus/ttc) library for reading fiction and working out who is speaking: a spaCy pipeline (NER, coreference, span classification), ~80% attribution accuracy. [webanno2spacy](https://github.com/F1uctus/webanno2spacy) bridges WebAnno annotations to spaCy, on PyPI. Previously I also did research on Kolmogorov–Arnold networks ([KAN](https://github.com/F1uctus/unn-rnd-kan)) at uni.
- 📟 **Systems**:
  I port postmarketOS to phones I have on my shelf: mainline Linux 6.17+ and lk2nd on the [ZTE Blade S6](https://github.com/F1uctus/zte-blade-s6-postmarketos), with a new DRM driver for its JDI TD4291 panel; also I do experiments with Hexagon cDSP compute offload on the Redmi Note 9 Pro, patching the FastRPC kernel driver and userspace until signed DSP libraries load outside Android. An old Galaxy A8+ waits its turn.
- 📱 **Mobile**:  **storyteller**, a Flutter audiobook app with an embedded CPython runtime: the ttc pipeline runs on-device, reading EPUB/FB2/DjVu aloud with per-character voices. Getting spaCy onto a phone took python-for-android recipes for its whole C-extension stack (numpy, blis, thinc…), collected in [p4a-recipes](https://github.com/F1uctus/p4a-recipes).

### Toolbox

<table>
  <tr>
    <td><b>I write daily</b></td>
    <td>
      <a href="https://www.python.org"><img width="28" hspace="4" title="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /></a>
      <a href="https://www.open-std.org/jtc1/sc22/wg14/"><img width="28" hspace="4" title="C" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" /></a>
      <a href="https://ocaml.org"><img width="28" hspace="4" title="OCaml" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ocaml/ocaml-original.svg" /></a>
      <a href="https://www.typescriptlang.org"><img width="28" hspace="4" title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /></a>
      <a href="https://typst.app"><img width="28" hspace="4" title="Typst" src="https://cdn.simpleicons.org/typst" /></a>
    </td>
  </tr>
  <tr>
    <td><b>Proof assistants I know</b></td>
    <td>
      <a href="https://rocq-prover.org"><img width="28" hspace="4" title="Rocq (MathComp · Infotheo · CoqEAL)" src="https://raw.githubusercontent.com/F1uctus/kalman.v/main/paper/images/icon-rocq-orange.svg" /></a>
    </td>
  </tr>
  <tr>
    <td><b>I've shipped products in</b></td>
    <td>
      <a href="https://go.dev"><img width="28" hspace="4" title="Go" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" /></a>
      <a href="https://dev.java"><img width="28" hspace="4" title="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" /></a>
      <a href="https://spring.io"><img width="28" hspace="4" title="Spring" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" /></a>
      <a href="https://dart.dev"><img width="28" hspace="4" title="Dart" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" /></a>
      <a href="https://flutter.dev"><img width="28" hspace="4" title="Flutter" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" /></a>
      <a href="https://learn.microsoft.com/dotnet/csharp/"><img width="28" hspace="4" title="C#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" /></a>
    </td>
  </tr>
  <tr>
    <td><b>Libraries &amp; infra I constantly use</b></td>
    <td>
      <a href="https://llvm.org">
        <picture>
          <source srcset="https://cdn.simpleicons.org/llvm/9aa7b3" media="(prefers-color-scheme: dark)" />
          <img width="28" hspace="4" title="LLVM / libclang" src="https://cdn.simpleicons.org/llvm" />
        </picture>
      </a>
      <a href="https://spacy.io"><img width="28" hspace="4" title="spaCy" src="https://cdn.simpleicons.org/spacy" /></a>
      <a href="https://www.postgresql.org"><img width="28" hspace="4" title="PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" /></a>
      <a href="https://www.docker.com"><img width="28" hspace="4" title="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" /></a>
      <a href="https://nixos.org"><img width="28" hspace="4" title="NixOS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nixos/nixos-original.svg" /></a>
    </td>
  </tr>
</table>

<details>
<summary>📈 GitHub statistics</summary>
<br/>
<table>
  <tr>
    <td>
      <picture>
        <source srcset="https://raw.githubusercontent.com/F1uctus/F1uctus/master/generated/stats-dark.svg" media="(prefers-color-scheme: dark)" />
        <source srcset="https://raw.githubusercontent.com/F1uctus/F1uctus/master/generated/stats-light.svg" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
        <img decoding="async" loading="lazy" alt="Contribution stats" src="https://raw.githubusercontent.com/F1uctus/F1uctus/master/generated/stats-light.svg" />
      </picture>
    </td>
    <td>
      <picture>
        <source srcset="https://raw.githubusercontent.com/F1uctus/F1uctus/master/generated/langs-dark.svg" media="(prefers-color-scheme: dark)" />
        <source srcset="https://raw.githubusercontent.com/F1uctus/F1uctus/master/generated/langs-light.svg" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
        <img decoding="async" loading="lazy" alt="Top languages" src="https://raw.githubusercontent.com/F1uctus/F1uctus/master/generated/langs-light.svg" />
      </picture>
    </td>
  </tr>
</table>
</details>

<details>
<summary>🗄️ 2014–2022</summary>
<br/>

I got into programming around age 12: not with a "Hello, world!", but by trying to
reverse-engineer .NET apps. The learning curve was steep, and worth every step of it.
What followed, roughly in order:

- ⛈️ **Rainmeter era** (desktop customization): [jarvis-desktop](https://github.com/F1uctus/jarvis-desktop) (the 2014 original), [Rainautica](https://github.com/F1uctus/Rainautica), [Kite](https://github.com/F1uctus/Kite), [DDLC-Visualizer](https://github.com/F1uctus/DDLC-Visualizer), and [pyrmont](https://github.com/F1uctus/pyrmont), a static skin generator;
- 🗣️ **Voice control** (VoxCommando plugins): [VC-Serial](https://github.com/F1uctus/VC-Serial) (bundled with the default install), [VC-Vision](https://github.com/F1uctus/VC-Vision), [VC-RoboB-2](https://github.com/F1uctus/VC-RoboB-2);
- 🎮 **Java games**: [crown](https://github.com/F1uctus/crown), a game framework with time-travelling support, and games built on it ([cotfk](https://github.com/F1uctus/cotfk), [escape-from-castilla](https://github.com/F1uctus/escape-from-castilla));
- 🧰 **C# / .NET**: [CodeConsole](https://github.com/F1uctus/CodeConsole), [Magnolia](https://github.com/F1uctus/Magnolia) (Roslyn source generators), [bloom](https://github.com/F1uctus/bloom) for desktop automation;
- ☕ **Mediateka**: a Spring Boot / Spring Cloud microservice backend for a cloud media-storage platform and social network, from my first backend job.

</details>
