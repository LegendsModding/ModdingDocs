import { defaultTheme } from '@vuepress/theme-default';

export default {
    lang: 'en-US',
    title: 'Legends Wiki',
    description: 'Minecraft Legends Modding Wiki.',
    base: '/ModdingDocs/',
    theme: defaultTheme({
        logo: '/images/mod_ico.png',
        logoDark: '/images/mod_ico.png',
        repo: 'https://github.com/LegendsModdingCommunity/ModdingDocs',
        sidebarDepth: 0,
        // collapsible sidebar
        sidebar: {
            '/': [
                {
                    text: 'Guide',
                    collapsible: true,
                    children: [
                        '/guide/software-preparation.md',
                        '/guide/project-setup.md',
                        '/guide/game-config.md'
                    ]
                }
            ]
        },
        editLink: true,
        editLinkText: '⚙️ Edit this page on GitHub.',
        lastUpdatedText: 'Last Updated',

        navbar: [
            {
                text: 'Discord',
                link: 'https://discord.gg/NyzQgPKz5S'
            },
            {
                text: 'Contribute',
                link: 'https://github.com/LegendsModdingCommunity/ModdingDocs'
            }
        ]
    })
};
