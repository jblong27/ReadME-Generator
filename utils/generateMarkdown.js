function generateMarkdown(data) {
  var licenseBadge =""

  if (data.license === 'GPL v3') {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if (data.license === 'MIT') {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (data.license === 'Mozilla') {
    licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  else if (data.license === 'Unilicense') {
    licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
  else if (data.license === 'WTFPL') {
    licenseBadge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  }    

  return `# ${data.title}
  ## License
  ${licenseBadge}
  
  ## Description
  ${data.description}
  ## Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contributing](#Contributing)
  [Tests](#Tests)
  [Questions](#Questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.testing}
  ## Questions 
  GitHub Profile: [${data.username}](http://github.com/${data.username})
  My email is ${data.questions}.
  `
  ;
}

module.exports = generateMarkdown;