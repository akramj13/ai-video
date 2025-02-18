"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function SelectTopic() {
  const options = [
    "Custom Prompt",
    "Random AI Story",
    "Scary Story",
    "Funny Story",
    "Motivational Story",
    "Fun Facts",
    "Historical Facts",
  ];
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl text-primary dark:text-foreground">
        Select Topic
      </h2>
      <p className="text-muted-foreground">Choose a topic for your video</p>
      <Select onValueChange={(value) => setSelectedTopic(value)}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedTopic == "Custom Prompt" && (
        <Textarea
          placeholder="Enter your prompt"
          className="w-full mt-2 p-6 text-lg rounded-lg"
        />
      )}
    </div>
  );
}

export default SelectTopic;
