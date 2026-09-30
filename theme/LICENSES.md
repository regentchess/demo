# Theme asset licenses

| Asset | Files | Source | License |
|-------|-------|--------|---------|
| Logo "Le Grand Festin" | `logo.webp` | Project art (`gfx/logo-le-grand-festin.jpg`, keyed by `scripts/key_logo.py`) | Project-owned, all rights reserved |
| Stage backdrop | `backdrop.webp` | Project art (`gfx/game-backdrop.jpg`, via `scripts/convert_backdrop.py`) | Project-owned, all rights reserved |
| Rococo pieces | `pieces/*.webp` | Project art (`gfx/pieces_sprite.jpg`, via `scripts/slice_pieces.py`) | Project-owned, all rights reserved |
| Bungee font (latin subset) | `fonts/Bungee-Regular.woff2` | Google Fonts, by David Jonathan Ross | SIL Open Font License 1.1 |
| ZzFX sound presets | `src/arcade/sfx.ts` (synthesized at runtime) | ZzFX by Frank Force (github.com/KilledByAPixel/ZzFX), presets are our own params | MIT (engine); presets project-owned |
| French announcer voice (demo placeholder) | `voice/fr/*.mp3`, `voice/fr/manifest.json` | Demo placeholder voice: Microsoft Edge neural TTS fr-FR-HenriNeural (`scripts/render_callouts_edge.py`); HF Chatterbox Space route (`scripts/render_callouts.py`, ADR 0012) hit the free quota. To be replaced | Placeholder, to be replaced |
| Background music "Baroque Chiptune 2 (D minor)" (demo placeholder) | `music/baroque-d-minor.ogg` | "4 Baroque Chiptunes" by Aureolus_Omicron, https://opengameart.org/content/4-baroque-chiptunes (gain -7.6 dB to ~-20 LUFS, re-encoded Vorbis 96k) | CC-BY 4.0 (as stated), demo placeholder |
