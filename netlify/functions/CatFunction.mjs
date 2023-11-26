async function cat() {
    const catAPIkey = Netlify.env.get("CAT_API_KEY");
    return new Response('Am cerut poza' + catAPIkey);
}

export default cat;
export const config = {
    path: '/cat-api',
}