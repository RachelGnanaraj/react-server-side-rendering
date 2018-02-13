export default function renderFullPage(html) {
    return `
        <!doctype html>
        <html>
        <head>
            <title>ShopBack_Rachel_interview!</title>
             <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"> </link>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </head>
        <body>
            <div id="root"><div>${html}</div></div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `
}
