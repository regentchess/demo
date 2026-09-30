var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-f5c3",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T09:45:00Z",
  "model": "claude-sonnet-5",
  "summary": "White (Regent) chose a solid but unambitious d4/Nc3/e3 setup, traded off Black's bishop to double the f-pawns (9.Bxf5), then punished 15...h5 with 17.Nxf5 for a lasting structural and material edge that rarely dipped below roughly +50cp. One recapture, 35.Qxe4, gave back nearly half the advantage, but it was restored quickly. Regent then converted patiently, weathered Black's speculative 58...Rh1+ rook raid without flinching, pushed connected passers to a double queen promotion, and finished with a clean mating attack.",
  "key_moments": [
    {
      "ply": 9,
      "san": "Bxf5",
      "note": "Traded off the bishop to double Black's f-pawns and open lines, a small but sound structural gain that set up the rest of the game."
    },
    {
      "ply": 17,
      "san": "Nxf5",
      "note": "Punished 15...h5, which had loosened f5's support; the pawn grab jumped the eval to +107 and it never looked back for the rest of the middlegame."
    },
    {
      "ply": 35,
      "san": "Qxe4",
      "note": "Recapture nearly halved the advantage (+139 to +58cp) — a small drop that quietly gave Black real chances; a different recapture order kept more of the edge."
    },
    {
      "ply": 58,
      "san": "Rh1+",
      "note": "Black's speculative rook infiltration looked dangerous but only strengthened White's position on engine assessment; met calmly next move."
    },
    {
      "ply": 87,
      "san": "d8=Q+",
      "note": "The patient d-pawn march (67.d5+ onward) reached its point of promotion, converting the material edge into a decisive material avalanche."
    },
    {
      "ply": 103,
      "san": "Qb8#",
      "note": "Clean mating finish after the second promotion (95.g8=Q), a tidy technical conversion of a game that had been comfortably won for many moves."
    }
  ],
  "suggestions": [
    {
      "area": "opening",
      "text": "Against 1...d5 with an early ...Bf5, consider sharper tries than the slow Nc3/e3/Nge2-g3 plan; the real edge came from Black's own 15...h5, not forced pressure."
    },
    {
      "area": "eval",
      "text": "35.Qxe4 gave back nearly half the advantage (+139 to +58cp); when recapturing mid-combination, check alternate recapture orders that preserve more of the edge."
    },
    {
      "area": "endgame",
      "text": "The methodical pawn pushes to a double promotion (67.d5+...87.d8=Q+, 93.g7...95.g8=Q) were excellent technique — keep favoring this over speed once safely ahead."
    },
    {
      "area": "other",
      "text": "58...Rh1+ was a desperado try that only helped White after precise 59.Kf2; keep meeting such checks calmly rather than reflexively retreating the king."
    }
  ]
}
`;export{e as default};