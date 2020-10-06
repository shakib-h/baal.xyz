module.exports = {
    siteMetadata: {
        title: `বালের ব্লগ`,
        description: `এক কথায় এটি একটি বালের ওয়েবসাইট.`,
        keywords: [`বাল`, `ব্লগ`, `বালের ব্লগ`, `বালছাল`],
        author: `বালের অ্যাডমিন`,
        siteUrl: `https://baal.xyz`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
        menuLinks: [{
                name: `বালের যোগাযোগ`,
                link: `/contact`,
                type: `internal`, //internal or anchor
            },
        ],
        socialLinks: [{
                name: `Email`,
                link: `ki@baal.xyz`,
                location: `footer`, //Options are "all", "header", "footer"
            },
            {
                name: `Facebook`,
                link: `https://www.facebook.com/baal.xyz`,
                location: `all`, //Options are "all", "header", "footer"
            },
            {
                name: `Instagram`,
                link: `https://www.instagram.com/baal.xyz`,
                location: `all`, //Options are "all", "header", "footer"
            },
            {
                name: `Twitter`,
                link: `https://www.twitter.com/baal.xyz`,
                location: `all`, //Options are "all", "header", "footer"
            },
        ],
    },
    plugins: [
        `gatsby-plugin-netlify`,
        `gatsby-plugin-netlify-cms`,
        `netlify-cms-app`,
        {
            resolve: `gatsby-theme-catalyst-helium`,
            options: {
                // Core theme
                displaySiteLogo: false,
                displaySiteLogoMobile: false,
                footerContentLocation: "center",
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
                name: `বালের ব্লগ`,
                short_name: `বালের ব্লগ`,
                start_url: `/`,
                background_color: `#363636`,
                theme_color: `#80d8ff`,
                display: `minimal-ui`,
                icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-theme-catalyst-blog`,
            options: {
                postListTitle: `বালের পোস্ট`,
                useColorMode: `dark`,
            },
        },
    ],
}