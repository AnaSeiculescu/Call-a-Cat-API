async function cat(req, context) {
    const catAPIkey = Netlify.env.get("CAT_API_KEY");
    const numberOfCat = context.params.numCats;

    const URL = "https://api.thecatapi.com/v1/images/search?size=thumb";
    const options = {
      method: 'GET',
      headers: {
        'x-api-key': catAPIkey
      }
    };
    const res = await fetch(URL, options);
    return new Response('you asked for ' + numberOfCat + ' cats');
    // return res;

}

export default cat;
export const config = {
    path: '/cat-api/:numCats',
}