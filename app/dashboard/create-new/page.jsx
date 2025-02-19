"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import Loading from "./_components/Loading";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function CreateNew() {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState(null);
  // Get Video Script
  const getVideoScript = async () => {
    setLoading(true);
    const prompt = `
      Write a script to generate a ${formData.duration} second long (YouTube Short, Instagram Reel, TikTok, etc.) 
      on the topic: "${formData.topic}" along with AI image prompts 
      in a "${formData.style}" image style for each scene and give me 
      the result in JSON format with imagePrompt and contentText as fields, 
      where imagePrompt describes the scene and contentText is the audio 
      that will be used by the AI voice. Make sure the script and visuals maximize 
      the engagement of the audience.
    `;
    console.log(prompt);
    const result = await axios
      .post("/api/get-video-script", {
        prompt: prompt,
      })
      .then((res) => {
        console.log(res.data.result);
        setVideoScript(res.data.result);
        getAudio(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Completed");
        // setLoading(false);
      });
  };

  const getAudio = async (videoScriptData) => {
    setLoading(true);
    let script = "";
    const id = uuidv4();
    videoScriptData.forEach((item) => {
      script += item.contentText + " ";
    });
    console.log(script);
    const result = await axios
      .post("/api/generate-audio", {
        text: script,
        id: id,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const onCreateClickHandler = () => {
    getVideoScript();
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
        <Button className="w-full mt-5" onClick={onCreateClickHandler}>
          Create
        </Button>
      </div>
      <Loading loading={loading} />
    </div>
  );
}

export default CreateNew;
