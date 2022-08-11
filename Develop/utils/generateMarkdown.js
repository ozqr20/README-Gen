function renderLicenseBadge(license) {
  var badges = {
    'Apache 2.0': `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    'GNU GPLv3':  `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`,
    'MIT': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    'Mozilla': `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    'GNU AGPLv3': `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`,
    'GNU LGPLv3': `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`,
    'unlicensed': '',
  }
  return badges[license]
}

function renderLicenseLink(license) {
  var linkLicence = {
    'Apache 2.0': `https://opensource.org/licenses/Apache-2.0`,
    'GNU GPLv3': `https://www.gnu.org/licenses/agpl-3.0`,
    'MIT': `https://opensource.org/licenses/MIT`,
    'Mozilla': `https://opensource.org/licenses/MPL-2.0`,
    'GNU AGPLv3': `https://www.gnu.org/licenses/agpl-3.0`,
    'GNU LGPLv3': `https://www.gnu.org/licenses/lgpl-3.0`,
    'unlicensed': '',
  }
  return linkLicence[license]
}

function renderLicenseSection(license) {
  return `Licensed using ${license}. You can find more information here ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licence](#licence)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  
  ${renderLicenseBadge(data.license)}
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Licence
  ${renderLicenseSection(data.license)}

  # Contributing
  ${data.contribute}
  
  # Tests
  ${data.tests}

  # Questions
  ${data.qa}
  Any questions please email me at ${data.email}

  # Credits
  Github: https://github.com/${data.usarname}

  Copyright ${data.usarname}. All rights Reserved. 
`;
}

module.exports = generateMarkdown;
