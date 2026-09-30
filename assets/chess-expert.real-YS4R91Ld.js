var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-a818",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T10:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "A quiet 2.Nc3/e3 setup against 1...d5 turned decisive early when Black blundered the queen to e5-tricks; we converted the resulting material edge (+200ish) into a mating attack, but technique wobbled at times (O-O and Rxd4 gave back chunks of the lead) and the win took a very long 121-ply grind before a clean forced mate.",
  "key_moments": [
    {
      "ply": 13,
      "san": "Bxf5",
      "note": "Punished Black's ...Qe6 misstep immediately; eval swung from -22 to +203, converting a roughly balanced middlegame into a clear material edge."
    },
    {
      "ply": 21,
      "san": "O-O",
      "note": "Solid but let the advantage slip from +282 to +141 - a more testing consolidating move could have kept more pressure on Black's king."
    },
    {
      "ply": 55,
      "san": "Rxd4",
      "note": "Advantage narrowed to +60, its smallest margin since the opening tactics, showing some looseness in simplifying a large edge into a clean technical win."
    },
    {
      "ply": 115,
      "san": "b8=Q",
      "note": "Queening the advanced b-pawn produced an immediate forced mate in three, the cleanest moment of technique in the whole conversion."
    }
  ],
  "suggestions": [
    {
      "area": "opening",
      "text": "The early e3/Bd3 setup boxed in our own bishop; consider more active systems against 1...d5 (e.g. Bg5 lines) rather than relying on opponent errors to gain the edge."
    },
    {
      "area": "endgame",
      "text": "Once material-up by move 15, tighten technique: trades like Rxd4 at move 55 let the lead shrink to +60 before recovering - simplify and push passed pawns more directly."
    },
    {
      "area": "eval",
      "text": "The winning advantage (+200+ from move 12) took 121 plies to convert into mate; repeated small give-backs (O-O, Rxd4) suggest working on faster, more forcing conversion of large edges."
    }
  ]
}
`;export{e as default};