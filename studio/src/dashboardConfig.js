export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ed4d17f987c7afeac356939',
                  title: 'Sanity Studio',
                  name: 'WorthMore-blog-studio',
                  apiId: '19e6e860-bca1-490b-8044-338550cac42b'
                },
                {
                  buildHookId: '5ed4d17f766834c2d3c1dc26',
                  title: 'Blog Website',
                  name: 'WorthMore-blog',
                  apiId: 'd76d3baf-cf52-47ad-9432-1c3a32b2962a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/therrou/WorthMore-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://WorthMore-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
