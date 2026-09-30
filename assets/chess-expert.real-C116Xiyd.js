var e=`{
  "schema": 1,
  "game_id": "20260926T094736Z-b06b",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T12:00:00Z",
  "model": "claude-sonnet-5",
  "summary": "White built a big edge (+100 to +180cp) after Black errors around moves 30 and 34, but simplifying choices like 33.Ne5 and 47.Bxe6 kept handing most of it back, and the game drifted into a long single-bishop ending that flatlined near 0 for over 100 plies. The final a-pawn race was neutralized by Bxa8, and the point ended in an insufficient-material draw despite a clearly winning middlegame.",
  "key_moments": [
    {
      "ply": 7,
      "san": "e3",
      "note": "Passive setup after the 2.Nc3/3.Nf3 order let Black equalize easily (eval slipped to -23), giving up the usual White opening edge."
    },
    {
      "ply": 30,
      "san": "Nh5",
      "note": "Black's real turning-point error: the eval swung from roughly equal to +103 for White in a single move."
    },
    {
      "ply": 33,
      "san": "Ne5",
      "note": "This offer let a commanding +139 advantage evaporate to just +9 almost instantly, the first big missed chance to keep a much larger edge."
    },
    {
      "ply": 47,
      "san": "Bxe6",
      "note": "Over-simplifying traded a +144 winning middlegame down to +30, the moment the win began slipping away for good."
    },
    {
      "ply": 67,
      "san": "Bxc5",
      "note": "Advantage was already down to +40 here and kept eroding toward zero over the next 50 moves with no concrete winning plan found."
    },
    {
      "ply": 249,
      "san": "a8=Q",
      "note": "The long-awaited promotion was immediately answered by Bxa8; the resulting bare ending was declared a draw by insufficient material, sealing the missed win."
    }
  ],
  "suggestions": [
    {
      "area": "opening",
      "text": "The 2.Nc3 before 3.Nf3 order let Black reach a comfortable QGD setup (eval down to -23 by move 7); try an earlier c4/Bg5 to keep more central tension and the usual White edge."
    },
    {
      "area": "endgame",
      "text": "After building a +140/+180cp edge (moves 33-46), trades like 33.Ne5 and 47.Bxe6 handed most of it back instantly; when clearly ahead, keep pieces on rather than trading into a flatter position."
    },
    {
      "area": "endgame",
      "text": "In the long bishop ending, verify your bishop controls the pawn's queening square before racing it forward - a wrong-colored bishop (as here, ending insufficient material) turns an extra pawn into a dead draw."
    },
    {
      "area": "eval",
      "text": "The eval sat at exactly 0 for roughly 130 plies (from move ~68 on); treat a long flat-zero stretch as a cue to hunt for a fresh winning plan rather than repeating king/bishop shuffles."
    },
    {
      "area": "other",
      "text": "Press harder after opponent blunders like 29...Nh5 and 34...Qxe5 - favor forcing exchanges that lock in the material gain instead of allowing it to be given back repeatedly."
    }
  ]
}
`;export{e as default};