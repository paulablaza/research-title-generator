// template for sending the data to the ai

export function query(topic, education, researchLength) {
    const prompt = `
      {
          "research_title": "<suggested_research_title>",
          "research_gap": "<brief_description_of_research_gap>",
          "relevant_studies": [
              {
                  "title": "<study_title_1>",
                  "author": "<author_or_authors>",
                  "year": <year_of_publication>,
                  "link": "<doi_of_study>",
                  "description": "<short_description_of_study>"
              },
              {
                  "title": "<study_title_2>",
                  "author": "<author_or_authors>",
                  "year": <year_of_publication>,
                  "link": "<doi_of_study>",
                  "description": "<short_description_of_study>"
              },
              {
                  "title": "<study_title_3>",
                  "author": "<author_or_authors>",
                  "year": <year_of_publication>,
                  "link": "<doi_of_study>",
                  "description": "<short_description_of_study>"
              }
          ]
      }
  
      Instructions:
      1. Suggest a research title and identify a research gap based on up to 3 relevant studies related to the user’s inputs.
      2. The research title and studies should be feasible to complete within the specified research length (e.g., 6 months). Ensure that the scope of the title and research is realistic and achievable within the given timeframe.
      3. The education level (e.g., Grade 12, BS in Information Systems) should influence the selection of relevant studies. Choose studies that are appropriate for the user’s education level, meaning that the complexity and depth of the study should be suitable for the user's academic background.
      4. For each relevant study, include the title, author(s), year, and a short description of the study. The author, title, and year must exactly match the information found in the relevant study.
      5. Provide the DOI (Digital Object Identifier) for each study in place of the URL link. Ensure that the DOI is valid and leads to the full study or relevant content. Do not provide any broken or invalid DOI.
      6. If you cannot find any relevant studies that meet the above criteria, do not provide any studies at all. Avoid providing placeholder or incomplete information.
      7. Only reply in JSON format using the structure provided. Do not provide any explanations or additional information outside the JSON format.

      User Inputs:
      - Topic: ${topic}
      - Education: ${education}
      - Research Length: ${researchLength}
      Note: Ensure that the research title and studies align with the education level and are feasible within the specified research length. Ensure that the title, author, and year in the relevant studies match exactly as found in trusted academic sources.
      `;

    return prompt;
}
