// EDIT THIS FILE to change contact details and social links.
// Leave a value as "" and it will not be shown anywhere on the site.
// Projects are listed in components/Projects.jsx.

const brand = {
  name: 'RAY DIGITAL',
  tagline: 'Modern websites for businesses.',

  whatsappNumber: '2348136362066', // digits only, with country code
  email: 'charlessamuelraymond@gmail.com',

  github: 'https://github.com/freefire43cjt3-cpu',
  tiktok: 'https://www.tiktok.com/@ray_tech2',
  formspreeId: 'mbgjjdqg', // contact form (formspree.io)

  instagram: '', // add your real URL later
  linkedin: '', // add your real URL later
};

export const whatsappUrl = brand.whatsappNumber ? `https://wa.me/${brand.whatsappNumber}` : '';
export const formUrl = brand.formspreeId ? `https://formspree.io/f/${brand.formspreeId}` : '';
export const emailUrl = brand.email ? `mailto:${brand.email}` : '';

// Only socials that have a real URL are included.
export const socialLinks = [
  { label: 'GitHub', url: brand.github },
  { label: 'TikTok', url: brand.tiktok },
  { label: 'Instagram', url: brand.instagram },
  { label: 'LinkedIn', url: brand.linkedin },
].filter((s) => s.url);

export default brand;