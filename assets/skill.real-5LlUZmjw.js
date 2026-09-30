var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-a818",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:15:00Z",
  "model": "claude-opus-5-5",
  "summary": "Qualifying win as white against Stockfish 2600, mate on ply 121. After a quiet Queen's Pawn opening, Ne5 provoked Qe6 and we won a pawn with Bxf5/Nxd5 (+200). The edge shrank to about +60 by ply 55, then exf7+ and Rd7+ after Bc5 reopened a decisive attack, and the b-pawn promoted. No overruns; max move 4.501 s.",
  "key_moments": [
    {
      "ply": 11,
      "san": "Ne5",
      "note": "Active knight jump; Stockfish replied Qe6 and the eval jumped from about 0 to +207."
    },
    {
      "ply": 15,
      "san": "Nxd5",
      "note": "Collects the d5 pawn; clean material gain."
    },
    {
      "ply": 21,
      "san": "O-O",
      "note": "Castling here let the edge drop from +282 to +141; a more forcing move kept more."
    },
    {
      "ply": 55,
      "san": "Rxd4",
      "note": "Low point (+60) after trades; the advantage had nearly evaporated."
    },
    {
      "ply": 57,
      "san": "exf7+",
      "note": "Punishes Bc5 immediately; eval back to +357 and never in doubt again."
    },
    {
      "ply": 113,
      "san": "b7",
      "note": "Passed pawn decides; forced mate follows with b8=Q and Rg7#."
    }
  ],
  "suggestions": [
    {
      "area": "eval",
      "text": "Our edge slid from +280 to +60 between plies 20 and 55 through quiet moves; add king-safety and passed-pawn terms so the engine plays for concrete targets."
    },
    {
      "area": "endgame",
      "text": "Passed-pawn bonus by rank would push b4-b5-b6 earlier; conversion took about 60 plies."
    },
    {
      "area": "time",
      "text": "Use spare time on critical moves: many moves stopped at 2-3 s. Extend the soft limit when the best move changes between iterations."
    }
  ]
}
`;export{e as default};