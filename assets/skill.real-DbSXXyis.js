var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-f52e",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:17:00Z",
  "model": "claude-opus-5-5",
  "summary": "Qualifying win as black against Stockfish 2600, mate on ply 132. A Queen's Gambit structure gave white a small plus until dxc4/e5 equalized. We won the g5 knight's pawn with Bxg5/Qxg5 (-195) but Nc4 at ply 84 let it slide back to 0. After Stockfish's Be1 we broke with h5, hxg4+ and f5+, opened the white king and mated with Qg3#. Max move 4.502 s, no overruns.",
  "key_moments": [
    {
      "ply": 32,
      "san": "e5",
      "note": "Freeing central break after dxc4; equalizes (+57 to about 0)."
    },
    {
      "ply": 62,
      "san": "Bxg5",
      "note": "Wins material on g5; eval swings to -195 for black."
    },
    {
      "ply": 84,
      "san": "Nc4",
      "note": "Allows Qd8+ checks; our -60 edge drops to 0 and a perpetual looked likely."
    },
    {
      "ply": 104,
      "san": "h5",
      "note": "Pawn break against the exposed king; with Be1 in reply the eval heads to -210."
    },
    {
      "ply": 108,
      "san": "f5+",
      "note": "Opens lines to the king; the attack becomes decisive (-337 and rising)."
    },
    {
      "ply": 118,
      "san": "Nd2+",
      "note": "Deflects the queen; Qxd2 exd2 wins decisive material, then Qg3# follows."
    }
  ],
  "suggestions": [
    {
      "area": "search",
      "text": "Around ply 84-99 white had a series of queen checks; add check extensions so the engine sees perpetual-check ideas and avoids allowing them when ahead."
    },
    {
      "area": "eval",
      "text": "King-safety terms (open files and pawn shield near the enemy king) would find the h5/f5 break earlier."
    },
    {
      "area": "time",
      "text": "Max move hit 4.502 s under 4-game load; keep the 4.5 s hard stop and consider 4.4 s to widen the margin before the 5 s overrun line."
    }
  ]
}
`;export{e as default};