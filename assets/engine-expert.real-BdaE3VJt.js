var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-a818",
  "analyzer": "engine-expert",
  "placeholder": false,
  "created_at": "2026-09-26T10:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "Regent won by checkmate with 0 overruns (max 4.501s) and executed the forced-mate sequence (M+3→M+0) cleanly, showing solid TT/PV stability late. A piece-offer at Ne5 set up a tactic Black mishandled, netting the queen via Bxf5/Nxd5/Qxf5. But the margin then eroded from +301 to +60 over ~35 plies (O-O, Rxd4, Kh1), pointing to search-depth/eval imprecision during conversion, though the win was never seriously threatened.",
  "key_moments": [
    {
      "ply": 11,
      "san": "Ne5",
      "note": "Eval dips to -22 at SF depth 10, but the deeper PV/QS line behind this offer set up Bxf5 and Nxd5, which Black's reply mishandled; a case where our search saw further than a depth-10 snapshot."
    },
    {
      "ply": 19,
      "san": "Qxf5",
      "note": "Forcing tactic nets Black's queen (+301), following through on the piece offer at Ne5; good evidence of PV depth and move ordering finding the winning continuation."
    },
    {
      "ply": 21,
      "san": "O-O",
      "note": "Eval falls 282→141 right after this own move, our biggest single self-inflicted drop; suggests search settled for a safe consolidating move over a more forcing continuation (search depth/move-ordering)."
    },
    {
      "ply": 55,
      "san": "Rxd4",
      "note": "Advantage bottoms out at +60, down from +301 at ply 19; ~35 plies of gradual erosion during conversion hints at PeSTO eval or search horizon not finding the most incisive technique."
    },
    {
      "ply": 67,
      "san": "Kh1",
      "note": "Quiet luft move costs 61cp per SF eval in an already-winning position; possible weak move ordering/killer selection letting a more accurate quiet slip past search."
    },
    {
      "ply": 121,
      "san": "Rg7#",
      "note": "Mate-in-0 delivered exactly on schedule from M+3 at ply 115; TT/PV stayed consistent through the forced sequence and time use (2.35-4.50s) stayed within the 5s budget throughout."
    }
  ],
  "suggestions": [
    {
      "area": "search",
      "text": "Investigate why the winning margin shrank from +301 to +60 (ply19-55); deeper search or PV-stability checks could preserve larger margins during conversion."
    },
    {
      "area": "eval",
      "text": "Review PeSTO king-safety vs material weighting around O-O (ply21), which ceded 141cp despite being clearly ahead on material."
    },
    {
      "area": "search",
      "text": "Once null-move pruning lands, apply it in quiet consolidating middlegame spots (around ply63-67) to search deeper without added cost."
    },
    {
      "area": "search",
      "text": "Check killer-move/ordering for slow non-forcing king moves like Kh1 (ply67) that gave back eval versus more accurate quiet alternatives."
    },
    {
      "area": "time",
      "text": "Trim think time once mate is confirmed (ply115-121 still spent 4.40-4.50s) to bank margin ahead of long forced mating sequences."
    }
  ]
}
`;export{e as default};