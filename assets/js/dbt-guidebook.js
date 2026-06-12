
const skills = [

{
  page: 1,
  name: "Observe",
  description:
    "Mindful awareness of thoughts, feelings, and sensations."
},

{
  page: 1,
  name: "Describe",
  description:
    "Putting experiences into words."
},

{
  page: 1,
  name: "Participate",
  description:
    "Engaging fully in the present moment."
},

{
  page: 1,
  name: "Wise Mind",
  description:
    "Balancing emotion and reason."
},

{
  page: 1,
  name: "STOP",
  description:
    "Pause before reacting."
},

{
  page: 1,
  name: "TIPP",
  description:
    "Temperature, intense exercise, paced breathing, and paired muscle relaxation."
},

{
  page: 1,
  name: "Radical Acceptance",
  description:
    "Fully accepting reality as it is."
},

{
  page: 2,
  name: "Check the Facts",
  description:
    "Examine whether emotions fit the situation."
},

{
  page: 2,
  name: "Opposite Action",
  description:
    "Act opposite to emotional urges."
},

{
  page: 2,
  name: "Build Mastery",
  description:
    "Increase confidence through practice."
},

{
  page: 2,
  name: "PLEASE",
  description:
    "Take care of physical health, eating, sleep, and exercise."
},

{
  page: 3,
  name: "DEAR MAN",
  description:
    "Assert needs effectively."
},

{
  page: 3,
  name: "GIVE",
  description:
    "Maintain relationships."
},

{
  page: 3,
  name: "FAST",
  description:
    "Maintain self-respect."
},

{
  page: 3,
  name: "Setting Boundaries",
  description:
    "Learn to say no and advocate for yourself."
}

];

document.addEventListener("DOMContentLoaded", () => {

  const searchBox = document.getElementById("searchBox");
  const results = document.getElementById("results");

  function render(filter = "") {

    results.innerHTML = "";

    skills
      .filter(skill =>
        skill.name.toLowerCase().includes(filter.toLowerCase())
        ||
        skill.description.toLowerCase().includes(filter.toLowerCase())
      )
      .forEach(skill => {

        results.innerHTML += `
          <details>
            <summary>
              <strong>${skill.name}</strong>
              (Page ${skill.page})
            </summary>

            <p>${skill.description}</p>

          </details>
        `;
      });
  }

  searchBox.addEventListener("input", e => {
    render(e.target.value);
  });

  render();

});

