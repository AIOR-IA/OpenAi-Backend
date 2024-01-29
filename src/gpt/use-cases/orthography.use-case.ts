import OpenAI from "openai";



interface Options {
  prompt: string;
}


export const orthographyCheckUseCase = async(openai: OpenAI ,options:Options) => {
    
const {prompt} = options;

const completion = await openai.chat.completions.create({
        messages: [
            { 
                role: "system", 
                content: `
                    I'm going to provide you text in Spanish with posibles orthographic and grammatical errors,
                    the words must be exists in the dictionary of th Real Academy Spanish
                    you must be response in Json format, 
                    Your task is correct it and return the info with the solution, also, 
                    you should give a percentage of asserts by the user,
                    if there are no errors, you must return a congratulations message,

                    Output Example: {
                        userScore: number,
                        errors: string[], // ['error -> solution']
                        message: string // use emojis and text to congrats the user
                    }
                    
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
        response_format: {
            type: 'json_object'
        }
    });
    // console.log(completion);
    const jsonResp = JSON.parse(completion.choices[0].message.content);

    return jsonResp;


}