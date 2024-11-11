const form = document.getElementById("research-title-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const topic = document.getElementById("topic").value;
    const education = document.getElementById("education").value;
    const researchLength = document.getElementById("length").value;

    // template for sending form data in json
    const formData = {
        topic: topic,
        education: education,
        researchLength: researchLength,
    };

    fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            // get data from api
            const { research_title, research_gap, relevant_studies } =
                data.data;

            // log data
            console.log("Research Title:", research_title);
            console.log("Research Gap:", research_gap);
            console.log("Relevant Studies:", relevant_studies);

            const researchTitleDom = document.getElementById("research-title");
            researchTitleDom.innerText = research_title;

            const researchGapDom = document.getElementById("research-gap");
            researchGapDom.innerText = research_gap;

            const relevantStudiesDom =
                document.getElementById("relevant-studies");

            // combine relevant studies then display them
            let relevantStudiesCombined = "";
            relevant_studies.forEach((study) => {
                if (study.link) {
                    relevantStudiesCombined += `
                    <article>
                        <h5>${study.title}</h5>
                        <p><strong>Author: </strong> ${study.author}</p>
                        <p><strong>Year: </strong> ${study.year}</p>
                        <p><strong>Link: </strong> 
                            <a href="https://www.google.com/search?q=${encodeURIComponent(
                                study.title
                            )}+${encodeURIComponent(
                        study.author
                    )}" target="_blank">
                                Search for the study
                            </a>
                        </p>
                        <p><strong>Description: </strong> ${
                            study.description
                        }</p>
                    </article>
                `;
                }
            });

            relevantStudiesDom.innerHTML = relevantStudiesCombined;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});
