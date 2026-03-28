export async function POST(req) {
    try {
        const body = await req.json();
        const commits = body.commits;

        if (!commits || commits.length === 0) {
            return new Response("No commits", { status: 200 });
        }

        const latest = commits[commits.length - 1];

        const formattedDate = new Date(latest.timestamp)
            .toLocaleDateString("en-GB")
            .split("/")
            .map((v, i) => (i === 2 ? v.slice(-2) : v))
            .join("-");

        const data = {
            message: latest.message,
            author: latest.author.name,
            date: formattedDate, // ✅ use formatted date here
            url: latest.url,
        };

        console.log("Latest Commit:", data);

        return Response.json(data);

    } catch (err) {
        console.error(err);
        return new Response("Error", { status: 500 });
    }
}