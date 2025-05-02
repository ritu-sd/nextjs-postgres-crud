import { db } from "@/db";
import { tasks } from "@/db/schema/task";

export async function POST(req, res) {
  const body = await req.json();
  console.log(body);
  const newTask = {
    task: body,
  };
  const data = await db.insert(tasks).values(newTask).returning();
  return Response.json(data, { status: 201 });
}
