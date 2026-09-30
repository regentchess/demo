var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-56ba",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T10:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Draw by fifty-move rule after a fairly even middlegame. Our search found a strong tactical shot (Rxf1+, ply64, +80cp) but also two clear regressions: Rd8 (ply34, -23 to +60) and a ~500cp conversion collapse from ply70 (-454) through ply90 (+52) in a winning rook/knight endgame, ending back near equality. Time management was solid: 0 overruns, frequently using the full ~4.5s budget. Main weakness looks like PeSTO's simple eval plus the depth reachable in 5s not reliably preserving technical endgame wins.",
  "key_moments": [
    {
      "ply": 34,
      "san": "Rd8",
      "note": "Eval swung from -23 to +60 for White right after Rd8, a sudden 83cp loss for us in a roughly balanced middlegame -- likely a search-depth/QS gap where PeSTO's static eval missed a tactical resource a deeper line would catch."
    },
    {
      "ply": 64,
      "san": "Rxf1+",
      "note": "Rxf1+ improved eval from -241 to -321 (80cp in our favor), a good case of move ordering (TT move, then captures, then killers) surfacing a strong tactical exchange within the 5s budget."
    },
    {
      "ply": 86,
      "san": "Rxa5",
      "note": "In a near-winning rook/knight endgame (eval peaked at -454 near ply70), Rxa5 let White back in, -143 to -31: with material reduced, PeSTO's PST-only terms give little rook-endgame technique guidance, and 5s search likely missed a cleaner only-move."
    },
    {
      "ply": 90,
      "san": "Bg1",
      "note": "Bg1 crossed the eval from -13 to +52, fully erasing an edge that had peaked at -454 near ply70 -- a ~500cp bleed over 20 plies typifies shallow-endgame eval/search struggling to convert a won position cleanly."
    }
  ],
  "suggestions": [
    {
      "area": "eval",
      "text": "Endgame conversion bled ~500cp over plies 70-90 in a won rook/knight ending; add endgame-specific eval terms (rook activity, king proximity, passed-pawn distance) beyond PeSTO's tapered PST."
    },
    {
      "area": "search",
      "text": "Rxf1+ shows tactics are found well, but Rd8 and the ply84-90 stretch suggest quiet consolidating moves get missed; extend search depth when eval regresses sharply vs. 2 plies earlier."
    },
    {
      "area": "search",
      "text": "Implement null-move pruning to free up depth budget for the technique-heavy moves that seem to get missed once material is reduced."
    },
    {
      "area": "time",
      "text": "Moves routinely used the full ~4.5s budget with 0 overruns, confirming a safe margin; consider a small time bonus when eval regresses versus 2 plies ago to double-check consolidating moves."
    },
    {
      "area": "eval",
      "text": "Add fifty-move-rule awareness to eval so search doesn't drift toward simplifying trades once ahead; this game diluted a near-win into a fifty-moves draw."
    }
  ]
}
`;export{e as default};