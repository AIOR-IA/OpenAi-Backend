import OpenAI from "openai";



interface Options {
  prompt: string;
}


export const prosConsDicusserStreamUseCase = async(openai: OpenAI ,options:Options) => {
    
const {prompt} = options;

return await openai.chat.completions.create({
        stream: true,
        messages: [
            { 
                role: "system", 
                content: `
                    I'm going to provide you a question and your task is return a response with pros and cons,
                    the response must be in markdown format,
                    the pros and cons should be in a list.
                    `
            },
            {
                role:'user',
                content: prompt,
            }
        ],
        model: "gpt-3.5-turbo-1106",
        temperature: 0.3,
        max_tokens: 150,

    });

}