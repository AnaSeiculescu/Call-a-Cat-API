async function cat(req, context) {
    const catAPIkey = Netlify.env.get("CAT_API_KEY");
    const numberOfCats = context.params.numCats;

    const URL = `https://api.thecatapi.com/v1/images/search?size=thumb&limit=${numberOfCats}`;
    const options = {
      method: 'GET',
      headers: {
        'x-api-key': catAPIkey
      }
    };
    const res = await fetch(URL, options);
    const content = res.text();

    const response = new Response(content);
    response.headers.set('Cache-Control', 'no-store');
    
    return response;

}

export default cat;
export const config = {
    path: '/cat-api/:numCats',
}