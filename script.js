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
      "Ethan is flying in with Dominic, then flying out with Oliver and Beri.",
      "Ethan, Oliver, and Beri are confirmed: AA2817 from SFO on Thursday 9/24 at 5:00 PM, landing around 11:00 PM, then SWA 4983 from MDW on Sunday 9/27 at 8:30 PM.",
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
  ["Dominic", "✓", "✓", "✓"],
  ["Ethan", "✓", "✓", "?"],
  ["Oliver", "✓", "x", "?"],
  ["Sam", "?", "?", "?"],
  ["Beri", "✓", "x", "?"],
  
];

const trip = [
  {
    date: "2026-09-23",
    title: "Settling In",
    subtitle: "Portillo's, garage beers, home base",
    place: "SFO → Chicago → Mokena",
    vibe: "touch down in the Paris of the Midwest",
    image: "assets/mokena_watertower.JPG",
    imageClass: "hero-image--watertower",
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
    title: "Workday + Two Door Cinema Club",
    subtitle: "EggCetera, Metra, Uber office, TDCC",
    place: "Chicago",
    vibe: "breakfast, train, office, riverfront, concert",
    image: "assets/chicago_river.JPG",
    pitch: "Thursday is the full Chicago day: breakfast in Mokena, Metra into the city, work from the Uber office, walk the riverfront, drop bags with a friend, then Two Door Cinema Club at The Salt Shed.",
    alert: "The whole plan could move one hour earlier, but the 9:45 AM breakfast / 10:40 AM train is the realistic default with late risers and jet lag.",
    bring: ["Laptop", "Concert fit", "Transit plan", "Portable charger", "Light jacket"],
    plan: [
      ["9:45 AM", "Breakfast at EggCetera."],
      ["10:40 AM", "Take the Metra Rock Island train into Chicago."],
      ["11:45 AM", "Arrive at the Uber office / Old Post Office."],
      ["11:45 AM–5:00 PM", "Work from the Uber office."],
      ["5:00 PM", "Leave the office."],
      ["After work", "Walk the riverfront / Riverwalk."],
      ["Pre-show", "Drop bags and work stuff at a friend's place."],
      ["Night", "Two Door Cinema Club at The Salt Shed."],
      ["Late arrivals", "Ethan, Oliver, and Beri land around 11:00 PM and will need to Uber down to the house in Mokena."],
    ],
    notes: [
      ["Earlier option", "We could do the whole plan one hour earlier, but that is unlikely with late risers and jet lag."],
      ["Chicago day", "This is the clean day for the office, riverfront, Chicago friends, and the concert."],
      ["Airport", "The Thursday night AA2817 group should plan on a late Uber from the airport to Mokena."],
    ],
  },
  {
    date: "2026-09-25",
    title: "Mokena Friday",
    subtitle: "Clancy's, co-working, Mr. Benny's, football option",
    place: "Mokena",
    vibe: "coffee, co-working, steakhouse, bars, bonfire",
    image: "assets/trail.JPG",
    pitch: "Friday stays entirely in Mokena: coffee and co-working during the day, local lunch, Mr. Benny's for dinner, then either Gracie's / a small bar hop or a Lincoln-Way East football detour before hot tub and bonfire back at the house.",
    alert: null,
    bring: ["Work setup", "Laptop charger", "Dinner fit", "Bonfire layer", "Swimsuit"],
    plan: [
      ["Morning", "Coffee and breakfast at Clancy's."],
      ["Workday", "Co-work from the house, Clancy's, or another local work spot."],
      ["Lunch", "Joey's Red Hots or Portillo's."],
      ["Afternoon", "Bike ride through Old Plank Trail."],
      ["Dinner", "Mr. Benny's Steak & Lobster House."],
      ["Option A", "Gracie's / Old Plank Trail Tavern, or a small Mokena bar hop."],
      ["Option B", "Lincoln-Way East football if the schedule lines up, then bars after."],
      ["Late", "Bonfire and hot tub back at the house."],
    ],
    notes: [
      ["Main Mokena day", "This is the day for showing people Mokena as a normal lived-in place."],
      ["Football option", "Lincoln-Way East is currently listed as IL #3 on MaxPreps and #2 in Illinois 8A. Andrew at Lincoln-Way East on Sept. 25 is a SouthWest Suburban conference game and would give Beri the most direct possible look into American high school football culture."],
      ["Fallback", "If Mr. Benny's timing does not work, Aurelio's or Beggars can become the casual food fallback."],
    ],
  },
  {
    date: "2026-09-26",
    title: "Derby Day",
    subtitle: "12-person RSVP anchor",
    place: "Dirt Oval 66, Joliet",
    image:"assets/beer.JPG",
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
  },
  {
    date: "2026-09-27",
    title: "Nature Sunday",
    subtitle: "Country Charm, Bengtson's, fall colors",
    place: "Mokena",
    vibe: "slow fall day where I am from",
    image: "assets/mokena_nature.jpeg",
    pitch: "The whole point: slow hometown day, nature, fall colors, food, hot tub, bonfires, and seeing the little fantasy version of where I grew up.",
    alert: "Sunday flyers should plan to leave Mokena around 6:00 PM for the 8:30 PM Midway flight.",
    bring: ["Walking shoes", "Bike clothes", "Swimsuit", "Bonfire layer", "Fall farm layer"],
    plan: [
      ["Morning", "Breakfast at Country Charm."],
      ["Late morning", "Walk or bike through the mini forest preserves around Mokena."],
      ["Afternoon", "Bengtson's Farm in Homer Glen for fall colors, pumpkin patch energy, rides, pig races, hayrack ride, photo ops, and food/drinks."],
      ["Food", "Grill, Chef Klaus' Bier Stube, Aurelio's, or Beggars depending on the group."],
      ["6:00 PM", "Leave Mokena for Midway so Ethan, Oliver, and Beri have enough time for the 8:30 PM flight."],
      ["Night", "Hot tub and bonfire."],
    ],
    notes: [
      ["Bengtson's", "Bengtson's 2026 Fall Fest runs Sept. 4-Nov. 8 at 13341 West 151st Street in Homer Glen."],
      ["Farm activities", "Their site lists 25+ attractions, 14 family-friendly rides, pig races, live music, food/drinks, a hayrack ride, pumpkin patch, animals, and photo ops."],
      ["Apple picking", "I did not see apple picking listed on Bengtson's site, so treat this as fall colors / pumpkin patch / farm attractions rather than a guaranteed apple-picking stop."],
      ["Airport timing", "The Sunday airport run should leave around 6:00 PM from Mokena for the 8:30 PM MDW departure."],
      ["Pace", "This should feel unhurried and local."],
    ],
  },
];

const pageCount = trip.length + 2;
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
    renderLocals();
    return;
  }
  if (current === 1) {
    renderOverview();
    return;
  }

  const dayIndex = current - 2;
  const day = trip[dayIndex];
  dayCard.classList.remove("is-in");
  dayCard.innerHTML = "";

  const hero = document.createElement("div");
  hero.className = "poster-hero";
  hero.innerHTML = `
    <img class="${day.imageClass || ""}" src="${day.image || "assets/barns.JPG"}" alt="">
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
        body.innerHTML = renderGuestList();
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
        <div class="map-card">
          <div class="map-card__label">
            <span>Home base map</span>
            <strong>11465 194th St., Mokena, IL</strong>
          </div>
          <iframe
            title="Map to 11465 194th St, Mokena, IL"
            src="https://www.google.com/maps?q=11465%20194th%20St%2C%20Mokena%2C%20IL&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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

  content.append(
    addSection("Guest list", (body) => {
      body.innerHTML = renderGuestList();
    })
  );

  dayCard.append(hero, content);
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
  dayCard.querySelectorAll(".overview-link-summary").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".overview-link-card");
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
  requestAnimationFrame(() => dayCard.classList.add("is-in"));

  prevDay.disabled = false;
  nextDay.disabled = false;
  navTitle.textContent = "Overview";
  navSub.textContent = `Start · ${trip.length} days`;
  statusPill.textContent = "Start here";
  history.replaceState(null, "", "#overview");
}

function renderLocals() {
  dayCard.classList.remove("is-in");
  dayCard.innerHTML = "";

  const hero = document.createElement("div");
  hero.className = "poster-hero poster-hero--locals";
  hero.innerHTML = `
    <img src="assets/friends.png" alt="">
    <div class="poster-title">
      <h1>Meet My Friends!</h1>
      <p class="poster-p1">Friday + Saturday in Mokena</p>
      <p class="poster-p2">We're playing the hits locally</p>
    </div>
    <div class="place-sign">Local invite</div>
  `;

  const content = document.createElement("div");
  content.className = "poster-content";
  content.append(
    addSection("The ask", (body) => {
      body.innerHTML = `
        <div class="pitch-box">
          I have friends coming into town and you should definitely come down to Mokena.
          Friday night is bars, backyard, hot tub, and bonfire energy. Saturday is the
          Team Demolition Derby at Dirt Oval 66.
        </div>
      `;
    })
  );
  content.append(
    addSection("Plan", (body) => {
      body.innerHTML = `
        <div class="timeline">
          <div class="step">
            <strong>Thursday</strong>
            <p>Some of us are going to Two Door Cinema Club at The Salt Shed earlier in the week.</p>
          </div>
          <div class="step">
            <strong>Friday night</strong>
            <p>Mokena bars, probably Gracie's / Old Plank Trail Tavern, with a possible Lincoln-Way East football detour first.</p>
          </div>
          <div class="step">
            <strong>Football option</strong>
            <p>LWE is currently listed as IL #3 on MaxPreps and #2 in Illinois 8A. Andrew at LWE on Sept. 25 is a conference game and the perfect Beri introduction to American high school football culture.</p>
          </div>
          <div class="step">
            <strong>Saturday</strong>
            <p>Dirt Oval 66 for the Team Demolition Derby. This is the big local spectacle.</p>
          </div>
        </div>
      `;
    })
  );
  content.append(
    addSection("Vibe", (body) => {
      body.innerHTML = `
        <div class="tag-list">
          <span>Mokena bars</span>
          <span>Old friends</span>
          <span>New friends</span>
          <span>Demolition derby</span>
          <span>Bonfire</span>
          <span>Hot tub</span>
        </div>
      `;
    })
  );

  dayCard.append(hero, content);
  requestAnimationFrame(() => dayCard.classList.add("is-in"));

  prevDay.disabled = true;
  nextDay.disabled = false;
  navTitle.textContent = "Local Invite";
  navSub.textContent = "Next · full overview";
  statusPill.textContent = "Come through";
  history.replaceState(null, "", "#locals");
}

function renderGuestList() {
  return `
    <div class="guest-list" role="table" aria-label="Guest attendance">
      <div class="guest-row guest-row--head" role="row">
        <span role="columnheader">Name</span>
        <span role="columnheader">Flights</span>
        <span role="columnheader">TWCC</span>
        <span role="columnheader">Dirt Oval</span>
      </div>
      ${rsvps.map(([name, flights, twoDoor, dirtOval]) => `
        <div class="guest-row" role="row">
          <span role="cell">${name}</span>
          <span class="guest-status" data-status="${flights}" role="cell">${flights}</span>
          <span class="guest-status" data-status="${twoDoor}" role="cell">${twoDoor}</span>
          <span class="guest-status" data-status="${dirtOval}" role="cell">${dirtOval}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function restoreNoteFields() {
  document.querySelectorAll("[data-note]").forEach((field) => {
    const key = `mokena-tour:${field.dataset.note}`;
    field.value = localStorage.getItem(key) || "";
    field.addEventListener("input", () => localStorage.setItem(key, field.value));
  });
}

function getInitialIndex() {
  if (location.hash === "#locals" || location.hash === "") {
    return 0;
  }
  if (location.hash === "#overview") {
    return 1;
  }
  const match = location.hash.match(/day-(\d+)/);
  if (match) {
    return Math.max(2, Math.min(pageCount - 1, Number(match[1]) + 1));
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
