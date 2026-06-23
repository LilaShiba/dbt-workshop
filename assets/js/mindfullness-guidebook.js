const topics = [

{
page: 1,
name: "Mindful Breathing",
description:
"Focus attention on the breath and gently return when the mind wanders."
},

{
page: 1,
name: "Body Scan",
description:
"Notice sensations throughout the body without judgment."
},

{
page: 1,
name: "Observe",
description:
"Pay attention to thoughts, feelings, and experiences as they arise."
},

{
page: 2,
name: "Grounding",
description:
"Use the senses to reconnect with the present moment."
},

{
page: 2,
name: "Five Senses Exercise",
description:
"Identify things you can see, hear, touch, smell, and taste."
},

{
page: 2,
name: "Loving Kindness",
description:
"Cultivate compassion toward yourself and others."
},

{
page: 3,
name: "Walking Meditation",
description:
"Bring awareness to each step and movement."
},

{
page: 3,
name: "Progressive Muscle Relaxation",
description:
"Release tension by tightening and relaxing muscle groups."
}

];

document.addEventListener("DOMContentLoaded", () => {

const searchBox = document.getElementById("searchBox");
const results = document.getElementById("results");

function render(filter = "") {


results.innerHTML = "";

topics
  .filter(topic =>
    topic.name.toLowerCase().includes(filter.toLowerCase())
    ||
    topic.description.toLowerCase().includes(filter.toLowerCase())
  )
  .forEach(topic => {

    results.innerHTML += `
      <details>
        <summary>
          <strong>${topic.name}</strong>
          (Page ${topic.page})
        </summary>

        <p>${topic.description}</p>

      </details>
    `;
  });


}

searchBox.addEventListener("input", e => {
render(e.target.value);
});

render();

});
