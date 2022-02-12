/*
mobileS: '320px',
mobileM: '375px',
mobileL: '425px',
tablet: '768px',
laptop: '1024px',
laptopL: '1440px',
desktop: '2560px'
*/

const size = {
  mobile: '320px',
  tablet: '720px',
  laptop: '960px',
  desktop: '2560px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
