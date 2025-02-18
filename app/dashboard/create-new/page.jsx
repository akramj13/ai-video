"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SelectTopic from "./_components/SelectTopic";

function CreateNew() {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) => {};
  return (
    <div className="md:px-20">
      <h2 className="text-4xl text-center font-extrabold text-primary dark:text-foreground">
        Create New
      </h2>
      <div className="mt-10 shadow-md dark:shadow-light p-10">
        <SelectTopic />
      </div>
    </div>
  );
}

export default CreateNew;
