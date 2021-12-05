import { addBackToTop } from 'vanilla-back-to-top';

addBackToTop({
  diameter: 50,
  backgroundColor: 'var(--color-accent)',
  textColor: 'var(--color-footer)',
  innerHTML:
    '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
  scrollDuration: 1000,
});
