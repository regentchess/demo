var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-45cb",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T10:13:12Z",
  "model": "claude-sonnet-5",
  "summary": "Playing Black in an Exchange-QGD/IQP structure, Regent equalized comfortably then struck with 32...Nd3+!, trading a knight for a monster passed d3-pawn; 35.Qb1? let 35...Bxg2! win a clean pawn and a near-winning edge. That edge bled away over ~30 quiet moves of shuffling, and 66...Bxf3/70...Bxe4 overextended a lone queen+bishop raid, letting 73.Bd6! win the exchange and swing the game to near-lost. A cool perpetual check from move 90 salvaged a draw the position no longer deserved.",
  "key_moments": [
    {
      "ply": 32,
      "san": "Nd3+",
      "note": "Forks the still-uncastled White king on e1; after 33.Bxd3 exd3 Black gets a deep passed d3-pawn for a minor piece — the game's key strategic turning point."
    },
    {
      "ply": 36,
      "san": "Bxg2",
      "note": "Punishes 35.Qb1?, grabbing a clean pawn while hitting Rh1 and turning a balanced game into a near-winning edge for Black."
    },
    {
      "ply": 66,
      "san": "Bxf3",
      "note": "Greedy: the bishop grabs f3 but strays deep with no support, starting a queen+bishop raiding party that White later hunts down."
    },
    {
      "ply": 74,
      "san": "Qe6",
      "note": "Forced after 73.Bd6! forked the e7 rook; couldn't save the exchange (75.Bxe7 Qxe7) — the raiding pieces left the rook undefended."
    },
    {
      "ply": 90,
      "san": "Rxe1+",
      "note": "From a near-decisive material deficit, Black finds the only practical try: forcing a perpetual-check rook ending to salvage a draw the position no longer deserved."
    }
  ],
  "suggestions": [
    {
      "area": "endgame",
      "text": "Once up a pawn/piece-equivalent (moves 36-63), trade pieces and push passed/queenside pawns rather than shuffling (a6, h5, c6, a5); the edge nearly evaporated."
    },
    {
      "area": "other",
      "text": "Avoid sending queen+bishop deep raiding (Bxf3, Bxe4, Qh3) without support — 73.Bd6! exploited the undefended rear rook and won the exchange."
    },
    {
      "area": "opening",
      "text": "The Exchange-QGD IQP structure was handled soundly; consider ...Nb4/...Bd5 ideas a move earlier to hit the bishop pair before White consolidates."
    },
    {
      "area": "eval",
      "text": "Even when objectively near-lost, keep calculating forcing checks — the move-90 perpetual shows a bad position can still be drawn with alert king-safety tactics."
    }
  ]
}
`;export{e as default};