import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

export default function Home() {
  const tasks = [
    {
      id: 1,
      description: "Task 1",
    },
    {
      id: 2,
      description: "Task 2",
    },
    {
      id: 3,
      description: "Task 3",
    },
    {
      id: 4,
      description: "Task 4",
    },
    {
      id: 5,
      description: "Task 5",
    },
    {
      id: 6,
      description: "Task 6",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="mb-10 mt-5 max-w-7xl mx-auto">
        <input type="text" className="border " />
        <button className="bg-gradient-to-tr from-blue-700 to-blue-500 text-white px-1 py-0.5 rounded-lg ml-2">
          Add Task
        </button>
      </div>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font bold text-gray-800 mb-8"> Tasks </h1>
        <section className="space-y-6">
          {tasks.map((task) => (
            <div key={task.id} className="flex gap-8 items-center ">
              <div>{task.description}</div>
              <div className="flex gap-2">
                <Pencil />
                <Trash2 />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
