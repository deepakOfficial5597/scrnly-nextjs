import Head from "next/head"

const EditorPageSeo = () => {
    return (
        <Head>
            <title>Scrnly - Editor Screen</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="title" content="Scrnly - Editor Screen" />
            <meta name="description" content="Editor Screen to apply modifications to your screenshots" />
            <meta name="author" content="Scrnly Team" />

            <meta name="og:image" content="/assets/seo/website_editor_page/PNG" />
            <meta name="og:image:width" content="300px" />
            <meta name="og:image:height" content="200px" />
            <meta name="og:image:alt" content="Scrnly - Editor Screen Image" />
            <meta name="og:url" content="https://www.scrnly.com" />
        </Head>
    )
}

export default EditorPageSeo