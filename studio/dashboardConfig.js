export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d83e0a9ab37ad3d93b5dba6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pyynu4q5',
                  apiId: '62f1645c-b6fc-4637-abd0-78db6734015e'
                },
                {
                  buildHookId: '5d83e0aaab37ad82beb5dba3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8ef4ewzy',
                  apiId: '5a86a096-006f-473f-8077-81917cb6367d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TBR73/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8ef4ewzy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
