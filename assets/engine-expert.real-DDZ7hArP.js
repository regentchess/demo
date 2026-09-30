var e=`{
  "schema": 1,
  "game_id": "20260926T094708Z-e0af",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T10:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Game aborted by hand after 5 plies (2 own moves), well before any tactics or eval swings could test search/eval components. Both our moves stayed under the 5s cap with no !OVR, and eval stayed near-level, so no search-depth, QS, TT, ordering, or time-management defects are visible in this fragment.",
  "key_moments": [
    {
      "ply": 2,
      "san": "e5",
      "note": "Book reply took the full 4.50s allotted; with no opening book, ID/alpha-beta re-derives known theory each time, spending search budget PeSTO eval would likely confirm instantly."
    },
    {
      "ply": 4,
      "san": "Nf6",
      "note": "Used 3.75s of the 5s budget on a standard developing move with eval flat (+27); iterative deepening converged without needing the full clock, consistent with healthy TT/killer move ordering, but sample is too short to confirm."
    }
  ],
  "suggestions": [
    {
      "area": "time",
      "text": "Add a small opening book so theoretical moves like e5/Nf6 don't burn 3.75-4.5s each, banking clock for complications later in the game."
    },
    {
      "area": "other",
      "text": "Game was manually aborted at 5 plies; rerun to completion to get a real search/eval/time sample before drawing further conclusions."
    },
    {
      "area": "search",
      "text": "No tactics arose in this fragment; instrument QS/TT node counts on future short games to catch early-game search anomalies sooner."
    }
  ]
}
`;export{e as default};