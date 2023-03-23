import Head from "next/head"

const LandingPageSeo = () => {
    return (
        <Head>
            <title>Scrnly - Beautify screenshots in just a few clicks</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="title" content="Scrnly - Beautify screenshots in just a few clicks" />
            <meta name="description" content="Beautify screenshots in just a few clicks" />
            <meta name="author" content="Scrnly Team" />

            <meta name="og:image" content="/assets/seo/website_landing_page.PNG" />
            <meta name="og:image:width" content="300px" />
            <meta name="og:image:height" content="200px" />
            <meta name="og:image:alt" content="Scrnly - Landing Page Image" />
            <meta name="og:url" content="https://www.scrnly.com" />
        </Head>
    )
}

export default LandingPageSeo