var e=`{
  "schema": 1,
  "game_id": "20260925T102409Z-b7fb",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T00:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "White never settled on a plan: after 1.g3 d5 2.e4 e5 the position was already roughly equal, but 5.Qh5 launched an unsupported queen sortie and 7.d4 deepened the confusion (eval -517). The game turned decisively on 11.Qh6?? gxh6, giving away the queen for a pawn; from there White was lost and Black mated cleanly with 26...Qg2#.",
  "key_moments": [
    {
      "ply": 5,
      "san": "Qh5",
      "note": "Premature queen sortie with no development support; started the slide from equal to worse (+14 to -151)."
    },
    {
      "ply": 7,
      "san": "d4",
      "note": "Opens the center further while pieces are undeveloped and the queen is exposed; eval drops sharply to -517."
    },
    {
      "ply": 11,
      "san": "Qh6",
      "note": "Decisive blunder: the queen lands on a square attacked by the g7 pawn and is simply captured next move."
    },
    {
      "ply": 12,
      "san": "gxh6",
      "note": "Black wins the queen for a pawn; the game is effectively decided here (-845)."
    },
    {
      "ply": 26,
      "san": "Qg2#",
      "note": "Black converts the material and king-safety deficit into a clean mating attack to finish the game."
    }
  ],
  "suggestions": [
    {
      "area": "opening",
      "text": "Don't mix a g3 fianchetto with an immediate e4 central thrust; pick one coherent pawn structure and develop knights/bishops before moving the queen."
    },
    {
      "area": "eval",
      "text": "Before advancing the queen (e.g. Qh6), scan whether any pawn or piece attacks the destination square — this blunder cost the queen for nothing."
    },
    {
      "area": "other",
      "text": "Two early queen raids (Qh5 then Qh6) without supporting pieces wasted tempo; use minor pieces to probe before committing the queen."
    },
    {
      "area": "opening",
      "text": "Castle earlier for king safety; O-O only came on move 15, long after development and safety should have been prioritized over pawn pushes."
    }
  ]
}
`;export{e as default};