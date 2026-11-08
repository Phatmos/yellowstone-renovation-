# Deck service copy and image decisions

Prepared 2026-11-08. This is editorial implementation guidance; it does not establish unverified credentials, product availability or structural suitability for an individual property.

## One purpose per service page

| Route | Primary homeowner decision | Keep off this page |
| --- | --- | --- |
| `/decking/` | Choose a local deck builder and the right type of project | Long species guides or repeated material comparison sections |
| `/wood-decks/` | Natural wood, pressure-treated boards, moisture and finish upkeep | Composite product lists and invented hardwood installation history |
| `/composite-decks/` | Reduce refinishing; compare specific composite/PVC products | Claims that every material stays cool or needs no care |
| `/covered-decks/` | Reliable shade/rain shelter, daylight and roof support | Treating an open pergola as a rainproof roof |
| `/custom-decks/` | Resolve space planning, elevation, circulation and stairs | Another general deck builder landing with reordered adjectives |
| `/outdoor-deck/` | Coordinate deck, patio and shade as one backyard plan | Repeating the full material pages or claiming unverified outdoor kitchen work |
| `/patios/` | Ground-level gathering, concrete, under-deck use and drainage | Unverified specialist paving capabilities or decorative finish guarantees |
| `/pergolas/` | An open overhead frame, partial shade and sound support | Automatic promises of full shade, rain protection or a completed project image when only framing is shown |

The content JSON uses URL-slug keys, one `h1` each, split `h1Lead`/`h1Accent` for the existing green underline, unique title/description, unique hero images, three concise body sections, four service-specific FAQs, related service slugs, and selected matching project images. Keep the full existing project/video gallery available separately as requested by the owner. A repeated project image in the complete gallery is not a new project or a second customer testimonial.

## Verified material facts and sources

- Trex says its exterior decking still requires cleaning. The copy therefore uses **low maintenance**, not maintenance-free. Care varies by product. [Trex care and cleaning](https://www.trex.com/customer-support/trex-owners/care-and-cleaning/).
- TimberTech offers both composite and Advanced PVC collections. They are not interchangeable terms for the same board. [TimberTech decking overview](https://www.timbertech.com/products/decking-overview/).
- All decking products can get hot in direct sun; collection and color affect the comparison. No temperature reduction percentage is promised. [TimberTech product disclaimers](https://www.timbertech.com/disclaimers/).
- Existing framing condition and joist spacing must be evaluated before replacing wood boards with composite. The copy does not promise that every deck can simply be resurfaced. [Trex resurfacing](https://www.trex.com/build-your-deck/diy/resurface/).
- Treated lumber should be dry enough for the chosen finish. The exact interval varies with wood condition and coating instructions, so no universal day count is supplied. [Southern Forest Products Association finishing, maintenance and inspection](https://www.southernpine.com/using-southern-pine/decks-and-porches/finishing-maintenance-and-inspection/).
- Connections and flashing are relevant deck details; the AWC guide is a limited prescriptive guide and does not establish the right design for every deck, roof or pergola. No construction dimensions were copied into marketing FAQs. [American Wood Council DCA6](https://awc.org/wp-content/uploads/2022/02/AWC-DCA62015-DeckGuide-1804.pdf), [AWC explanation of canopy/awning scope](https://awc.org/faq/does-the-dca6-apply-to-canopies-or-awnings/).
- Lexington publishes homeowner permit guides, including a residential deck guide. Copy refers to applicable approvals without making blanket legal statements about every project or giving a promised permit schedule. [Lexington homeowner guides](https://www.lexingtonky.gov/working/building-permits/homeowners-corner).

## Image provenance and crop decisions

These are existing site assets, visually inspected for content. Recent user-supplied originals have `original` provenance in `src/data/localDeckGallery.json`. No new stock/AI image or fabricated before/after pairing is introduced.

| Use | Asset | What it actually shows |
| --- | --- | --- |
| General deck hub hero | `/local-deck/img/gallery/full/woodland-elevated-deck.webp` | Completed elevated deck, stair route and lower patio at a brick home |
| Wood hero | `/local-deck/img/gallery/full/img_9609.webp` | Fresh wood boards, wood grain, railing and backyard view |
| Wood support/stairs | `/local-deck/img/gallery/full/img_9605.webp`, `img_9606.webp`, `img_9603.webp` | Same wood project; distinct views, not different claimed installations |
| Composite hero | `/local-deck/img/gallery/full/photo_2_2026-11-06_09-32-22.webp` | Brown composite deck with black railing beside the sunroom |
| Covered hero | `/local-deck/img/gallery/full/photo_14_2026-10-23_13-33-17.webp` | Existing roofed/screened outdoor porch, not an open pergola |
| Custom hero | `/local-deck/img/g/d39.webp` | Existing multi-level deck with distinct dining/seating zones and stairs |
| Outdoor living hero | `/local-deck/img/gallery/full/photo_27_2026-10-23_13-33-17.webp` | Elevated deck, lower seating and garden/firepit area |
| Patio hero | `/local-deck/img/r/under-deck-patio.webp` | Finished concrete patio and dining furniture under a deck |
| Pergola hero | `/local-deck/img/r/pergola-frame-wide-natural-hd-poster-sharp.webp` | Pergola framing **in progress**, honestly labeled in alt text |

The older `/local-deck/img/g/d87.webp` is labeled wood in the old gallery but its finish/material is not clear enough to make it the primary wood proof. The newer `img_9609` shows unmistakable natural grain. The old covered-page `/images/deck8.webp` farmhouse image was not used: it does not establish the user's deck workmanship. Keep context in close crops so a patio does not look like the wood/composite product.

## Claims intentionally excluded

- No 45-year experience claim, made-up prices, completion deadlines, fixed review counts, fake urgency or installation guarantees.
- No TrexPro, TimberTech dealer/certified installer or BBB certification claim. Brand names describe product choices to discuss; they do not establish a business credential.
- Cedar and Ipe are addressed as requested species to evaluate and source, not illustrated with unrelated wood photos or claimed past work.
- Concrete patios are grounded in the existing completed deck/concrete project and recent photos. Other surface materials are confirmed in a proposal.
- No self-authored `Product` rating schema for contractor services, and no promise that FAQ schema guarantees a search result feature.

## Copy voice

Use the practical problems already reflected in real projects: doors blocked by furniture, stairs landing badly, aging deck frames, sun exposure and rainwater. Short headings and readable paragraphs fit the established Poppins/green/orange style. Technical details support a decision; they are not filler. Related links provide the next useful comparison instead of repeating strings such as “deck builder near me” across every paragraph.
