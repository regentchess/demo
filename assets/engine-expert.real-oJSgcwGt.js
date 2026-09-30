var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-f52e",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T09:45:00Z",
  "model": "claude-sonnet-5",
  "summary": "Regent (Black) won by checkmate in 132 plies with zero overruns (max 4.502s). Search depth scaled well late (e.g. e3+ finding a forcing mating net) and a well-timed exchange sac (Bxg5) kept the advantage flowing. But two moves (b6 ply46, Nc4 ply84) show 55-60cp eval swings, hinting at PST/eval horizon gaps and a bias toward simplifying instead of keeping the bigger edge. Time management was safe throughout, including one near-instant forced reply.",
  "key_moments": [
    {
      "ply": 46,
      "san": "b6",
      "note": "Eval flipped from -22 to +39 (61cp swing, sign reversal) after our own move; likely PeSTO PST/mobility misjudging this queenside pawn push rather than a seen tactic — a search-depth/eval horizon gap."
    },
    {
      "ply": 84,
      "san": "Nc4",
      "note": "Simplifying Nc4 gave back a -56cp edge to dead-equal; search likely settled for a quiet trade instead of the stronger line — PeSTO's material-first eval may undervalue the original bind."
    },
    {
      "ply": 62,
      "san": "Bxg5",
      "note": "Exchange sac into hxg5/Qxg5 kept us clearly better (-117 to -194); QS correctly resolved the capture sequence, and search picked the right trade toward the mating attack."
    },
    {
      "ply": 116,
      "san": "e3+",
      "note": "Swung eval from -514 to -629 (115cp): search found a forcing mating-net line deep in the endgame, showing iterative deepening reaching further as material thinned."
    },
    {
      "ply": 98,
      "san": "Kg7",
      "note": "0.00s move (only legal reply to check) — fine here, but worth confirming the single-legal-move fast path still runs a minimal TT/safety probe rather than skipping search entirely."
    }
  ],
  "suggestions": [
    {
      "area": "search",
      "text": "Add search/eval logging around moves like b6 (ply46) and Nc4 (ply84) that swing eval 55-60cp to find whether it's a depth/QS gap or an eval-term issue."
    },
    {
      "area": "eval",
      "text": "Retune PeSTO PST/mobility for queenside pawn pushes (b6-type) and simplifying knight moves that gave back a won edge; material-first eval may undervalue positional binds."
    },
    {
      "area": "search",
      "text": "Once null-move pruning lands, spend the freed depth budget on quiet middlegame plies (around ply42-50) where eval swung most, not just tactical lines."
    },
    {
      "area": "time",
      "text": "Confirm the near-0s forced-reply fast path (ply98 Kg7, 0.00s) still runs a minimal TT/safety probe rather than a blind single-move return."
    },
    {
      "area": "time",
      "text": "Zero overruns and max 4.502s this game — safe margin; consider spending more of the 5s budget on plies with big eval swings (b6, Nc4) instead of returning early."
    }
  ]
}
`;export{e as default};