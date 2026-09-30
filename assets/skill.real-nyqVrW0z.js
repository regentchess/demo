var e=`{
  "schema": 1,
  "game_id": "20260925T095156Z-668b",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:08:00Z",
  "model": "claude-opus-5-5",
  "summary": "Walking-skeleton game: our engine moved in 0.001 s with no search, playing effectively random moves (Nh3, Ng5, a4, Ra3, h4). It hung the knight on move 3, the queen on ply 17 and was mated on ply 36. Loss to Stockfish 1320 reflects the missing search, not an evaluation detail.",
  "key_moments": [
    {
      "ply": 3,
      "san": "Ng5",
      "note": "Knight walks into e5/Qxg5 range; eval already negative and the piece is lost two plies later."
    },
    {
      "ply": 5,
      "san": "a4",
      "note": "Ignores the attacked knight; Qxg5 wins a piece (-726). No tactical check at all."
    },
    {
      "ply": 17,
      "san": "Qxc2",
      "note": "Recaptures into Qxc2; queen traded off while a piece down, then more material drops."
    },
    {
      "ply": 35,
      "san": "Nc3",
      "note": "Allows Nf5 mate in one; no mate detection."
    }
  ],
  "suggestions": [
    {
      "area": "search",
      "text": "Use the full time budget: this engine answered in 0.001 s. Iterative deepening with alpha-beta (ADR 0009) would have saved the knight on ply 5 at depth 2."
    },
    {
      "area": "search",
      "text": "Add quiescence search so hanging pieces and recaptures are resolved before the static eval."
    },
    {
      "area": "eval",
      "text": "Material and piece-square evaluation (PeSTO) would stop rim moves like Nh3, a4 and Ra3 in the opening."
    }
  ]
}
`;export{e as default};