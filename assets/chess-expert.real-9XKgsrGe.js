var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-f52e",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T00:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Playing Black, Regent handled a QGD-style opening solidly but let White build a modest +100cp edge by move 24 via slightly passive piece play. Regent recovered with a timely ...c6 break (54) after a wobble with ...b6 (46), then cracked White's king open with the sac ...Bxg5 (62), building a large edge. A careless ...Nc4 (84) briefly let the whole advantage slip to equality, but White failed to punish it, and Regent finished with a clean forcing king-hunt ending Qg3# at move 132.",
  "key_moments": [
    {
      "ply": 24,
      "san": "Qe7",
      "note": "Peak of White's middlegame edge (+107cp); Black's setup had grown a touch passive here, the low point before the position turned back Black's way."
    },
    {
      "ply": 46,
      "san": "b6",
      "note": "Weakening pawn move that swung the eval about 60cp toward White (to +39), the sharpest self-inflicted dip of the game."
    },
    {
      "ply": 54,
      "san": "c6",
      "note": "The right central break, puncturing White's structure and swinging the eval to -50, kicking off Black's lasting advantage."
    },
    {
      "ply": 62,
      "san": "Bxg5",
      "note": "Sharp piece sacrifice ripping open White's kingside; after hxg5 Qxg5 the attack became close to decisive."
    },
    {
      "ply": 84,
      "san": "Nc4",
      "note": "Careless move that let a near +60cp winning edge evaporate to dead equal (0); only White's imprecision let Black recover."
    },
    {
      "ply": 132,
      "san": "Qg3#",
      "note": "Clean conclusion of a long forced king-hunt (h5, hxg4+, f5+, e3+, Nd2+) converting the recovered advantage into mate."
    }
  ],
  "suggestions": [
    {
      "area": "opening",
      "text": "The QGD-style setup (...Nf6/e6/d5 vs Nf3/d4/c4, ...Be7) was solid but passive; more active piece play earlier could avoid ceding the +100cp edge seen by move 24."
    },
    {
      "area": "eval",
      "text": "46...b6 handed back ~60cp of advantage by creating fresh dark-square/c6 weaknesses; vet structural pawn moves for the holes they create before playing them."
    },
    {
      "area": "eval",
      "text": "84...Nc4 let a near-winning edge evaporate to dead equal; in simplified middlegames double-check that trades genuinely help conversion, not just tidy the position."
    },
    {
      "area": "endgame",
      "text": "The forcing king-hunt from move 99 onward (h5, hxg4+, f5+, Qxf3+, e3+, Nd2+) converted cleanly to mate; keep favoring such concrete forcing lines over repeating checks (as at 97.Qe8+)."
    },
    {
      "area": "other",
      "text": "76...Rxh1 gave back ~50cp of advantage by simplifying prematurely; when clearly winning, prefer moves that preserve material or attack over early exchanges."
    }
  ]
}
`;export{e as default};