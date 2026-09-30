var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-45cb",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:26:00Z",
  "model": "claude-opus-5-5",
  "summary": "Draw by threefold repetition as black against Stockfish 2700, 102 plies. We equalized in a Queen's Gambit Declined and won a pawn with Nd3+ and Bxg2 (-125), but the edge faded and after e4 (ply 69) white took over. Qe6 at ply 78 allowed Rcg3 and Rg7+ and we were lost (+900). We escaped with a rook perpetual (Re2+/Re1+) against the exposed king, which Stockfish at this level accepted.",
  "key_moments": [
    {
      "ply": 32,
      "san": "Nd3+",
      "note": "Knight fork trick leads to Bxg2; we win a pawn and reach -125."
    },
    {
      "ply": 64,
      "san": "Kh8",
      "note": "Passive king move; with Ne4 and Nxf6 white frees its game and our edge is gone."
    },
    {
      "ply": 76,
      "san": "Qxe7",
      "note": "Recapture leaves our king weak on the g-file; eval +317."
    },
    {
      "ply": 78,
      "san": "Qe6",
      "note": "Decisive error: allows Rcg3 and Rg7+; eval jumps to +714."
    },
    {
      "ply": 94,
      "san": "Re2+",
      "note": "Finds the perpetual against the king on the a1/b2 squares; the draw is forced by repetition."
    }
  ],
  "suggestions": [
    {
      "area": "eval",
      "text": "King safety: after gxf6 and Kh8/Kh7 our king sat on an open g-file; penalize open files next to our king so Qe6 and Qxe7 are avoided."
    },
    {
      "area": "search",
      "text": "Rcg3 and Rg7+ were a 2-3 move threat; check extensions or null-move verification near our king would catch it."
    },
    {
      "area": "endgame",
      "text": "The repetition saved half a point; make sure draw-by-repetition scoring stays at 0 so the engine seeks perpetuals when losing."
    }
  ]
}
`;export{e as default};