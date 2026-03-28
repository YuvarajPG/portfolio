// app/api/webhooks/route.js

import { setLatestCommit } from "../latest-commit/route";

export async function POST(req) {
    try {
        const body = await req.json();
        const commits = body.commits;

        if (!commits || commits.length === 0) {
            return Response.json({ ok: true });
        }

        const latest = commits[commits.length - 1];

        const formattedDate = new Date(latest.timestamp)
            .toLocaleDateString("en-GB")
            .split("/")
            .map((v, i) => (i === 2 ? v.slice(-2) : v))
            .join("-");

        const data = { date: formattedDate };

        setLatestCommit(data); // ✅ only call, NOT define

        return Response.json({ ok: true });

    } catch (err) {
        console.error(err);
        return new Response("Error", { status: 500 });
    }
}