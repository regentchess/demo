var e=`{
  "schema": 1,
  "game_id": "20260926T094708Z-2a60",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:21:00Z",
  "model": "claude-opus-5-5",
  "summary": "Aborted after 5 plies: this second ladder run was stopped by hand to keep at most 4 games running. No chess result; non-qualifying. The opening (d4, Nc3, e3 against Bf5) matches our other 2600 white games and was about equal.",
  "key_moments": [
    {
      "ply": 5,
      "san": "e3",
      "note": "Last move before the interrupt; passive but sound (-13)."
    }
  ],
  "suggestions": [
    {
      "area": "other",
      "text": "Operational: cap total concurrent games across ladder runs (one driver, or a shared limit) so extra runs are not started and then aborted."
    },
    {
      "area": "opening",
      "text": "Consider Bf4 or c4 instead of Nc3/e3 against ...Bf5 for a more active London or Queen's Gambit setup."
    }
  ]
}
`;export{e as default};