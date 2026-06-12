document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("journalEntries");

  if (!container) return;

  const journal =
    JSON.parse(localStorage.getItem("dbtJournal")) || [];

  if (journal.length === 0) {
    container.innerHTML = "<p>No entries yet.</p>";
    return;
  }

  journal.forEach(entry => {

    const card = document.createElement("details");
    card.open = false;

    let html = `
      <summary><strong>${entry.date}</strong></summary>
    `;

    for (const [name, value] of Object.entries(entry.sections)) {

      if (!value.trim()) continue;

      html += `
        <h3>${name}</h3>
        <p>${value.replace(/\n/g,"<br>")}</p>
      `;
    }

    card.innerHTML = html;

    container.appendChild(card);

  });

});