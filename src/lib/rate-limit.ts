export async function checkLeadRateLimit(ip: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return { allowed: true, configured: false };
  const key = `ventrio:lead:${ip}:${Math.floor(Date.now() / 60000)}`;
  const response = await fetch(`${url}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify([["INCR", key], ["EXPIRE", key, 60]]),
    cache: "no-store",
  });
  if (!response.ok) return { allowed: true, configured: true };
  const result = await response.json() as { result?: number }[];
  return { allowed: Number(result[0]?.result || 0) <= 5, configured: true };
}
