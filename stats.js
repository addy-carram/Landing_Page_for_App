// Data for the stats cards
const statsData = [
  { number: "500K+", label: "Active downloads" },
  { number: "2M+", label: "Vehicles registered" },
  { number: "99.9%", label: "Transaction success" }
];

// Function to create stat cards dynamically
function createStatCards() {
  const container = document.getElementById('stats-container');
  
  // Check if container exists
  if (!container) {
    console.error('Stats container not found!');
    return;
  }
  
  // Clear any existing content
  container.innerHTML = '';
  
  // Create a card for each stat in the data
  statsData.forEach(stat => {
    // Create the card div
    const card = document.createElement('div');
    card.className = 'stat-card';
    
    // Add the content (number and label)
    card.innerHTML = `
      <h2 class="stat-number">${stat.number}</h2>
      <p class="stat-label">${stat.label}</p>
    `;
    
    // Add the card to the container
    container.appendChild(card);
  });
  
  console.log('Stats cards created successfully!');
}

// Run the function when the page loads
window.addEventListener('DOMContentLoaded', createStatCards);

// Optional: You can also call this function manually if needed
// createStatCards();