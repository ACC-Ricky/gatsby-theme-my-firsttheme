const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production'){
    dotenv.config()
}
// require("dotenv").config({
//     path: `.env.${process.env.NODE_ENV}`,
// })
module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `axj298k780o2`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: '2ZBshtIBtciTPryliHc1FcphssgHg-Fvq6Y3Sz-K_RY',
                host: `preview.contentful.com`,
            },
        },
    ],
};