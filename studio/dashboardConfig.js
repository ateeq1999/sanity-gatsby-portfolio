export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcf8e520d264dd8636ab12f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-91wnrxhw',
                  apiId: '703db0ab-076c-43d0-a741-175aa8851c54'
                },
                {
                  buildHookId: '5fcf8e5272dc52e05bdffb23',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-j6i9ndvu',
                  apiId: 'd4b035d9-25bf-4d96-8b99-5aeeca3e00d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ateeq1999/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-j6i9ndvu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
