// app/api/latest-commit/route.js
import { setLatestCommit } from "../latest-commit/route";
let latestCommit = null; // 🔥 shared memory

export async function GET() {
    if (!latestCommit) {
        return Response.json({ date: null });
    }

    return Response.json(latestCommit);
}

// 👇 import this in webhook route
export function setLatestCommit(data) {
    latestCommit = data;
}