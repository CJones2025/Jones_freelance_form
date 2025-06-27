/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const freelancers = []; 


const $app = document.querySelector("#app");
const $avg = document.createElement("h2");
$app.appendChild($avg);

const $table = document.createElement("table");
$table.innerHTML = `
  <thead>
    <tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Rate</th>
    </tr>
  </thead>
  <tbody id="freelancer-rows"></tbody>
`;
$app.appendChild($table);

const $body = $table.querySelector("#freelancer-rows");


const makeFreelancer = () => {
  const worker = NAMES[Math.floor(Math.random() * NAMES.length)];
  const job = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const salary = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;

  return {
    name: worker,
    occupation: job,
    rate: salary
  };
};


function addFreelancer(freelancer) {
  freelancers.push(freelancer);

  const row = document.createElement("tr");
  const nameData = document.createElement("td");
  const jobData = document.createElement("td");
  const rateData = document.createElement("td");

  nameData.textContent = freelancer.name;
  jobData.textContent = freelancer.occupation;
  rateData.textContent = `$${freelancer.rate}`;

  row.appendChild(nameData);
  row.appendChild(jobData);
  row.appendChild(rateData);

  $body.appendChild(row);

  updateAverage();
}


function updateAverage() {
  let total = 0;
  for (let i = 0; i < freelancers.length; i++) {
    total += freelancers[i].rate;
  }
  const avg = (total / freelancers.length).toFixed(2);
  $avg.textContent = `Average hourly rate: $${avg}`;
}


for (let i = 0; i < 1; i++) {
  addFreelancer(makeFreelancer());
}



const interval = setInterval(() => {
  if (freelancers.length >= 100) {
    clearInterval(interval);
    return;
  }
  addFreelancer(makeFreelancer());
}, 200);