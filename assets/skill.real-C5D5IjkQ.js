var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-978f",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:28:00Z",
  "model": "claude-opus-5-5",
  "summary": "Loss as black against Stockfish 2700 in an English Opening, mated on ply 121. No single blunder: a steady positional slide. c5 left a hole on d5, then g4-g5 with Rg1 opened the g-file toward our castled king, and by Bc7 (ply 30) we were at +563. White's queen and rook invaded on g7 and the h-pawn promoted. No overruns.",
  "key_moments": [
    {
      "ply": 10,
      "san": "c5",
      "note": "Weakens d5 and d6 for no gain; eval jumps from +2 to +77."
    },
    {
      "ply": 18,
      "san": "hxg5",
      "note": "Opens the h-file toward our own king after g4-g5; white's attack becomes easy (+142)."
    },
    {
      "ply": 24,
      "san": "b6",
      "note": "Slow queenside move while the kingside burns; +282."
    },
    {
      "ply": 30,
      "san": "Bc7",
      "note": "Passive retreat; +563, the game is strategically lost."
    },
    {
      "ply": 58,
      "san": "Kf8",
      "note": "King walks into the open; Qg4 and Qxg7+ follow."
    }
  ],
  "suggestions": [
    {
      "area": "eval",
      "text": "King safety is the main gap: penalize opening files next to our castled king and attackers near it, so hxg5 and ...O-O against a g-pawn storm are scored as dangerous."
    },
    {
      "area": "opening",
      "text": "Against 1.c4 our e5/Nf6/Bd6/c5 setup left holes; a small book of sound replies (e.g. ...Bb4 lines) would avoid early structural concessions."
    },
    {
      "area": "eval",
      "text": "Add a penalty for backward pawns and weak squares (d5/d6 holes) to stop moves like c5 here."
    }
  ]
}
`;export{e as default};