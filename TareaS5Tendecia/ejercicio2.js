const fs = require("fs");

// Read the file
fs.readFile("football.dat", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split("\n");
  let minDifference = Infinity;
  let teamName = "";

  // Skip the first line (header)
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line) {
      const columns = line.split(/\s+/);
      const team = columns[1];
      const goalsFor = parseInt(columns[6], 10);
      const goalsAgainst = parseInt(columns[8], 10);
      const difference = Math.abs(goalsFor - goalsAgainst);

      if (difference < minDifference) {
        minDifference = difference;
        teamName = team;
      }
    }
  }

  console.log(
    `The team with the smallest difference in 'for' and 'against' goals is ${teamName}`
  );
});
