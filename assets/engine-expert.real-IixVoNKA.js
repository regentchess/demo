var e=`{
  "schema": 1,
  "game_id": "20260926T094708Z-2a60",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T10:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Game aborted by hand after only 5 plies (1.d4 d5 2.Nc3 Bf5 3.e3), too little data for a full verdict. SF eval swung from +13 to -13 after e3, hinting PeSTO underweights bishop-blocking pawn moves; both our moves used ~4.5s of the 5s budget, leaving little search margin though no overruns occurred.",
  "key_moments": [
    {
      "ply": 3,
      "san": "Nc3",
      "note": "Eval dipped +12->+7 after this natural developing move; PeSTO's tapered eval may be underweighting the c1-bishop's future diagonal at this shallow ID depth."
    },
    {
      "ply": 5,
      "san": "e3",
      "note": "Eval flipped +13->-13, a 26cp swing on a quiet move. Likely PeSTO PST/mobility terms don't penalize enough for boxing in the own bishop; QS won't catch it since it's a non-capture horizon issue."
    }
  ],
  "suggestions": [
    {
      "area": "eval",
      "text": "Add a pawn-structure/mobility penalty for pawns like e3 that lock in the same-color bishop; PeSTO PST alone missed this positional cost here."
    },
    {
      "area": "time",
      "text": "Moves 3 and 5 used 4.50s of the 5s budget; add an ID depth-completion margin (stop issuing new depths past ~4.3s) to avoid edging toward !OVR."
    },
    {
      "area": "search",
      "text": "Consider one extra ID ply on quiet non-capture moves like e3, where the eval swing suggests the search horizon missed the positional cost."
    }
  ]
}
`;export{e as default};