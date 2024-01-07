export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");

    const res = await fetch(`https://disney-clone-demo.azurewebsites.net/api/getAISuggestion?term=${term}`, {
        method: "GET",
        next: {
            revalidate: 24 * 60 * 60 //24hrs
        }
    });

    const message = await res.text();

    return Response.json({message});
}