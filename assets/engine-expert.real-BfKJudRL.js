var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-b06b",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T10:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Regent built a long, at times decisive (+140-180cp) edge against 2700-rated Stockfish but converted it imprecisely: Ne5 (ply33) found a real tactical shot obscured by depth-10 statics, yet Bxe6 (ply47) and f5 (ply121) each gave back a big chunk of the lead, the latter drifting into a theoretically drawn wrong-bishop/a-pawn fortress PeSTO's material+PST eval can't detect. Be3 (ply207) also missed a chance after Black erred. Time use stayed safe (0 overruns, max 4.501s) but often near the cap even in quiet phases.",
  "key_moments": [
    {
      "ply": 33,
      "san": "Ne5",
      "note": "Ne5 drops SF's depth-10 eval from +139 to +9, but the forced Qxe5 Qxe5 Nxe5 Rxe5 sequence recovers to +158 two moves later - search/QS found a real combo invisible to shallow static eval, though risky since a depth-10 snapshot alone looks like a blunder."
    },
    {
      "ply": 47,
      "san": "Bxe6",
      "note": "Bxe6 trades bishop for the e6 knight but eval crashes from +144 to +30 in one move - simplifying threw away most of the attacking edge; likely a move-ordering/search-depth issue preferring a capture over a quieter move keeping more advantage."
    },
    {
      "ply": 121,
      "san": "f5",
      "note": "f5 collapses eval from +30 to +3 and the game flatlines at 0 for ~100 plies after - drifting into a wrong-colored-bishop-plus-a-pawn fortress draw that PeSTO's material+PST terms have no concept of; pure material eval can't see this drawing pattern."
    },
    {
      "ply": 207,
      "san": "Be3",
      "note": "After Black's Bh1 handed back +44, Be3 gives it straight back (eval -1) - a missed chance to press the advantage, consistent with shallow search/ordering not finding the improving reply in a quiet bishop-shuffle phase."
    }
  ],
  "suggestions": [
    {
      "area": "search",
      "text": "Extend QS/search depth around forcing capture sequences like ply33 Ne5 so mid-search eval doesn't look like a blunder relative to the true forced line."
    },
    {
      "area": "search",
      "text": "At ply47 Bxe6, tune move ordering so an even trade that flattens eval doesn't outrank a quieter move that keeps a bigger lead - captures shouldn't always win ordering ties."
    },
    {
      "area": "eval",
      "text": "Add lightweight fortress/drawn-endgame detection (e.g. wrong-bishop + rook-pawn) to PeSTO scoring so the engine avoids trading into ply121-style f5 fortress draws when materially ahead."
    },
    {
      "area": "time",
      "text": "Flat +0 bishop-shuffle phases (plies ~100-245) still used 4.2-4.5s per move; add an early-exit when eval is stable across iterative-deepening depths to bank time for sharper moments."
    }
  ]
}
`;export{e as default};