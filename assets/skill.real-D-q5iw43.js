var e=`{
  "schema": 1,
  "game_id": "20260926T094708Z-e0af",
  "analyzer": "skill",
  "placeholder": false,
  "created_at": "2026-09-26T10:21:00Z",
  "model": "claude-opus-5-5",
  "summary": "Aborted after 5 plies: this second ladder run was stopped by hand to keep at most 4 games running. No chess result; non-qualifying. As black we answered 1.e4 with e5 and Nf6, a sound start (about equal).",
  "key_moments": [
    {
      "ply": 4,
      "san": "Nf6",
      "note": "Last move we played before the interrupt; natural development, eval about +27."
    }
  ],
  "suggestions": [
    {
      "area": "other",
      "text": "Operational: cap total concurrent games across ladder runs so games are not started and then aborted."
    },
    {
      "area": "opening",
      "text": "Our e5/Nf6 answer to 1.e4 was fine here; an opening book for the first few moves would save search time for the middlegame."
    }
  ]
}
`;export{e as default};