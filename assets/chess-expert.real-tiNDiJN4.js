var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-978f",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T00:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "As Black we ceded a large positional edge early against 1.c4 (already +77 by move 10 after ...c5, +141 after ...Nd4), then compounded it with a bad bishop move 30...Bc7 pushing White to +563. White briefly loosened its grip (49.Bf3 to +394) but we found no real counterplay, and a long forced king hunt from move 79 ended in checkmate. A clean strategic loss, not one tactical blunder.",
  "key_moments": [
    {
      "ply": 10,
      "san": "c5",
      "note": "Early structural commitment against 1.c4 jumped White's eval from +2 to +77, setting the tone for a cramped middlegame."
    },
    {
      "ply": 16,
      "san": "Nd4",
      "note": "Knight jump failed to solve our development lag; eval rose to +141, position drifting further toward strategically lost."
    },
    {
      "ply": 30,
      "san": "Bc7",
      "note": "Quiet-looking bishop retreat spiked White's advantage from +402 to +563, the single biggest self-inflicted swing of the game."
    },
    {
      "ply": 49,
      "san": "Bf3",
      "note": "White's move momentarily gave back advantage (+605 to +394); our reply Qd3 kept it flat instead of pressing for complications."
    },
    {
      "ply": 87,
      "san": "Nb5+",
      "note": "After repeated checks failed to make progress for White, this breakthrough forced Qxb5 and opened the decisive mating net."
    },
    {
      "ply": 121,
      "san": "Qxb7#",
      "note": "Final blow of a long forced king hunt (moves 79-121) that our side never found a way to interrupt or trade out of."
    }
  ],
  "suggestions": [
    {
      "area": "opening",
      "text": "Against 1.c4, our ...Bd6/...c5 setup ceded space early (+77 by move 10); prefer classical development or a timely ...d5 break to contest the center sooner."
    },
    {
      "area": "eval",
      "text": "Watch for quiet moves that spike the opponent's eval sharply, like 30...Bc7 (+402 to +563); such non-tactical jumps often mean a piece landed on a passive square."
    },
    {
      "area": "endgame",
      "text": "Once clearly lost (+500+), prioritize trading pieces/queens to blunt the attack rather than shuffling the king; the long check sequence (moves 86-96) never found a relieving swap."
    },
    {
      "area": "other",
      "text": "Recognize a strategically lost position early and choose the most resistant, complicating continuation rather than the most natural but passive one."
    }
  ]
}
`;export{e as default};