const dayCard = document.querySelector("#dayCard");
const sectionTemplate = document.querySelector("#sectionTemplate");
const prevDay = document.querySelector("#prevDay");
const nextDay = document.querySelector("#nextDay");
const navTitle = document.querySelector("#navTitle");
const navSub = document.querySelector("#navSub");
const statusPill = document.querySelector("#statusPill");

const sharedTickets = [
  {
    emoji: "🎤",
    title: "Chance Tickets",
    href: "https://www.chanceraps.com/tour",
    link: "Chance shows",
    note: "Not required. Day before flying out.",
    details: [
      "10 year anniversary tour, playing Coloring Book Only",
      "Armando, Dominic, Oliver, Ethan, and Sam will be going",
    ],
    key: "chance-tickets",
  },
  {
    emoji: "✈️",
    title: "Flights In and Out",
    href: "https://www.google.com/travel/flights/search?tfs=CBwQAhorEgoyMDI2LTA5LTIzMgJXTjICVUFqBwgBEgNTRk9yDAgDEggvbS8wMV9kNBorEgoyMDI2LTA5LTI4MgJXTjICVUFqDAgDEggvbS8wMV9kNHIHCAESA1NGT0ABSAFwAYIBCwj___________8BmAEB&tfu=CmhDalJJUTNock5WVklhM1JPVkZGQlRGWXlkRUZDUnkwdExTMHRMUzB0TFc5clpHSXhOa0ZCUVVGQlIzQktZemhuUkRsek1GRkJFZ0V3R2dzSXlZVUNFQUlhQTFWVFJEZ1hjTW1GQWc9PRIGCAAQABgA",
    link: "Flight status / booking",
    note: "Fly into ORD or MDW",
    details: [
      "Feel free to fly in and out whenever. Earliest Wednesday latest Monday.",
      "Recommended Flight: leaving at 4:35PM from SFO, leaving at 9:40PM from ORD. $371.",
      "Airport rides can be coordinated; my mom can help drive people to and from the airport.",
    ],
    key: "united-flight",
  },
  {
    emoji: "🎸",
    title: "Two Door Cinema Club at the Salt Shed",
    href: "https://www.stubhub.com/two-door-cinema-club-chicago-tickets-9-24-2026/event/160686205/",
    link: "Band tour page",
    note: "The main event. Ticket prices might be increasing, but this is the big deal.",
    details: [
      "Dominic, Ethan, and Sam confirmed going.",
      "Thursday night Chicago concert at The Salt Shed.",
    ],
    key: "tdcc-tickets",
  },
  {
    emoji: "🏁",
    title: "Team Demolition Derby",
    href: "https://www.dirtoval66.com/teamdemo/",
    link: "Team Demo event page",
    note: "All women's team demolition derby at the racetrack near mokena. Dominic will buy all the tickets.",
    image: "https://www.dirtoval66.com/wp-content/uploads/2026/02/rfb-2026-blurb.jpg",
    details: [
      "Saturday, September 26 at The Dirt Oval @ Route 66 Raceway, 3200 S. Chicago Street, Joliet.",
      "Parking, tailgating, and gates open at 4:00pm. Opening ceremonies are 7:00pm, and action begins at 7:15pm.",
      "The event includes Team Demolition Derby, the women's Team Demo Race, spectator car races, music, and fireworks.",
      "Plan for tickets between $45 and $75 depending on seating, fees, and whether we want pit passes. The pricier route is the pit pass so we can go into the pit.",
      "We are planning to tailgate beforehand. Dominic will buy the group tickets once RSVPs are locked.",
    ],
    key: "dirt-oval-details",
  }
];

const logistics = [
  ["Home base", "Everyone is welcome to stay at my house: 11465 194th St., Mokena, IL. It will be sleepover-style in the basement, with hot tub, bonfires, backyard time, and a chance to see where I grew up."],
  ["Work setup", "We can WFH from the house, work from local coffee shops, or go into the Chicago Uber office on Thursday or Friday if that makes sense."],
  ["Airports", "Go in and out of MDW or ORD. Both are accesible to Mokena by train or Uber. More on flights below."],
  ["Getting around", "We have minivans and Uber to get around near Mokena. We live right by the train that goes into downtown Chicago."]
];

const overviewSoundtrack = {
  title: "Overview soundtrack",
  videoId: "RZxjfYT39i8",
};

const rsvps = [
  ["01", "Dom", "Yes", "Host"],
  ["02", "Guest 1", "TBD", "Derby spot"],
  ["03", "Guest 2", "TBD", "Derby spot"],
  ["04", "Guest 3", "TBD", "Derby spot"],
  ["05", "Guest 4", "TBD", "Derby spot"],
  ["06", "Guest 5", "TBD", "Derby spot"],
  ["07", "Guest 6", "TBD", "Derby spot"],
  ["08", "Guest 7", "TBD", "Derby spot"],
  ["09", "Guest 8", "TBD", "Derby spot"],
  ["10", "Guest 9", "TBD", "Derby spot"],
  ["11", "Guest 10", "TBD", "Derby spot"],
  ["12", "Guest 11", "TBD", "Derby spot"],
];

const trip = [
  {
    date: "2026-09-22",
    title: "SF Sendoff",
    subtitle: "Chance, packing, chaos",
    place: "San Francisco",
    vibe: "pregame the hometown launch",
    pitch: "The night before the Midwest reset: Chance the Rapper, late packing, and the last bit of SF chaos before everything slows down.",
    alert: null,
    bring: ["Concert fit", "Chargers", "Travel docs", "Pack tonight"],
    plan: [
      ["Night", "Chance the Rapper in San Francisco."],
      ["Late", "Pack for work calls, dirt track, hot tub, and slow backyard mornings."],
      ["Reminder", "Start the trip slightly chaotic, then land into calm."],
    ],
    notes: [
      ["Mood", "High energy sendoff before the Mokena stretch."],
      ["Tomorrow", "SFO to Chicago, then straight into Portillo's and garage beers."],
    ],
  },
  {
    date: "2026-09-23",
    title: "Welcome to Mokena",
    subtitle: "Portillo's, garage beers, home base",
    place: "SFO → Chicago → Mokena",
    vibe: "touch down in the Paris of the Midwest",
    pitch: "Fly in, settle into the hometown base, and let the weekend get local immediately.",
    alert: "My mom can help with airport rides, so arrivals do not need to be perfectly synchronized.",
    bring: ["Flight details", "Comfy travel clothes", "Appetite", "Garage beer stamina"],
    plan: [
      ["Flight", "UA2847 from SFO to Chicago."],
      ["Arrival", "Settle into Mokena and meet the home base."],
      ["Food", "Portillo's, then garage beers."],
      ["Night", "Hot tub or low-key backyard reset if people are tired."],
    ],
    notes: [
      ["Home base", "This is the hub for slow mornings, bonfires, and backyard hangs."],
      ["Airport", "Rides can be coordinated around arrival windows."],
    ],
  },
  {
    date: "2026-09-24",
    title: "Salt Shed Night",
    subtitle: "WFH, then Two Door Cinema Club",
    place: "Mokena + Chicago",
    vibe: "workday into city night",
    pitch: "A normal workday from Mokena turns into a Chicago concert night at The Salt Shed.",
    alert: null,
    bring: ["Laptop", "Concert fit", "Transit plan", "Light jacket"],
    plan: [
      ["Day", "WFH from Mokena."],
      ["Evening", "Head into Chicago for Two Door Cinema Club."],
      ["Venue", "The Salt Shed."],
      ["Late", "Back to Mokena or stay loose depending on the group."],
    ],
    notes: [
      ["Pace", "Protect the work block, then switch modes."],
      ["Optional", "Chicago friends may join around the show."],
    ],
  },
  {
    date: "2026-09-25",
    title: "Chicago Friends",
    subtitle: "Rooftops, Riverwalk, wandering",
    place: "Chicago",
    vibe: "meet the crew and drift",
    pitch: "This is the city day: work first, then meet my Chicago friends and let the night wander.",
    alert: null,
    bring: ["Work setup", "Walking shoes", "Going-out layer", "Phone battery"],
    plan: [
      ["Day", "Work from Chicago."],
      ["After work", "Rooftops, Riverwalk, bars, and city wandering."],
      ["Social", "Meet friends from Chicago."],
      ["Night", "Loose plan, no need to over-script it."],
    ],
    notes: [
      ["Why come", "You get the hometown weekend and the Chicago friend crossover."],
      ["Pace", "Fun, but not the main sprint of the weekend."],
    ],
  },
  {
    date: "2026-09-26",
    title: "Derby Birthday",
    subtitle: "12-person RSVP anchor",
    place: "Dirt Oval 66, Joliet",
    vibe: "full Americana birthday night",
    pitch: "The anchor event. I am booking this as a birthday thing and need 12 people, so RSVP matters.",
    alert: "RSVP soon: this is the event that needs a clean headcount and ticket coordination.",
    bring: ["Derby ticket", "Dust-friendly shoes", "Layer", "Tailgate supplies"],
    plan: [
      ["Before", "Coordinate the 12-person birthday group."],
      ["Event", "Team Demolition Derby at Dirt Oval 66."],
      ["Vibe", "Tailgate, noise, dirt, fireworks, Americana."],
      ["After", "Back to Mokena for hot tub or bonfire if people have energy."],
    ],
    notes: [
      ["Event details", "Dirt Oval lists Team Demolition Derby on September 26 in Joliet."],
      ["Priority", "This is the key RSVP decision for the weekend."],
    ],
    showTickets: true,
    showRsvp: true,
  },
  {
    date: "2026-09-27",
    title: "Nature Sunday",
    subtitle: "forest preserves, grill, bonfire",
    place: "Mokena",
    vibe: "slow day where I am from",
    pitch: "The whole point: slow hometown day, nature, food, hot tub, bonfires, and seeing the little fantasy version of where I grew up.",
    alert: "People can fly out Sunday if needed, but Monday is the slower planned departure.",
    bring: ["Walking shoes", "Bike clothes", "Swimsuit", "Bonfire layer"],
    plan: [
      ["Morning", "Slow breakfast and backyard reset."],
      ["Day", "Walk or bike through the mini forest preserves around Mokena."],
      ["Food", "Grill, Joey's Red Hots, Country Charm, Chef Klaus, Mr. Benny's, or Portillo's depending on the group."],
      ["Night", "Hot tub and bonfire."],
    ],
    notes: [
      ["Restaurants", "Mr. Benny's Steak & Lobster House, Chef Klaus' Bier Stube, Country Charm, Joey's Red Hots, Portillo's."],
      ["Pace", "This should feel unhurried and local."],
    ],
  },
  {
    date: "2026-09-28",
    title: "Soft Goodbye",
    subtitle: "breakfast cleanup, flexible flights",
    place: "Mokena → SF",
    vibe: "leave Sunday or Monday",
    pitch: "Monday is the default flight home, but Sunday departures work too. Airport rides can be coordinated.",
    alert: "Flights out do not matter too much; Sunday or Monday can both work.",
    bring: ["Packed bag", "Leftovers", "Chargers", "Airport timing"],
    plan: [
      ["Morning", "Breakfast cleanup."],
      ["Default", "United 2437 back to SF."],
      ["Flexible", "Sunday departures are fine too."],
      ["Airport", "My mom can help drive people to and from the airport."],
    ],
    notes: [
      ["Goal", "Make leaving easy, not stressful."],
      ["Wrap", "Full camera roll, low battery, successful hometown pitch."],
    ],
  },
];

const pageCount = trip.length + 1;
let current = getInitialIndex();

function formatDate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function addSection(title, bodyBuilder, open = true) {
  const node = sectionTemplate.content.firstElementChild.cloneNode(true);
  node.classList.toggle("is-open", open);
  const button = node.querySelector(".section-toggle");
  const heading = node.querySelector(".section-heading");
  const body = node.querySelector(".section-body");
  heading.textContent = title;
  button.setAttribute("aria-expanded", String(open));
  bodyBuilder(body);
  button.addEventListener("click", () => {
    const isOpen = node.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
  return node;
}

function render(index) {
  current = Math.max(0, Math.min(pageCount - 1, index));
  if (current === 0) {
    renderOverview();
    return;
  }

  const dayIndex = current - 1;
  const day = trip[dayIndex];
  dayCard.classList.remove("is-in");
  dayCard.innerHTML = "";

  const hero = document.createElement("div");
  hero.className = "poster-hero";
  hero.innerHTML = `
    <img src="assets/mokena-hero.png" alt="">
    <div class="poster-title">
      <h1>${day.title}</h1>
      <p class="poster-p1">${day.vibe}</p>
      <p class="poster-p2">${formatDate(day.date)} · ${day.subtitle}</p>
    </div>
    <div class="day-stamp">
      <span>Day</span>
      <strong>${dayIndex + 1}</strong>
      <em>of ${trip.length}</em>
    </div>
    <div class="place-sign">${day.place}</div>
  `;

  const content = document.createElement("div");
  content.className = "poster-content";

  content.append(
    addSection("✦ Why this day", (body) => {
      body.innerHTML = `<div class="pitch-box">${day.pitch}</div>`;
    })
  );

  if (day.alert) {
    content.append(
      addSection("⚠ Important", (body) => {
        body.innerHTML = `<div class="alert-box">${day.alert}</div>`;
      })
    );
  }

  content.append(
    addSection("✦ Bring", (body) => {
      body.innerHTML = `<div class="tag-list">${day.bring.map((item) => `<span>${item}</span>`).join("")}</div>`;
    }, dayIndex === 4 || dayIndex === 5)
  );

  content.append(
    addSection("✦ The plan", (body) => {
      body.innerHTML = `
        <div class="timeline">
          ${day.plan.map(([when, what]) => `
            <div class="step">
              <strong>${when}</strong>
              <p>${what}</p>
            </div>
          `).join("")}
        </div>
      `;
    })
  );

  content.append(
    addSection("✦ Local notes", (body) => {
      body.innerHTML = `
        <div class="note-grid">
          ${day.notes.map(([title, note]) => `
            <article class="note-card">
              <h3>${title}</h3>
              <p>${note}</p>
            </article>
          `).join("")}
        </div>
      `;
    }, dayIndex === 5)
  );

  if (day.showTickets) {
    content.append(
      addSection("✦ Tickets", (body) => {
        body.innerHTML = `
          <div class="ticket-grid">
            ${sharedTickets.map((ticket) => `
              <article class="ticket-card">
                <span class="ticket-emoji" aria-hidden="true">${ticket.emoji}</span>
                <div>
                  <h3>${ticket.title}</h3>
                  <p><a href="${ticket.href}" target="_blank" rel="noreferrer">${ticket.link}</a></p>
                  <input data-note="${ticket.key}" type="text" placeholder="${ticket.note}">
                </div>
              </article>
            `).join("")}
          </div>
        `;
      }, true)
    );
  }

  if (day.showRsvp) {
    content.append(
      addSection("✦ 12-person RSVP", (body) => {
        body.innerHTML = `
          <div class="rsvp-grid">
            ${rsvps.map(([spot, person, status, note]) => `
              <article class="rsvp-card">
                <h3><strong>${spot}</strong> ${person}</h3>
                <p>${status} · ${note}</p>
              </article>
            `).join("")}
          </div>
        `;
      }, true)
    );
  }

  dayCard.append(hero, content);
  requestAnimationFrame(() => dayCard.classList.add("is-in"));

  prevDay.disabled = current === 0;
  nextDay.disabled = current === pageCount - 1;
  navTitle.textContent = day.title;
  navSub.textContent = `Day ${dayIndex + 1} of ${trip.length}`;
  statusPill.textContent = dayIndex === 4 ? "12 spots" : "RSVP soon";
  history.replaceState(null, "", `#day-${dayIndex + 1}`);
  restoreNoteFields();
}

function renderOverview() {
  dayCard.classList.remove("is-in");
  dayCard.innerHTML = "";

  const hero = document.createElement("div");
  hero.className = "poster-hero poster-hero--overview";
  hero.innerHTML = `
    <img src="assets/barns.JPG" alt="">
    <div class="poster-title">
      <h1>Mokena</h1>
      <p class="poster-p1">See it for yourself!</p>
      <p class="poster-p2">September 22-28, 2026</p>
    </div>
    <div class="place-sign">Overview</div>
  `;

  const content = document.createElement("div");
  content.className = "poster-content";

  content.append(
    addSection("Overview", (body) => {
      body.innerHTML = `
        <div class="pitch-box">
          You've heard me talk about it enough, now is your chance to see Mokena in all its glory.
          Enjoy a calm weekend too see where I am from: local restaurants,
          forest preserve walks and bike rides, backyard hangs, hot tub, bonfires, Chicago friends, lightning bugs,
          and a full Americana Saturday at the Team Demolition Derby. \n 
          This website has most all the details you'd need.
        </div>
      `;
    })
  );

  content.append(
    addSection("Logistics", (body) => {
      body.innerHTML = `
        <div class="note-grid">
          ${logistics.map(([title, text]) => `
            <article class="note-card ${title === "Home base" ? "note-card--highlight" : ""}">
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
      `;
    })
  );

  content.append(
    addSection("Links", (body) => {
      body.innerHTML = `
        <div class="overview-link-grid">
          ${sharedTickets.map((ticket) => `
            <article class="overview-link-card">
              <button class="overview-link-summary" type="button" aria-expanded="false">
                <span class="ticket-emoji" aria-hidden="true">${ticket.emoji}</span>
                <span>
                  <strong>${ticket.title}</strong>
                  <em>${ticket.note}</em>
                </span>
                <span class="link-toggle" aria-hidden="true">⌄</span>
              </button>
              <div class="overview-link-details">
                ${ticket.image ? `<img src="${ticket.image}" alt="${ticket.title} event flyer">` : ""}
                <ul>
                  ${(ticket.details || [ticket.note]).map((detail) => `<li>${detail}</li>`).join("")}
                </ul>
                <a class="open-link" href="${ticket.href}" target="_blank" rel="noreferrer">Open link</a>
              </div>
            </article>
          `).join("")}
        </div>
      `;
    })
  );

  dayCard.append(hero, content);
  if (current === 0) {
    hero.insertAdjacentHTML("beforeend", `
      <button class="music-button" type="button" aria-expanded="false" aria-label="Play overview soundtrack">♪</button>
      <div class="music-popover" aria-label="Overview soundtrack">
        <iframe
          title="${overviewSoundtrack.title}"
          src="https://www.youtube.com/embed/${overviewSoundtrack.videoId}?playsinline=1&rel=0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>Tap play for the soundtrack.</p>
      </div>
    `);
    const musicButton = hero.querySelector(".music-button");
    const musicPopover = hero.querySelector(".music-popover");
    musicButton.addEventListener("click", () => {
      const isOpen = musicPopover.classList.toggle("is-open");
      musicButton.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        const iframe = musicPopover.querySelector("iframe");
        iframe.src = `https://www.youtube.com/embed/${overviewSoundtrack.videoId}?autoplay=1&playsinline=1&rel=0`;
      }
    });
  }
  dayCard.querySelectorAll(".overview-link-summary").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".overview-link-card");
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
  requestAnimationFrame(() => dayCard.classList.add("is-in"));

  prevDay.disabled = true;
  nextDay.disabled = false;
  navTitle.textContent = "Overview";
  navSub.textContent = `Start · ${trip.length} days`;
  statusPill.textContent = "Start here";
  history.replaceState(null, "", "#overview");
}

function restoreNoteFields() {
  document.querySelectorAll("[data-note]").forEach((field) => {
    const key = `mokena-tour:${field.dataset.note}`;
    field.value = localStorage.getItem(key) || "";
    field.addEventListener("input", () => localStorage.setItem(key, field.value));
  });
}

function getInitialIndex() {
  if (location.hash === "#overview" || location.hash === "") {
    return 0;
  }
  const match = location.hash.match(/day-(\d+)/);
  if (match) {
    return Math.max(1, Math.min(pageCount - 1, Number(match[1])));
  }
  return 0;
}

function go(delta) {
  const next = current + delta;
  if (next >= 0 && next < pageCount) {
    render(next);
  }
}

prevDay.addEventListener("click", () => go(-1));
nextDay.addEventListener("click", () => go(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") go(-1);
  if (event.key === "ArrowRight") go(1);
});

let touchStartX = null;
document.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  if (touchStartX === null) return;
  const delta = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) > 60) {
    go(delta < 0 ? 1 : -1);
  }
  touchStartX = null;
}, { passive: true });

render(current);
