// Maps a vertical slug to custom, code-generated showcase visuals
// (one per 01-04 block). Any slug/index without an entry falls back
// to the generic image placeholder in VerticalShowcase.

import { GlpCreative, GlpCost, GlpScale, GlpStability } from "./GlpVisuals";

export const verticalVisuals = {
  "compounded-glp-1": [GlpCreative, GlpCost, GlpScale, GlpStability],
};
