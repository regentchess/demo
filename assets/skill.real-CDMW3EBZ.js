var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-b06b",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:31:00Z",
  "model": "claude-opus-5-5",
  "summary": "251-ply draw by insufficient material as white against Stockfish 2700. After a slow Queen's Pawn opening where black was slightly better (-41), exd5 and Ne5 won material (+158 at ply 37). Bxe6 at ply 47 traded into a bishop ending worth only about +30 to +60, which we pressed for 70 plies without a plan. f5 at ply 121 liquidated to +3 and the rest was a dead draw. No overruns.",
  "key_moments": [
    {
      "ply": 23,
      "san": "Rfe1",
      "note": "Low point of a passive opening; black is slightly better (-37)."
    },
    {
      "ply": 35,
      "san": "Qxe5",
      "note": "Tactical sequence wins material; +144."
    },
    {
      "ply": 47,
      "san": "Bxe6",
      "note": "Simplifies from +142 to +30; trading into a thin bishop ending threw away most of the edge."
    },
    {
      "ply": 121,
      "san": "f5",
      "note": "Pawn break that liquidates the last winning chances; eval +31 to +3."
    },
    {
      "ply": 209,
      "san": "b5",
      "note": "Late try (+52) that fizzled; the queenside pawns were traded off and the game ended in a dead draw."
    }
  ],
  "suggestions": [
    {
      "area": "eval",
      "text": "Avoid trades when ahead in a way that kills winning chances: penalize simplification into opposite or same-colored bishop endings with few pawns when our edge is small."
    },
    {
      "area": "endgame",
      "text": "130 plies of bishop and king shuffling at +0 wasted the game; recognize dead-drawn material early and score it as a draw so search spends effort elsewhere."
    },
    {
      "area": "opening",
      "text": "Our d4/Nc3/e3/Bd3 setup is passive and gave black the edge twice at 2700; try c4 or Bf4 systems."
    }
  ]
}
`;export{e as default};