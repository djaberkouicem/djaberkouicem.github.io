// ============================================
// RESOURCES DATA
// This is the ONLY file you need to edit to add
// new subjects or new chapter summaries.
//
// To add a new chapter to an existing subject:
//   1. Put the PDF file inside the "resources" folder.
//   2. Add a new line inside that subject's "chapters" array below.
//
// To add a whole new subject:
//   1. Copy one of the blocks below (the { ... } part).
//   2. Change slug, title, description, and chapters.
//   "slug" must be unique and use only lowercase
//   letters, numbers and hyphens (no spaces/accents).
// ============================================

const RESOURCES = [
  {
    slug: 'genetique-virale',
    title: 'Génétique Virale',
    description: 'Viral genetics and virology.',
    chapters: [
      {
        title: 'Chapter 1 — Introduction à la Génétique Virale',
        description: 'Virus structure, capsid types, viral envelope, transmission, and the viral multiplication cycle.',
        file: 'resources/chap1-genetique-virale.pdf'
      }
    ]
  },
  {
    slug: 'immunogenetique',
    title: 'Immunogénétique',
    description: 'Genetics of the immune system.',
    chapters: []
  },
  {
    slug: 'genomique-structurale',
    title: 'Génomique Structurale et Plasticité des Génomes',
    description: 'Genome structure and genomic plasticity.',
    chapters: []
  },
  {
    slug: 'regulation-expression-genes',
    title: "Régulation de l'Expression des Gènes",
    description: 'Gene expression regulation mechanisms.',
    chapters: [
               { 
                 title: 'Chapter 1 — expression geneque chez les procaryotes',
                  description: 'transcription, translation.',
                  file: 'resources/Chap-1-reg-pro.pdf'
                } 
              ]
  },
  {
    slug: 'genetique-quantitative',
    title: 'Génétique Quantitative',
    description: 'Quantitative genetics.',
    chapters: []
  },
  {
    slug: 'therapie-cellulaire-genique',
    title: 'Thérapie Cellulaire et Génique',
    description: 'Cell and gene therapy.',
    chapters: []
  }
];
