const items = [
  {
    name: "Web Development",
    category: "Technology",
    description: "Building portfolio pages with HTML, CSS, and JavaScript."
  },
  {
    name: "IT Support",
    category: "Technology",
    description: "Troubleshooting workplace technology and helping users solve technical issues."
  },
  {
    name: "Drawing",
    category: "Creative",
    description: "Using art as a creative outlet and a way to explore visual ideas."
  },
  {
    name: "Portfolio Design",
    category: "Creative",
    description: "Designing web pages with structure, color, layout, and readability in mind."
  },
  {
    name: "Artificial Intelligence",
    category: "Research",
    description: "Learning how intelligent tools affect technology, work, and daily life."
  },
  {
    name: "Aviation History",
    category: "Research",
    description: "Studying aircraft, airlines, and the systems behind aviation."
  }
];

function renderItems(list) {
  const container = document.getElementById("items-container");

  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML =
      "<h3>" + list[i].name + "</h3>" +
      "<p>" + list[i].description + "</p>" +
      "<span class='item-tag'>" + list[i].category + "</span>";

    container.appendChild(card);
  }

  document.getElementById("result-count").textContent =
    list.length + " items shown";
}

function filterItems(selectedCategory) {
  switch (selectedCategory) {
    case "":
      renderItems(items);
      break;

    case "Technology":
      const filteredTechnology = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Technology") {
          filteredTechnology.push(items[i]);
        }
      }
      renderItems(filteredTechnology);
      break;

    case "Creative":
      const filteredCreative = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Creative") {
          filteredCreative.push(items[i]);
        }
      }
      renderItems(filteredCreative);
      break;

    case "Research":
      const filteredResearch = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Research") {
          filteredResearch.push(items[i]);
        }
      }
      renderItems(filteredResearch);
      break;

    default:
      renderItems(items);
      break;
  }
}

filterItems("");
