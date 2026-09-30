var e=`{
  "schema": 1,
  "game_id": "20260926T072736Z-2354",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:11:00Z",
  "model": "claude-opus-5-5",
  "summary": "Game ended after 7 plies with an engine_crash, not a chess result, so it is non-qualifying. The opening moves (e4, Nc3, Nf3 against the Sicilian) were sound; Bd3 was slightly passive (about -6). The key finding is the crash itself, which must not recur in competition games.",
  "key_moments": [
    {
      "ply": 7,
      "san": "Bd3",
      "note": "Last move before the crash; a passive bishop placement (+32 to -6) but not a losing error."
    }
  ],
  "suggestions": [
    {
      "area": "other",
      "text": "Reproduce the crash from this position (after 4.Bd3) with the same engine commit and fix the root cause; a crash forfeits qualification regardless of the position."
    },
    {
      "area": "opening",
      "text": "Against the Sicilian prefer d4 or Bb5 setups over Bd3, which blocks the d-pawn."
    }
  ]
}
`;export{e as default};