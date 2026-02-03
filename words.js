const wordsData = [
    { label: "Friendly" },
    { label: "Trustworthy" },
    { label: "Modern" }

];

// Function to create word badges dynamically
function createStatWords() {
  const container = document.getElementById('words-container');
  
  // Check if container exists
  if (!container) {
    console.error('Words container not found!');
    return;
  }
  
  // Clear any existing content
  container.innerHTML = '';
  
  // Create a badge for each word in the data
  wordsData.forEach(word => {
    // Create the word element div
    const wordElement = document.createElement('div');
    wordElement.className = 'stat-word';
    
    // Add the content (just the label)
    wordElement.innerHTML = `
      <h3 class="word-label">${word.label}</p>
    `;
    
    // Add the word element to the container
    container.appendChild(wordElement);
  });
  
  console.log('Word badges created successfully!');
}

// Run the function when the page loads
window.addEventListener('DOMContentLoaded', createStatWords);