//Fetch the following query GraphQL API from strapi api
/*
{
  restaurant(documentId: "a1b2c3d4e5d6f7g8h9i0jkl") {
    name
    description
  }
}
*/

//Fetch the query from the GraphQL API strapi with autorization
export async function fetchDocWithLocale(query:string, locale:string) {
    try {
        var res = await fetch('http://localhost:1337/graphql', {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY_MY_PORTFOLIO}`,
                },
            body: JSON.stringify({ 
                query: query,
                variables: {
                    locale:locale
                }
            }),   
        });
        var response = await res.json();
        return response.data;
    } catch (error) {
        console.error(error)
    }
}


