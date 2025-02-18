"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";

function CreateNew() {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };
  return (
    <div className="md:px-20">
      <h2 className="text-4xl text-center font-extrabold text-primary dark:text-foreground">
        Create New
      </h2>
      <div className="shadow-md dark:shadow-light p-10 rounded-2xl">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button className="w-full mt-5">Create</Button>
      </div>
    </div>
  );
}

export default CreateNew;
