var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-67f2",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T10:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Regent (White) won by mate, building a small opening edge that dipped near equality mid-middlegame (own moves Ne5, f3, Bd6 gave back roughly 250cp combined, with Bd6 briefly slipping to -25), then converted cleanly once Black over-extended around move 38. Time management stayed within budget (max 4.501s, 0 overruns) but the engine often used nearly the full 4.5s allotment even in quiet positions.",
  "key_moments": [
    {
      "ply": 3,
      "san": "e4",
      "note": "White used nearly the full 4.5s budget on a routine opening move; iterative deepening isn't converging early even in non-critical positions, leaving less time margin for later tactics."
    },
    {
      "ply": 13,
      "san": "Ne5",
      "note": "Our move dropped the eval from +270 to +172; the knight sortie may have been chosen without QS fully resolving the resulting complications, giving back roughly 100cp of advantage."
    },
    {
      "ply": 23,
      "san": "f3",
      "note": "Across Bg4-Nh5-f3 the advantage eroded from +157 to +27; search depth/QS likely didn't find a cleaner answer to the Bxf3 pin before committing to this structural pawn move."
    },
    {
      "ply": 31,
      "san": "Bd6",
      "note": "Own move swung eval from +112 to -25 (~140cp), a clear search miscalculation likely from insufficient depth/TT verification at this node rather than a real refutation Black exploited."
    },
    {
      "ply": 47,
      "san": "Qd5",
      "note": "Eval jumped from +614 to +736, a strong tactical find showing good capture ordering and search depth paying off in a sharp position."
    }
  ],
  "suggestions": [
    {
      "area": "search",
      "text": "Extend search/QS around pin-heavy sequences (e.g. Bg4 vs Nf3) so structural pawn moves like f3 don't give back accumulated equity."
    },
    {
      "area": "search",
      "text": "Add deeper TT-verified checks before committing bishop/knight retreats like Bd6, which swung eval ~140cp in one move."
    },
    {
      "area": "time",
      "text": "Lower the soft time budget below 4.501s (e.g. 4.2-4.3s) since several moves hug the 4.5s ceiling, reducing overrun risk margin."
    },
    {
      "area": "eval",
      "text": "Consider a king-safety PST/eval term so pawn-shield-weakening moves like f3 are penalized more accurately by PeSTO."
    },
    {
      "area": "search",
      "text": "Once null-move pruning lands, apply it in quiet middlegame stretches (moves ~5-20) to free time budget for sharper tactics later."
    }
  ]
}
`;export{e as default};