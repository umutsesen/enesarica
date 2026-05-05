const clinicAnchorPattern =
  /<a href="https:\/\/www\.yalovafizyoterapist\.com(?:\/[^"]*)?">([^<]+)<\/a>/g;

const ctaReplacements = [
  {
    pattern:
      /\s*[-—]\s*kurucusu olduğum Yalova Fizyoterapi kliniğinin Yalova, İstanbul ve İzmir iletişim kanallarına de başvurabilirsiniz/gi,
    replacement: '',
  },
  {
    pattern:
      /\s*ya da kurucusu olduğum Yalova Fizyoterapi kliniğinin Yalova, İstanbul ve İzmir iletişim kanallarına başvurabilirsiniz/gi,
    replacement: '',
  },
  {
    pattern:
      /\s*Yalova Fizyoterapi kliniğinin Yalova, İstanbul ve İzmir iletişim kanallarına de başvurabilirsiniz/gi,
    replacement: '',
  },
];

const phraseReplacements = [
  { pattern: /\bFizyones kliniğimde\b/gi, replacement: 'klinik pratiğimde' },
  { pattern: /\bFizyones kliniğime\b/gi, replacement: 'kliniğime' },
  { pattern: /\bFizyones\b/gi, replacement: 'klinik pratiğimde' },
];

export function sanitizeClinicReferencesInHtml(html) {
  let sanitized = html.replace(clinicAnchorPattern, '$1');

  ctaReplacements.forEach(({ pattern, replacement }) => {
    sanitized = sanitized.replace(pattern, replacement);
  });

  phraseReplacements.forEach(({ pattern, replacement }) => {
    sanitized = sanitized.replace(pattern, replacement);
  });

  sanitized = sanitized
    .replace(/sayfasından bana ulaşabilirsiniz/gi, 'sayfasından bana ulaşabilirsiniz')
    .replace(/sayfasından randevu alabilirsiniz/gi, 'sayfasından randevu alabilirsiniz')
    .replace(/\s{2,}/g, ' ');

  return sanitized;
}
