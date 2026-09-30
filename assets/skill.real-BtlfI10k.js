var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-56ba",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:13:00Z",
  "model": "claude-opus-5-5",
  "summary": "255-ply draw by the fifty-move rule against Stockfish 2600 as black. We won a pawn early (Rxb2, Rxe2) and built a large edge, peaking near -454 around ply 70, but let it slip in the ending: Ra6 and Rxa5 (plies 84-86) and Bg1 gave back almost everything. The last 150 plies were a rook+knight vs rook shuffle we could not convert. No overruns.",
  "key_moments": [
    {
      "ply": 26,
      "san": "Rxb2",
      "note": "Wins a pawn off the Qa4 queen raid; the start of our advantage."
    },
    {
      "ply": 70,
      "san": "Ne6",
      "note": "Peak of the game at -454: a clear winning position with active pieces."
    },
    {
      "ply": 84,
      "san": "Ra6",
      "note": "Passive rook move; with Rb1/Rb8 white activates and the edge drops from -326 to -214."
    },
    {
      "ply": 86,
      "san": "Rxa5",
      "note": "Grabs the a-pawn but allows Rb8 counterplay; eval collapses to -31."
    },
    {
      "ply": 90,
      "san": "Bg1",
      "note": "Misplaces the bishop; white is now slightly better (+52)."
    },
    {
      "ply": 154,
      "san": "Rh2",
      "note": "Reaches rook+knight vs rook, a theoretical draw; 100 more plies of shuffling followed."
    }
  ],
  "suggestions": [
    {
      "area": "endgame",
      "text": "Add rook-activity and king-proximity terms for endgames; the winning edge was lost through passive rook moves (Ra6) that let white's rook reach the 8th rank."
    },
    {
      "area": "eval",
      "text": "Scale evaluation toward 0 in known drawn material (R+N vs R) so the search prefers keeping pawns earlier instead of trading into a dead draw."
    },
    {
      "area": "search",
      "text": "Consider a contempt factor or fifty-move-aware eval so the engine avoids long drawn shuffles when it was ahead."
    }
  ]
}
`;export{e as default};