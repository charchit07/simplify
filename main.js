function findRoute(tickets) {
  const ticketMap = {}; // Create a dictionary to store available tickets

  // Populate the ticketMap with the available tickets
  for (const ticket of tickets) {
    const [from, to] = ticket.split('-');
    ticketMap[from] = to; // Use "from" as the key and "to" as the value
  }

  // Initialize the starting point as "Kiev"
  let currentCity = 'Kiev';
  const route = [currentCity];

  // Use a loop to find the route
  while (ticketMap[currentCity]) {
    currentCity = ticketMap[currentCity];
    route.push(currentCity);
  }

  return route;
}

// List of available tickets
const tickets = [
  'Paris-Skopje',
  'Zurich-Amsterdam',
  'Prague-Zurich',
  'Barcelona-Berlin',
  'Kiev-Prague',
  'Skopje-Paris',
  'Amsterdam-Barcelona',
  'Berlin-Kiev',
  'Berlin-Amsterdam'
];

// Find and print the route
const route = findRoute(tickets);
console.log('Route:', route.join(' -> '));
