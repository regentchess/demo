var e=`{
  "schema": 1,
  "game_id": "20260926T072307Z-9b44",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T12:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "White met Black's offbeat 4...Nb8 setup with sound, unhurried development and held a stable small edge. A brief loss of precision around 19.Rc1/21.Re1 let the evaluation dip near equal, but Black failed to press. The real turning point was 25.Ba7!, a quiet move trapping the b8-rook and winning the exchange; further Black slips (34...Nf4, 38...d5) were converted cleanly into a big material lead and a tidy forced mate.",
  "key_moments": [
    {
      "ply": 7,
      "san": "d5",
      "note": "Central space grab against 6...e5 fixed a favorable pawn chain and gave White the long-term edge that persisted through the middlegame."
    },
    {
      "ply": 19,
      "san": "Rc1",
      "note": "Start of a slower rook maneuver (with 21.Re1) that let the eval slide from +70 to near equal; a concrete break kept less pressure than this quiet regrouping."
    },
    {
      "ply": 25,
      "san": "Ba7",
      "note": "Best move of the game: the quiet bishop retreat attacked the cornered b8-rook, setting up 27.Bxb8 to win the exchange outright."
    },
    {
      "ply": 34,
      "san": "Nf4",
      "note": "Black's second knight excursion to f4 handed over material/position (eval jumped to +635), and White converted the resulting edge without letting it slip."
    },
    {
      "ply": 63,
      "san": "Rd8#",
      "note": "Clean finish: the exchange- and material-up position was converted into forced mate with no wasted moves."
    }
  ],
  "suggestions": [
    {
      "area": "opening",
      "text": "Against 4...Nb8-style retreats, consider a quicker c4/Be3 clamp on the d6-e5 chain rather than routine Nc3/Bd3 to press the space edge sooner."
    },
    {
      "area": "eval",
      "text": "19.Rc1 and 21.Re1 let a +70 edge slide to roughly equal; a concrete break such as an earlier Nxd5 or b4 keeps more pressure than slow rook lifts."
    },
    {
      "area": "eval",
      "text": "25.Ba7! was the standout resource, trapping the b8-rook with a quiet in-between move; keep scanning for such non-forcing tactical shots, not just direct captures."
    },
    {
      "area": "endgame",
      "text": "Once up the exchange and later a piece, conversion from move 49 to mate at 63 was crisp and error-free; keep trusting simple technique when clearly winning."
    },
    {
      "area": "other",
      "text": "Black repeated a losing knight jump to f4 twice (moves 28 and 34); continue central knight/queen probes that invite this kind of repeated error from limited engines."
    }
  ]
}
`;export{e as default};