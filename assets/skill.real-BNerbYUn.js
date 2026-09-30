var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-67f2",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:24:00Z",
  "model": "claude-opus-5-5",
  "summary": "Our first qualifying win at Stockfish 2700, as white, mate on ply 69. d4/e4 with d5 gained space and Stockfish's Qa5+/Qb6 cost it time (+270). We let most of it slip: Ncxd6 and f3 brought it to +27, and Bd6 at ply 31 was a real mistake (-25). Stockfish answered with Qxb7, handing back a piece's worth (+238); our knights and the d6 pawn then broke through to Qxg8#. No overruns.",
  "key_moments": [
    {
      "ply": 7,
      "san": "d5",
      "note": "Space-gaining advance against the Benoni-like setup; +83."
    },
    {
      "ply": 21,
      "san": "Ncxd6",
      "note": "Grabs the d6 pawn but trades activity for material; the eval drops from +157 toward +54."
    },
    {
      "ply": 31,
      "san": "Bd6",
      "note": "Our worst move: loses the thread and the eval goes to -25. Only Qxb7 in reply saved the game."
    },
    {
      "ply": 34,
      "san": "Qxb7",
      "note": "Stockfish's error: after Bxe7 we are clearly winning (+231)."
    },
    {
      "ply": 43,
      "san": "d6",
      "note": "Passed pawn advances with the knights supporting; +541 and growing."
    },
    {
      "ply": 63,
      "san": "Rxf7",
      "note": "Decisive rook entry; forced mate follows with Rxg7 and Qxg8#."
    }
  ],
  "suggestions": [
    {
      "area": "search",
      "text": "Bd6 at ply 31 dropped about 140 cp in one move; check whether the search was cut at a shallow depth there and consider a check/recapture extension."
    },
    {
      "area": "eval",
      "text": "Pawn grabs like Ncxd6 cost initiative; add piece activity or mobility so material is weighed against development."
    },
    {
      "area": "endgame",
      "text": "The d6 passed pawn and knight outposts won the game; rank-scaled passed-pawn and outpost bonuses would reinforce this pattern."
    }
  ]
}
`;export{e as default};