import OpenAI from "openai";



interface Options {
  prompt: string;
}


export const prosConsDicusserUseCase = async(openai: OpenAI ,options:Options) => {
    
const {prompt} = options;

const completion = await openai.chat.completions.create({
        messages: [
            { 
                role: "system", 
                content: `
                    I'm going to provide you a question and your task is return a response in Spanish with pros and cons,
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
    return completion.choices[0].message;


}