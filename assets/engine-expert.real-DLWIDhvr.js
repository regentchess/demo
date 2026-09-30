var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-f5c3",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T00:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Regent (White) won by checkmate with 0 overruns, always within the 5s budget. Eval was steadily positive after ply16, but our own moves repeatedly gave back large chunks of advantage in the middlegame (up to 168cp in one move), pointing to search-depth/QS horizon and ordering gaps rather than PeSTO material errors; endgame conversion and mating technique were clean and efficient.",
  "key_moments": [
    {
      "ply": 27,
      "san": "Ne2",
      "note": "Eval fell from +216 to +48 (-168cp) in one move, the game's largest single-move swing by us. Likely a shallow-search/QS horizon miss on a passive knight retreat rather than a PST/material issue; TT move ordering may have steered search away from a stronger active try."
    },
    {
      "ply": 23,
      "san": "Qf4",
      "note": "Advantage nearly halved, +169 to +73 (-96cp). Suggests iterative-deepening cutoff too early to spot a sharper follow-up; killer/quiet ordering likely favored a safe queen move over a more forcing continuation here."
    },
    {
      "ply": 19,
      "san": "O-O",
      "note": "Right after Black's h5 blunder, eval slid from +107 to +51 (-56cp) on castling. Reasonable consolidating move, but search didn't find a way to keep more of the material/positional edge - a QS/tactics-depth shortfall, not an eval-term problem."
    },
    {
      "ply": 37,
      "san": "Rad1",
      "note": "Eval dropped +233 to +131 (-102cp), continuing a pattern of giving back edge after Black errors. Consistent with search depth or move-ordering (TT/killers) not surfacing the objectively best reply in these calmer, non-capture-heavy positions."
    },
    {
      "ply": 59,
      "san": "Kf2",
      "note": "Forced king move after Rh1+ resolved in 0.00s versus our usual ~4.5s use, i.e. correctly detected as (near-)forced via TT/ID rather than burning the full budget - good time-management behavior, not a flaw, but worth noting as the outlier timing."
    }
  ],
  "suggestions": [
    {
      "area": "search",
      "text": "Investigate horizon effects around plies 23/27/37: extend QS or add small tactical extensions so quiet retreating/consolidating moves don't give back 60-170cp of already-won advantage."
    },
    {
      "area": "search",
      "text": "Tune killer-move and quiet ordering in calmer middlegame nodes so more forcing tries are searched before passive moves like Ne2/Rad1 are settled on."
    },
    {
      "area": "time",
      "text": "Reserve time saved on forced/near-forced replies (e.g. ply59 Kf2 at 0.00s) for the next few plies instead of resetting to the flat 5s budget, to fund deeper search at genuinely sharp decision points."
    },
    {
      "area": "search",
      "text": "Once null-move pruning lands, the extra depth should help catch the missed continuations at plies like 23 and 37 where shallow ID cut off too soon."
    },
    {
      "area": "eval",
      "text": "Cross-check PeSTO king-safety/activity weighting versus raw material in cluttered middlegame positions to see if it discourages stronger active tries in favor of safe consolidation."
    }
  ]
}
`;export{e as default};