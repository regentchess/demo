var e=`{
  "schema": 1,
  "game_id": "20260925T102409Z-b7fb",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:09:00Z",
  "model": "claude-opus-5-5",
  "summary": "Second walking-skeleton game: no search (0.001 s per move). An early Qh5 sortie was followed by Qh6, giving the queen away for a pawn on ply 11; Nf3 and O-O then dropped another piece. Mated on ply 26 by Qg2. Same root cause as the first game: no lookahead.",
  "key_moments": [
    {
      "ply": 5,
      "san": "Qh5",
      "note": "Premature queen sortie with no follow-up; costs tempo and sets up the later blunder."
    },
    {
      "ply": 11,
      "san": "Qh6",
      "note": "Queen placed en prise to gxh6: -945. A one-ply search would reject it."
    },
    {
      "ply": 13,
      "san": "Nf3",
      "note": "Knight left to dxe4 and exf3; second piece lost."
    },
    {
      "ply": 23,
      "san": "Re1",
      "note": "Misses mate in two against its own king; no king-safety awareness."
    }
  ],
  "suggestions": [
    {
      "area": "search",
      "text": "Any alpha-beta search of depth 2+ with material evaluation avoids Qh6 and Nf3; implement ID alpha-beta (ADR 0009)."
    },
    {
      "area": "opening",
      "text": "Discourage early queen moves in the opening via piece-square tables or a small development bonus."
    },
    {
      "area": "search",
      "text": "Detect mate threats: extend search on checks so Re1 allowing Qh3/Qg2# is seen."
    }
  ]
}
`;export{e as default};