var e=`{
  "schema": 1,
  "game_id": "20260926T092849Z-56ba",
  "analyzer": "chess-expert",
  "placeholder": false,
  "created_at": "2026-09-26T10:10:14Z",
  "model": "claude-sonnet-5",
  "summary": "As Black we reached rough equality out of a symmetrical English/Reti setup, then built real chances with 26...Rxb2 and profited hugely from White's drift (35.Bc5, Qg4, Rbc1) to peak near -454 by move 70 (roughly a piece up). Conversion was poor: the edge leaked away move by move (78...Kh8, 84...Ra6, 86...Rxa5) until 90...Bg1 flipped the eval to White's favor. The game then meandered ~150 more plies to a fifty-move-rule draw, a missed win.",
  "key_moments": [
    {
      "ply": 26,
      "san": "Rxb2",
      "note": "Black grabs the b2 pawn, starting the complications that eventually snowballed into a large advantage."
    },
    {
      "ply": 35,
      "san": "Bc5",
      "note": "White's bishop move backfires badly, swinging the eval from +60 to -145 and handing Black the initiative for the rest of the middlegame."
    },
    {
      "ply": 64,
      "san": "Rxf1+",
      "note": "Black wins the exchange with check, jumping the eval to -321 and putting the game on a winning trajectory."
    },
    {
      "ply": 70,
      "san": "Ne6",
      "note": "High-water mark of the game at -454 (roughly a piece-equivalent up); this should have been a routine technical win."
    },
    {
      "ply": 78,
      "san": "Kh8",
      "note": "King move gives back 117cp of advantage (-397 to -280), the start of a long slide from winning toward merely equal."
    },
    {
      "ply": 90,
      "san": "Bg1",
      "note": "Critical blunder flips the eval from -13 (small Black edge) to +52 (White edge), effectively erasing 60+ moves of accumulated advantage."
    }
  ],
  "suggestions": [
    {
      "area": "opening",
      "text": "The symmetrical English/Reti setup produced no real edge through move 14; consider sharper, more imbalanced tries against weaker opponents."
    },
    {
      "area": "eval",
      "text": "Repeated large give-backs (34...Rd8, 78...Kh8, 84...Ra6, 86...Rxa5) show the engine doesn't prioritize consolidating a big material lead once it has one."
    },
    {
      "area": "endgame",
      "text": "Squandering a -454 near-winning score down to a fifty-move draw points to weak piece-up conversion technique; train simplifying endgames methodically once far ahead."
    },
    {
      "area": "other",
      "text": "90...Bg1 was the decisive turning point; more careful calculation in reduced material positions would have preserved the remaining small edge."
    },
    {
      "area": "endgame",
      "text": "A 255-ply game ending in a fifty-move draw suggests the engine should seek more decisive, direct plans earlier when clearly ahead rather than shuffling."
    }
  ]
}
`;export{e as default};