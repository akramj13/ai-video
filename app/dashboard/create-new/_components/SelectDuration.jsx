"use client";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

function SelectDuration({ onUserSelect }) {
  const options = [
    "40 seconds",
    "50 seconds",
    "60 seconds",
    "70 seconds",
    "80 seconds",
    "90 seconds",
    "100 seconds",
    "110 seconds",
    "120 seconds",
  ];
  const [selectedDuration, setSelectedDuration] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl text-primary dark:text-foreground">
        Select Duration
      </h2>
      <p className="text-muted-foreground">Choose a topic for your video</p>
      <Select
        onValueChange={(value) => {
          setSelectedDuration(value);
          onUserSelect("duration", value);
        }}
      >
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Duration" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectDuration;
