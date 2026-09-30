var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-67f2",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T00:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "White (us) chose an offbeat d4-e4 Benoni-like setup and built a healthy edge early via Black's loose queen sorties. Ncxd6/f3 (plies 21-23) opened lines while only slightly better, letting the edge shrink from +157 to +27. A sharp 31.Bd6, ignoring a hanging knight to win material via Bxe7, restored a big advantage. From there the d6/g5 pawn storm and forcing tactics converted cleanly into a forced mate. Solid game, one risky mid-game stretch.",
  "key_moments": [
    {
      "ply": 21,
      "san": "Ncxd6",
      "note": "Grabbed the d6 pawn with a knight fork idea but opened lines prematurely; advantage began slipping from +157."
    },
    {
      "ply": 23,
      "san": "f3",
      "note": "Breaking the Bg4 pin let the edge shrink to only +27, the game's low point for White despite being objectively fine."
    },
    {
      "ply": 31,
      "san": "Bd6",
      "note": "Walked past a hanging knight on b7 to set up Bxe7; engine showed -25 momentarily but the deflection won material back with interest."
    },
    {
      "ply": 45,
      "san": "g5",
      "note": "Launched the kingside pawn storm alongside the d6 passer, turning a comfortable +600 edge into an irresistible mating attack."
    },
    {
      "ply": 69,
      "san": "Qxg8#",
      "note": "Clean forced mate to finish, capping a well-calculated final combination starting from Rxf7/Rxg7."
    }
  ],
  "suggestions": [
    {
      "area": "opening",
      "text": "The 4.d5 exd5 5.exd5 Qa5+ Benoni-style hybrid gave Black easy piece activity for free tempo; a more standard main line would cut early risk."
    },
    {
      "area": "eval",
      "text": "Ncxd6-f3 (plies 21-23) let a +157 edge shrink to +27 by opening the position too eagerly; slow down when only slightly better."
    },
    {
      "area": "other",
      "text": "31.Bd6, ignoring the hanging Nb7 to win the e7 bishop, was excellent practical judgment; keep trusting such zwischenzug resources."
    },
    {
      "area": "endgame",
      "text": "Once material was secured, the d6/g5 pawn storm converted cleanly into forced mate - good technique worth repeating in similar wins."
    }
  ]
}
`;export{e as default};