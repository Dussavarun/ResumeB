import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { formData } = await req.json();


    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is not set");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Rules:
    // 1. Keep the same JSON schema and keys exactly as provided
    // 2. Enhance values only - make them more professional
    // 3. Fix invalid fields (email, phone, LinkedIn, GitHub URLs)
    // 4. Use professional wording for experience, education, and projects
    // 5. Add missing industry-relevant keywords based on target role
    // 6. if no data is provides just set a big message that data should be provides do not add data of your own
    // 7. if no data is provided leave it empty except for descriptions as it is optional for the user to provide
    // 8. segregate the skills based on their domain like frontend backend database etc and give
    // 9. based on the user type you need to add the key words in the description also provide some professional summary about the user
    // 10. provide enhanced description of two to three lines about his projects and work experience(if provied)
    // 11. if he has no work experience just add seeking for opurtunities desciprtion with suitable words
    // You are a professional resume enhancer. Return ONLY valid JSON with no markdown formatting or code blocks.
    //         You are a strict JSON resume enhancer. 
    //   Take the input JSON resume data and return ONLY valid JSON (no explanations or extra text).  

    //   Enhancements you must add:  
    //   1. Generate a concise and professional summary for the "personal" section under a new key "summary".  
    //   2. For each project, expand the "description" to include the impact of the project and highlight how the listed tech stack was used.  
    //   3. Improve descriptions of experiences to make them more achievement-focused and professional (use action verbs, show impact).  
    //   4. Keep all existing fields, but only enrich them—do not remove anything.  
    //   5. Ensure output is clean, structured JSON suitable for direct rendering.  
    //   6. change the words properly dont just give the text 

    //   Input: {resume_json_here}  
    const prompt = `
SYSTEM:
1. For personal info, fill all provided fields and keep them accurate.
2. Rewrite the summary_seed into a professional 2–3 sentence summary tailored to the target job.
3. Expand skills into a clean ATS-friendly skills list.
4. For each experience:
   - Generate exactly N bullets (N = preferences.bullets_per_experience or default 3).
   - Start each bullet with a strong action verb.
   - Include relevant tech/skills.
   - Use impact_metrics if provided; if not, create professional phrasing without inventing facts.
5. Similarly enhance projects, education, and certifications sections.
6. Generate matched_keywords array by comparing skills and target_job_description.
7. Provide ATS checks and an estimated_ats_score.
8. Provide improvement_suggestions for missing or weak information.

      Input Data:
      ${JSON.stringify(formData, null, 2)}

      Return the enhanced JSON:`;

    const result = await model.generateContent(prompt);
    const outputText = result.response.text();
    console.log(`the otput given by the ai `, outputText);

    let enhanced;
    try {
      // Clean the response text
      const cleanedText = outputText
        .replace(/```json\s*/gi, "")
        .replace(/```\s*/gi, "")
        .replace(/^\s*```/gm, "")
        .replace(/```\s*$/gm, "")
        .trim();

      enhanced = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Raw AI Response:", outputText);

      // Return enhanced original data as fallback
      enhanced = {
        ...formData,
        description:
          formData.userType === "student"
            ? "Motivated student with strong technical skills seeking opportunities to apply knowledge in real-world projects."
            : "Experienced professional with proven track record of delivering results in dynamic environments.",
      };
    }

    return Response.json({ enhanced });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      {
        error: "Failed to enhance resume",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
