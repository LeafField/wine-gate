import { revalidatePath } from "next/cache";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("id");
  revalidatePath(`/article/${slug}`);
  return new Response(JSON.stringify({ id: slug }), { status: 200 });
}
