var e=`{
  "schema": 1,
  "game_id": "20260926T072307Z-9b44",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T00:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Regent (White) converted a modest opening edge into a clean forced checkmate with 0 overruns (max 4.501s). Search was solid overall, finding mate in 3 by ply 57, but showed a recurring pattern of small self-inflicted eval dips (~50-110cp) on its own moves in already-favorable positions (Rc1, Red1, Rxf7), consistent with iterative deepening settling for a good-enough line within the 5s budget rather than SF's optimal continuation.",
  "key_moments": [
    {
      "ply": 19,
      "san": "Rc1",
      "note": "Eval falls +61->-2 right after this White move: iterative deepening at 4.50s likely stopped one ply short of resolving the position, so PeSTO PST scoring for the rook lift lagged SF's depth-10 read."
    },
    {
      "ply": 41,
      "san": "Red1",
      "note": "Another -62cp self-inflicted dip (+808->+746) in a clearly winning position, suggesting move ordering (TT/killers) settled on a plausible but non-optimal quiet move rather than the top continuation."
    },
    {
      "ply": 51,
      "san": "Rxf7",
      "note": "Largest single-move dip (-112cp): a capture-heavy horizon effect where quiescence search likely stopped short of the fully accurate follow-up, though the win was never in danger."
    },
    {
      "ply": 57,
      "san": "a7",
      "note": "Search correctly found forced mate in 3 using the full 4.50s, showing TT cutoffs and killer-move ordering combine well once reduced material lets iterative deepening reach mating depth."
    }
  ],
  "suggestions": [
    {
      "area": "search",
      "text": "Add aspiration windows around iterative deepening so repeated ~60cp dips (Rc1, Red1) resolve before the 5s budget expires."
    },
    {
      "area": "eval",
      "text": "Revisit PeSTO PST weighting for rook-lift moves (Rc1/Re1-style); SF depth-10 rated these ~60cp better than Regent's pick."
    },
    {
      "area": "search",
      "text": "Extend quiescence search one ply into non-capturing threats near pawn-breakthrough squares to reduce horizon dips like the -112cp Rxf7."
    },
    {
      "area": "time",
      "text": "In already-decisive positions (e.g. after move 45), consider adaptive early cutoffs so full 4.5s isn't spent on routine recaptures."
    },
    {
      "area": "search",
      "text": "Once null-move pruning lands, use it to shorten routine searches in clearly winning, non-zugzwang endgames like this one's final phase."
    }
  ]
}
`;export{e as default};