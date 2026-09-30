var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-978f",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T12:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Playing Black, Regent held roughly level through the opening, then eval drifted toward White from move 24 (b6) through 30 (Bc7), and a sharp jump after 58...Kf8 let Stockfish's Rxe7/Qxg7+ combo seal the game; the rest is a mostly forced lost endgame. A 0.00s forced reply at ply 104 is a time-management outlier worth auditing.",
  "key_moments": [
    {
      "ply": 24,
      "san": "b6",
      "note": "Eval slid +195->+282 right after this queenside expansion; PeSTO's static PSTs likely undervalue the resulting king/queenside weaknesses rather than any tactic being missed."
    },
    {
      "ply": 30,
      "san": "Bc7",
      "note": "Sharp +161cp swing to White immediately after our move; suggests our ID/alpha-beta search at the 5s budget and QS didn't reach deep enough to spot the coming tactical resource."
    },
    {
      "ply": 58,
      "san": "Kf8",
      "note": "+243cp jump right before Stockfish's Rxe7 sac and Qxg7+; PeSTO has no explicit king-safety term and QS likely didn't flag the sac, so king exposure was misjudged."
    },
    {
      "ply": 104,
      "san": "Kb8",
      "note": "This forced check-reply took 0.00s vs ~2-4.5s for similar king moves elsewhere; looks like an early-exit path in search/TT skipped the normal time budget, worth auditing though harmless here."
    }
  ],
  "suggestions": [
    {
      "area": "eval",
      "text": "Add a king-safety term (pawn shield/open-file penalties) to PeSTO; purely material+PST eval missed the danger around Kf8 before Rxe7/Qxg7+."
    },
    {
      "area": "search",
      "text": "Extend quiescence search to cover check/sacrifice lines more deeply; both Bc7 and Kf8 jumps suggest shots just beyond the current QS horizon."
    },
    {
      "area": "time",
      "text": "Audit the 0.00s move at ply 104 to find why the ID loop returned without using the time budget under check, e.g. a TT/early-exit bug."
    },
    {
      "area": "search",
      "text": "Use SEE-based capture ordering ahead of plain MVV-VA so sacrificial captures like Rxe7 are searched/refuted earlier in the tree."
    },
    {
      "area": "time",
      "text": "Several Black moves finished in 2-3s well under the 5s cap; allocate saved time dynamically to tactically sharp moments like ply 30/58 instead of a flat budget."
    }
  ]
}
`;export{e as default};