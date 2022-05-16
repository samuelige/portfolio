import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.REACT_APP_SANITY_PRJECT_ID;
const token = process.env.REACT_APP_SANITY_TOKEN;

const client = sanityClient({
    projectId,
    dataset: 'production',
    token,
    useCdn: true,
    apiVersion: '2022-05-07'
})

const builder = imageUrlBuilder(client);
const urlFor = (source:any) => builder.image(source);

export {client, urlFor};