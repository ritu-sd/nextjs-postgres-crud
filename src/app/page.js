"use client";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [val, setVal] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchClients = async () => {
    const response = await fetch("/api/tasks");
    const data = await response.json();
    if (data) {
      setTasks(data);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleChange = async (e) => {
    e.preventDefault();
    if (val) {
      const requestBody = val;
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      setVal("");
      fetchClients();
    } else {
      console.log("Task is required");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="mb-10 mt-5 max-w-7xl mx-auto">
        <form>
          <input
            type="text"
            className="border "
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button
            className="bg-gradient-to-tr from-blue-700 to-blue-500 text-white px-1 py-0.5 rounded-lg ml-2 "
            onClick={handleChange}
          >
            Add Task
          </button>
        </form>
      </div>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font bold text-gray-800 mb-8"> Tasks </h1>
        <section className="space-y-6 text-black">
          {tasks?.map((task) => {
            console.log(task.task);
            return (
              <div key={task.id} className="flex gap-8 items-center ">
                <div>{task.task}</div>
                <div className="flex gap-2">
                  <Pencil />
                  <Trash2 />
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
