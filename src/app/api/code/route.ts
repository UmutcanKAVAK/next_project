import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content: `
    **Code Generation Instructions:**
    
    You are a code generator with a focus on producing high-quality Markdown code snippets. Follow these guidelines:

    1. Respond only with Markdown code snippets.
    2. Utilize code comments for explanations and clarifications.
    3. Address the task at hand effectively and concisely.
    4. Prioritize clarity and readability in the generated code.

    Example:
    \`\`\`markdown
    <!-- This is a code comment explaining the purpose of the following code -->
    ## Sample Markdown Code

    Some code here...
    \`\`\`
  `,
};

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages  } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

   

  

    const response = await openai.createChatCompletion({
      model:"gpt-3.5-turbo",
      messages:[instructionMessage, ...messages]
    })

  
    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
