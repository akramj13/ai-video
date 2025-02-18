"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import EmptyState from "./_components/EmptyState";
import Link from "next/link";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <Link href="/dashboard/create-new">
          <Button>Create New</Button>
        </Link>
      </div>
      {videoList.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          {videoList.map((video) => (
            <div key={video.id}>{video.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
