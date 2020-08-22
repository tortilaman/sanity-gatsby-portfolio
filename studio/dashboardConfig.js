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
                  buildHookId: '5f4174334c09931c9824fb3d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xymqu7ep',
                  apiId: '335544a2-4dda-4ef5-8a01-f819155a443d'
                },
                {
                  buildHookId: '5f41743305ebe97aa2ed8aad',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9cavrd5e',
                  apiId: 'c7901d7e-94a5-43c0-a1dc-5a65e15f26e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tortilaman/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9cavrd5e.netlify.app',
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
