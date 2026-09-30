var e=`{
  "schema": 1,
  "game_id": "20260925T095156Z-668b",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T00:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "A rout: our knight tour 1.Nh3-g5 walked into Black's queen diagonal after 2...e5, and move 5 a4 ignored the hanging piece, losing it for free (eval -96 to -726). The game never recovered; further slips (Rb3, e4) bled more material until Black mated on move 36.",
  "key_moments": [
    {
      "ply": 3,
      "san": "Ng5",
      "note": "Rim knight move with no support; after ...e5 opens the d8-g5 diagonal, the knight becomes en prise to Black's queen."
    },
    {
      "ply": 5,
      "san": "a4",
      "note": "The real blunder: ignores the hanging knight on g5, letting Black win it for free next move (eval crashes -96 to -726)."
    },
    {
      "ply": 6,
      "san": "Qxg5",
      "note": "Black cashes in the free piece; we are already lost out of the opening, down a full minor piece for nothing."
    },
    {
      "ply": 16,
      "san": "Nxc2+",
      "note": "Black's knight fork extends the material deficit further, and our position keeps deteriorating instead of stabilizing."
    },
    {
      "ply": 19,
      "san": "e4",
      "note": "Another unforced pawn push that opens lines for Black's queen; Qxc1+ follows immediately, taking a whole rook."
    },
    {
      "ply": 36,
      "san": "Nf5#",
      "note": "Final blow: king left exposed after a long demoralized retreat with rook and multiple pieces down, resulting in checkmate."
    }
  ],
  "suggestions": [
    {
      "area": "opening",
      "text": "Avoid loose rim knight moves like Nh3-g5 without support; always check open diagonals (e.g. d8-g5) before advancing a piece there."
    },
    {
      "area": "opening",
      "text": "Prefer developing moves and king safety over flank pushes (a4, h4, g3) when a piece is already exposed to capture."
    },
    {
      "area": "eval",
      "text": "Treat a single-move eval swing of 500+ cp as a signal a piece or exchange was just dropped; the next move should stop the bleeding, not push another pawn."
    },
    {
      "area": "endgame",
      "text": "Once significantly down material, prioritize king safety and consolidation over further pawn advances (b4, b5, g4) that only open lines for the attacker."
    },
    {
      "area": "other",
      "text": "Hanging-piece blindness recurred (Ng5, Rb3, e4); add a pre-move check for any piece left attacked and undefended."
    }
  ]
}
`;export{e as default};