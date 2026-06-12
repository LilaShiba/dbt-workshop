document.addEventListener("DOMContentLoaded", () => {

  const button = document.getElementById("saveEntryBtn");
  const status = document.getElementById("saveStatus");

  if (!button) return;

  button.addEventListener("click", () => {

    const entry = {
      date: new Date().toLocaleString(),
      sections: {}
    };

    document.querySelectorAll("textarea.persist").forEach(area => {
      entry.sections[area.dataset.step] = area.value;
    });

    const journal = JSON.parse(localStorage.getItem("dbtJournal")) || [];

    journal.unshift(entry);

    localStorage.setItem(
      "dbtJournal",
      JSON.stringify(journal)
    );

    status.textContent = "✓ Entry saved.";
  });

});