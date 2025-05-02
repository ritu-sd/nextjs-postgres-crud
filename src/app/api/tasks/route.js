import { db } from "@/db";
import { tasks } from "@/db/schema/task";

export async function GET(req, res) {
  const data = await db.select().from(tasks);
  return Response.json(data, { status: 200 });
}

export async function POST(req, res) {
  const body = await req.json();
  const newTask = {
    task: body,
  };
  const data = await db.insert(tasks).values(newTask).returning();
  return Response.json(data, { status: 201 });
}
