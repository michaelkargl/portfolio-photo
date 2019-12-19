module.exports = {
  siteTitle: 'osaPortfolio', // <title>
  manifestName: 'Multiverse',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/osasoftworks/portfolio/osaportfolio/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'OSA | Michael Kargl',
  subHeading: 'Software/Photo Designer',
  // social
  socialLinks: [
    {
      icon: 'fa-gitlab',
      name: 'GitLab',
      url: 'https://gitlab.com/osamichaelkargl/',
    },
    {
      icon: 'fa-instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/michaelkargl/',
    },
    {
      icon: 'fa-500px',
      name: '500px',
      url: 'https://500px.com/ohsnaparts',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:michael.kargl@posteo.net',
    }
  ],
};
