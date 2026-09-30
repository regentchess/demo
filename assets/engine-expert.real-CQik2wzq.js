var e=`{
  "schema": 1,
  "game_id": "20260926T072736Z-2354",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T12:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Game aborted after 7 plies (engine_crash, non-qualifying) before search/eval could be meaningfully stress-tested. Time management held: our 4 moves used 2.25-4.50s, all under the 5s budget, 0 overruns. Only notable signal is a 54cp eval swing to -6 right after our Bd3, immediately preceding the crash, hinting at a possible eval/search fault rather than a normal positional slip.",
  "key_moments": [
    {
      "ply": 7,
      "san": "Bd3",
      "note": "Eval drops from +48 to -6 on our own move and the engine then crashes (engine_crash). Worth checking whether PeSTO eval or the iterative-deepening/QS path hit an edge case here rather than this being a genuine positional error."
    },
    {
      "ply": 1,
      "san": "e4",
      "note": "Only 2.25s used vs the ~4.5s spent on later moves, well under the 5s Limit(time=5.0). Confirm ID is actually deepening at move 1 and not returning early from a shallow TT/book-like shortcut."
    }
  ],
  "suggestions": [
    {
      "area": "other",
      "text": "Add crash logging/instrumentation around move generation and eval so an engine_crash game like this one identifies the failing component instead of just aborting the game."
    },
    {
      "area": "search",
      "text": "Add a regression test replaying this exact opening line (1.e4 c5 2.Nc3 Nc6 3.Nf3 Nf6 4.Bd3) headlessly to catch whether the crash reproduces deterministically."
    },
    {
      "area": "eval",
      "text": "Audit PeSTO piece-square tables for the bishop-to-d3 square in this phase; a 54cp swing on our own move is large enough to be worth a sanity check independent of the crash."
    },
    {
      "area": "time",
      "text": "Log per-move ID depth reached, not just wall time, so a fast 2.25s first move can be distinguished from a shallow-search shortcut versus a legitimate early cutoff."
    }
  ]
}
`;export{e as default};