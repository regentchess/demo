var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-45cb",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T10:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Regent (Black) held a solid +20 to +60cp edge (White POV) through move ~30 via sound opening play, then eroded it with imprecise piece shuffling (58...Bg2, -34 to +41) and left the e7 rook unsupported for ~20 plies until 75.Bxe7 won the exchange, swinging the game decisively lost. Despite reaching +1393cp, our search found a forced Re2+/Re1+ perpetual check, salvaging a draw by repetition. Zero time overruns (max 4.501s/5.0s). Capture ordering and check-evasion search performed well; eval/QS need better hanging-piece and quiet-threat detection.",
  "key_moments": [
    {
      "ply": 36,
      "san": "Bxg2",
      "note": "After White's Qb1 blunder opened the long diagonal, our capture-first move ordering (TT move, then captures) promptly grabbed the loose g2 pawn, showing ordering working as designed."
    },
    {
      "ply": 58,
      "san": "Bg2",
      "note": "Eval swings from -34 to +41 (75cp against us) on a quiet bishop retreat; suggests PeSTO's static material+PST terms don't reward concrete progress, letting search drift during conversion of an advantage."
    },
    {
      "ply": 76,
      "san": "Qxe7",
      "note": "Forced recapture after 75.Bxe7 wins White the exchange; Re7 sat unsupported ~20 plies (since ply 54) without the eval flagging it. QS/TT only catch tactics near the leaf, missing this slow-building hanging-piece risk."
    },
    {
      "ply": 82,
      "san": "Kh8",
      "note": "Only defensive move after Rg7+ recovers eval from +877 to +753; check-evasion handling in the main search correctly found the sole safe square, avoiding immediate collapse."
    },
    {
      "ply": 102,
      "san": "Re2+",
      "note": "Closing move of a forced Re2+/Re1+ perpetual-check cycle vs Ka1/Kb2 that secures a threefold-repetition draw from a near-lost +1393cp position, showing our check-extension search located a genuine saving resource."
    }
  ],
  "suggestions": [
    {
      "area": "search",
      "text": "Extend quiescence search to cover non-capturing threats (e.g. diagonal openings after pawn recaptures) so g2-type hangs are seen before the horizon, as after 34...exd3."
    },
    {
      "area": "eval",
      "text": "Add a lightweight hanging/undefended-piece penalty to PeSTO eval so pieces like the e7 rook aren't left exposed for ~20 plies before being captured."
    },
    {
      "area": "time",
      "text": "Even with 0 overruns, moves often use ~4.50s of the 5.0s budget; add a safety buffer (e.g. cap search around 4.3s) against future overruns."
    },
    {
      "area": "search",
      "text": "Once null-move pruning lands, add a zugzwang-free verification search in low-material endgames so perpetual-check draws like the Re2+/Re1+ line stay reliably reachable."
    },
    {
      "area": "search",
      "text": "Strengthen killer/history heuristics for forcing check sequences so lines like the repeated Re2+/Kb2 perpetual are found without near-maximal time use each move."
    }
  ]
}
`;export{e as default};