var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-f5c3",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:19:00Z",
  "model": "claude-opus-5-5",
  "summary": "Qualifying win as white against Stockfish 2600, mate on ply 103. Bxf5 gxf5 gave black a broken structure; Nxf5 won a pawn after h5 (+107). The edge swung between +35 and +230 through a messy middlegame, then Bxc7 and the Rh1+ sequence netted decisive material (+455). The d- and g-pawns promoted and Qb8# finished. Max move 4.502 s, no overruns.",
  "key_moments": [
    {
      "ply": 9,
      "san": "Bxf5",
      "note": "Trades the bishop to double black's f-pawns; long-term structural target."
    },
    {
      "ply": 17,
      "san": "Nxf5",
      "note": "Picks up the weak f5 pawn after h5; eval +107."
    },
    {
      "ply": 41,
      "san": "Nxh5",
      "note": "Grabs a second pawn but lets black's pieces activate; eval drops to +35."
    },
    {
      "ply": 57,
      "san": "Bxc7",
      "note": "Removes the c7 knight; after Rh1+ Kf2 the eval jumps to about +450."
    },
    {
      "ply": 73,
      "san": "d7",
      "note": "Deep passed pawn ties black down; it later promotes with d8=Q+ to win the rook."
    },
    {
      "ply": 95,
      "san": "g8=Q",
      "note": "Second promotion; mate in four follows."
    }
  ],
  "suggestions": [
    {
      "area": "eval",
      "text": "Big swings (+230 to +35 around plies 36-42) show the eval misjudging pawn grabs versus piece activity; add a mobility term and weigh king safety of our castled king."
    },
    {
      "area": "endgame",
      "text": "Passed pawns on the 6th/7th rank decided the game; a rank-scaled passed-pawn bonus would speed up conversion."
    },
    {
      "area": "time",
      "text": "Instant 0.00 s replies to forced checks are good; reuse that saved time on the next non-forced move."
    }
  ]
}
`;export{e as default};