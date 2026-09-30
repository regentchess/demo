var e=`{
  "schema": 1,
  "game_id": "20260925T095156Z-668b",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T00:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Regent lost as White despite facing a capped-strength Stockfish, mainly because every White move finished in ~0.00-0.001s instead of using the 5s budget, so ID/alpha-beta never reached useful depth. That starvation caused an immediate blindness to the hanging Ng5 (a4 instead of defending, ply5), a bad forced recapture Qxc2 trading queen for a knight (ply17), a hung pawn to Bxg4+ (ply29), and no defense against the final mating net. PeSTO material/PST terms look fine on the numbers throughout; the failure here is search/time, not evaluation quality.",
  "key_moments": [
    {
      "ply": 3,
      "san": "Ng5",
      "note": "Knight lands on g5 just before ...e5 opens the d8-g5 diagonal; with think time ~0.00s, ID barely reaches depth 1 so no lookahead flagged the coming exposure."
    },
    {
      "ply": 5,
      "san": "a4",
      "note": "Ng5 is hanging after ...e5 but White plays an unrelated pawn move; eval falls -96 to -726. Root cause is our own near-zero move time, not an eval bug - search never sees ...Qxg5."
    },
    {
      "ply": 17,
      "san": "Qxc2",
      "note": "Forced reply to Nxc2+, but recaptures onto a square already covered by Black's queen, trading Q for N. Capture-first move ordering picked it without a SEE/QS check that the square holds."
    },
    {
      "ply": 29,
      "san": "g4",
      "note": "Hangs the pawn to Bxg4+ with check; another one-ply-deep miss consistent with the game-long near-zero search time, not a PeSTO positional error."
    },
    {
      "ply": 35,
      "san": "Nc3",
      "note": "SF already reports M-1 for White; with 0.001s max move time all game the search had no chance to find defensive resources - pure time-budget starvation, not a TT or eval defect."
    }
  ],
  "suggestions": [
    {
      "area": "time",
      "text": "Investigate why every White move finished in ~0.00-0.001s versus the Limit(time=5.0) budget; ID is being capped at a shallow depth all game."
    },
    {
      "area": "search",
      "text": "Add a hanging-piece/SEE check before committing to quiet moves like Ng5/a4 so search doesn't overlook pieces the opponent's last move exposed."
    },
    {
      "area": "search",
      "text": "Verify recapture squares with a SEE/QS pass before choosing captures like Qxc2, so capture-first move ordering doesn't trade the queen for a knight."
    },
    {
      "area": "search",
      "text": "Once the time budget is fixed, enable null-move pruning (not yet implemented) to reach the depths needed to catch tactics like Bxg4+."
    },
    {
      "area": "time",
      "text": "Log actual vs. budgeted think time per move to catch cases like this whole game where Limit(time=5.0) isn't being honored."
    }
  ]
}
`;export{e as default};