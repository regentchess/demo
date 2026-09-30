var e=`{
  "schema": 1,
  "game_id": "20260925T102409Z-b7fb",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T00:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Regent (white) was mated in 26 plies with eval collapsing to -1000+ well before the forced mate. Nearly every white move took 0.00s despite the 5s budget, suggesting iterative deepening is terminating far too shallow; that shallow search plausibly missed the ply7 tactic and the ply11 queen sac, and only detected the forced mate two plies before it landed.",
  "key_moments": [
    {
      "ply": 7,
      "san": "d4",
      "note": "Eval nosedives -151 to -517 in one ply at t=0.00s: consistent with iterative deepening exiting far too early (low depth), so search plus QS never saw the tactic Stockfish exploited."
    },
    {
      "ply": 11,
      "san": "Qh6",
      "note": "Queen walks into gxh6 next move (eval -457 to -945) yet took 0.00s: TT/killer move ordering likely fed a shallow-search 'best move' without a basic hanging-piece safety check."
    },
    {
      "ply": 13,
      "san": "Nf3",
      "note": "Still 0.00s while already down ~10 pawns; engine never spends its 5s budget to search deeper for tactical rescues once material is lost."
    },
    {
      "ply": 23,
      "san": "Re1",
      "note": "First ply where eval reports forced mate (M-2); at depth 10/instant search the losing line wasn't recognized until it was unavoidable, pointing to insufficient search depth earlier."
    },
    {
      "ply": 26,
      "san": "Qg2#",
      "note": "Mate delivered; the losing move that took 0.09s is the only non-zero white move time all game, too late to matter for search quality."
    }
  ],
  "suggestions": [
    {
      "area": "time",
      "text": "Every white move but the last took 0.00s versus a 5s budget; find why iterative deepening exits instantly and make it use the available time for deeper search."
    },
    {
      "area": "search",
      "text": "Add a hanging-piece/SEE safety net in move ordering so an instant-return search (as at ply11 Qh6) can't select a move that drops the queen for a pawn."
    },
    {
      "area": "search",
      "text": "Extend quiescence search to cover simple recapture sequences like gxh6 so material swings of this size are caught before the tactic is played."
    },
    {
      "area": "time",
      "text": "Once null-move pruning is implemented, use the freed time budget to reach depths that would flag forced-mate lines (seen only at ply23) several plies earlier."
    },
    {
      "area": "eval",
      "text": "Audit PeSTO eval sanity checks for large single-ply material swings (-350cp+) to trigger a re-search or extra safety verification before committing to the move."
    }
  ]
}
`;export{e as default};