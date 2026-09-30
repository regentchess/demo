var e=`{
  "schema": 1,
  "game_id": "20260926T072307Z-9b44",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:10:00Z",
  "model": "claude-opus-5-5",
  "summary": "First real win (003): a solid 1.e4/d4/d5 space-gaining opening, a slightly drifting middlegame (Rc1 dropped the edge to about equal), then clean punishment of Stockfish-1320 errors: the exchange won with Ba7/Bxb8, queen trade into a winning ending, and a promotion finish with Rd8#. Times stayed under 4.51 s with no overruns.",
  "key_moments": [
    {
      "ply": 7,
      "san": "d5",
      "note": "Gains space and kicks the knight back to b8; good opening structure (+68)."
    },
    {
      "ply": 19,
      "san": "Rc1",
      "note": "Quiet rook move lets the edge slip from +61 to about 0; a more purposeful plan (a4 or Nd2-c4) was available."
    },
    {
      "ply": 25,
      "san": "Ba7",
      "note": "Traps the b8 rook; Bxb8 two plies later wins the exchange and the eval climbs past +150."
    },
    {
      "ply": 43,
      "san": "Qxd8",
      "note": "Converts into a winning ending by trading queens while ahead (+859)."
    },
    {
      "ply": 57,
      "san": "a7",
      "note": "Passed pawn push starts a forced mate in three; clean technique."
    }
  ],
  "suggestions": [
    {
      "area": "eval",
      "text": "Add a small mobility or rook-on-open-file term; Rc1 and Re1 were aimless and cost about 60 cp."
    },
    {
      "area": "time",
      "text": "Our max move was 4.501 s against a 5 s limit; keep the 4.5 s hard stop but spend less on easy recaptures (e.g. ply 53 bxc3 used 2.3 s)."
    },
    {
      "area": "endgame",
      "text": "Add a passed-pawn bonus scaled by rank so promotions like a7-a8 are pushed earlier."
    }
  ]
}
`;export{e as default};