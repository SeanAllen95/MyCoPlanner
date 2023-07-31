import React, { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const HiddenMushroom = () => {
  
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  configuration.baseOptions.headers = {
    Authorization: "Bearer " + "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",
  };

  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 4000,
      });
      //console.log("response", result.data.choices[0].text);
      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      //console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
    <section>
      <div className='hidden-mushroom'>
      <img src="/Mushroom4.png" height='300px'></img>
        <form onSubmit={handleSubmit}>
          <input type="text" id='mushroom-input' value={prompt} placeholder="Ask the mushroom" onChange={(e) => setPrompt(e.target.value)}></input>
          <button type="submit">Ask!</button>
        </form>
      </div>
      {apiResponse && (
        <div>
            <h2>Mushroom response:</h2>
            <p>{apiResponse}</p>
          
        </div>
      )}
       </section>
    </>
  );
};

export default HiddenMushroom;
