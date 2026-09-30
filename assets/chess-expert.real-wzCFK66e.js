var e=`{
  "schema": 1,
  "game_id": "20260926T072736Z-2354",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T12:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Only 7 plies before an engine crash aborted the game. Our opening was sound through move 6, but 7.Bd3 was a debatable plan choice, blocking the d-pawn and inviting ...d5; eval swung from +48 to -6. Too short a fragment for a fuller verdict.",
  "key_moments": [
    {
      "ply": 3,
      "san": "Nc3",
      "note": "Delays d4, steering from an Open Sicilian into a slower Nc3/Nf3 setup; playable but concedes early central space to Black."
    },
    {
      "ply": 7,
      "san": "Bd3",
      "note": "Blocks White's own d-pawn and invites ...d5 hitting the bishop with tempo; eval swung from +48 to -6, the clearest plan misstep before the crash ended play."
    }
  ],
  "suggestions": [
    {
      "area": "opening",
      "text": "In this Nc3/Nf3 Sicilian setup, prefer Be2 or a kingside fianchetto over Bd3, which blocks d2-d4 and can be hit by ...d5."
    },
    {
      "area": "eval",
      "text": "A 54cp drop on move 7, even to a still-roughly-equal score, flags a plan error worth reviewing; a small swing can still mean the wrong plan."
    },
    {
      "area": "other",
      "text": "Game aborted by an engine crash at ply 7 with no result; investigate stability so short technical failures don't truncate otherwise useful games."
    }
  ]
}
`;export{e as default};