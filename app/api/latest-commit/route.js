// app/api/latest-commit/route.js

let latestCommit = null;

export async function GET() {
    return Response.json(latestCommit || { date: null });
}

export function setLatestCommit(data) {
    latestCommit = data;
}