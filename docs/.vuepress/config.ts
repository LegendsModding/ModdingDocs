import { defaultTheme } from '@vuepress/theme-default';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function formatLink(path: string) {
    return path.split(/\\|\//g).join('/').replace('.md', '');
}

/*
Gets the categories from within the frontmatter of an index.md file, and returns them as list.
 */
function getCategoryOrder(frontMatter: matter.GrayMatterFile<string>) {
    const data: { [Key: string]: number } = {};
    if (!frontMatter.data.categories) {
        return data;
    }

    frontMatter.data.categories.forEach(function (
        category: { title: string | number },
        index: number
    ) {
        data[category.title] = index + 1;
    });

    return data;
}

function getCategories(frontMatter: matter.GrayMatterFile<string>) {
    const data: {
        text: any;
        data: any;
        link: string;
    }[] = [];
    if (!frontMatter.data.categories) {
        return data;
    }

    frontMatter.data.categories.forEach(function (
        category: {
            nav_order: number;
            category: any;
            title: any;
        },
        index: any
    ) {
        category.nav_order = -1;
        category.category = category.title;
        data.push({
            text: category.title,
            data: category,
            link: ''
        });
    });

    return data;
}

let order: { [Key: string]: number };

/*
Recursively generate the navigation links for the sidebar.
*/
function generateSidebar(base: string, dir: string) {
    const data: {
        text: any;
        data: { [key: string]: any };
        children?: any;
        link?: string;
        collapsible?: boolean;
    }[] = [];
    const files = fs.readdirSync(dir);

    files.forEach(function (file) {
        let joinedPath = path.join(dir, file);
        const stats = fs.statSync(joinedPath);
        // Handle top level directories
        if (
            stats.isDirectory() &&
            fs.existsSync(path.join(joinedPath, 'index.md'))
        ) {
            const str = fs.readFileSync(
                path.join(joinedPath, 'index.md'),
                'utf8'
            );
            let frontMatter;
            try {
                frontMatter = matter(str);
            } catch (e) {
                joinedPath = path.relative(
                    process.cwd(),
                    path.join(joinedPath, 'index.md')
                );
                console.log(
                    // @ts-ignore
                    `::error file=${joinedPath},line=1,col=1::File ${joinedPath} has invalid frontmatter! ${e.message}`
                );
                throw new Error(
                    // @ts-ignore
                    `File ${joinedPath} has invalid frontmatter! ${e.message}`
                );
            }

            order = getCategoryOrder(frontMatter);

            const children = generateSidebar(base, joinedPath).concat(
                getCategories(frontMatter)
            );

            children.sort(
                (
                    { data: dataA, text: textA },
                    { data: dataB, text: textB }
                ) => {
                    // Default to max int, so without nav order you will show second
                    // Multiply by category value if it exists
                    const navA =
                        (dataA.nav_order || 50) +
                            (order[dataA.category] || 0) * 100 ||
                        Number.MAX_SAFE_INTEGER;
                    const navB =
                        (dataB.nav_order || 50) +
                            (order[dataB.category] || 0) * 100 ||
                        Number.MAX_SAFE_INTEGER;

                    // Tie goes to the text compare! (Will also apply for elements without nav order)
                    if (navA == navB) {
                        return textA.localeCompare(textB);
                    }

                    // Return nav order
                    return navA - navB;
                }
            ),
                data.push({
                    text: frontMatter.data.title,
                    data: frontMatter.data,
                    children: children,
                    collapsible: true
                });

            if (frontMatter.data.title === void 0) {
                throw new Error(
                    'File ' +
                        path.join(joinedPath, 'index.md') +
                        ' has invalid frontmatter!'
                );
            }
        }

        // Handle the normal files
        else if (stats.isFile()) {
            // Don't include non-markdown files, or the index page itself
            if (!file.endsWith('.md') || file.endsWith('index.md')) return;

            const str = fs.readFileSync(joinedPath, 'utf8');
            let frontMatter;
            try {
                frontMatter = matter(str);
            } catch (e) {
                joinedPath = path.relative(process.cwd(), joinedPath);
                console.log(
                    // @ts-ignore
                    `::error file=${joinedPath},line=1,col=1::File ${joinedPath} has invalid frontmatter! ${e.message}`
                );
                throw new Error(
                    // @ts-ignore
                    `File ${joinedPath} has invalid frontmatter! ${e.message}`
                );
            }
            const link = formatLink(joinedPath.toString().replace(base, ''));

            // Don't include hidden pages (ignores children)
            if (frontMatter.data.hidden === true) return;

            data.push({
                text: frontMatter.data.title,
                data: frontMatter.data,
                link
            });
            if (frontMatter.data.title === void 0) {
                joinedPath = path.relative(process.cwd(), joinedPath);
                console.log(
                    `::error file=${joinedPath},line=1,col=1::File ${joinedPath} has invalid frontmatter!`
                );
                throw new Error(`File ${joinedPath} has invalid frontmatter!`);
            }
        }
    });

    return data.sort(
        ({ data: dataA, text: textA }, { data: dataB, text: textB }) => {
            // Default to max int, so without nav order you will show second
            // Multiply by category value if it exists
            const navA =
                (dataA.nav_order || 50) + (order[dataA.category] || 0) * 100 ||
                Number.MAX_SAFE_INTEGER;
            const navB =
                (dataB.nav_order || 50) + (order[dataB.category] || 0) * 100 ||
                Number.MAX_SAFE_INTEGER;

            // Tie goes to the text compare! (Will also apply for elements without nav order)
            if (navA == navB) {
                return textA.localeCompare(textB);
            }

            // Return nav order
            return navA - navB;
        }
    );
}

function getSidebar() {
    const docsPath = path.join(process.cwd(), 'docs');
    return generateSidebar(docsPath, docsPath);
}

export default {
    lang: 'en-US',
    title: 'Legends Wiki',
    description: 'Minecraft Legends Modding Wiki.',
    base: '/',
    head: [['link', { rel: 'icon', href: '/images/mod_ico.png' }]],
    theme: defaultTheme({
        logo: '/images/mod_ico.png',
        logoDark: '/images/mod_ico.png',
        repo: 'https://github.com/LegendsModding/ModdingDocs',
        sidebarDepth: 0,
        // collapsible sidebar
        sidebar: {
            '/': getSidebar()
        },
        docsDir: 'docs',
        editLink: true,
        editLinkText: '⚙️ Edit this page on GitHub.',
        lastUpdatedText: 'Last Updated',

        navbar: [
            {
                text: 'Contribute',
                link: '/contribute.md'
            },
            {
                text: 'Official Docs',
                link: 'https://github.com/Mojang/minecraft-legends-docs'
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/NyzQgPKz5S'
            }
        ]
    })
};
