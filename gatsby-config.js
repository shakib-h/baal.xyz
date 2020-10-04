module.exports = {
    siteMetadata: {
        title: `বালের ব্লগ`,
        description: `এক কথায় এটি একটি বালের ওয়েবসাইট.`,
        keywords: [`gatsby`, `theme`, `react`, `blog`],
        author: `বালের অ্যাডমিন`,
        siteUrl: `https://baal.xyz`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
        menuLinks: [{
                name: `বালের সম্পর্কে`,
                link: `/about`,
                type: `internal`, //internal or anchor
            },
            {
                name: `কি জানি বাল`,
                link: `/work`,
                type: `internal`, //internal or anchor
            },
            {
                name: `বালের যোগাযোগ`,
                link: `/contact`,
                type: `internal`, //internal or anchor
            },
        ],
        socialLinks: [{
                name: `Email`,
                link: `admin@baal.xyz`,
                location: `footer`, //Options are "all", "header", "footer"
            },
            {
                name: `Github`,
                link: `https://www.github.com/teemteem`,
                location: `all`, //Options are "all", "header", "footer"
            },
            {
                name: `Twitter`,
                link: `https://www.twitter.com/teemteem`,
                location: `all`, //Options are "all", "header", "footer"
            },
        ],
    },
    plugins: [{
            resolve: `gatsby-theme-catalyst-helium`,
            options: {
                // Core theme
                displaySiteLogo: false,
                displaySiteLogoMobile: false,
                footerContentLocation: "right",
                remarkImagesWidth: 1920,
                // Blog theme
                excerptLength: 200,
                // Helium
                useHero: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-catalyst`,
                short_name: `catalyst`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-theme-catalyst-blog`,
            options: {
                postListTitle: `হোমপেজ`,
            },
        },
    ],
}