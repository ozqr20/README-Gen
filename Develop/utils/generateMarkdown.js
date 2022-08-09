// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ''
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
  
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Licence
  ${data.license}

  # Contributing
  ${data.contribute}
  
  # Tests
  ${data.tests}

  # Questions
  ${data.qa}
  Any questions please email me at ${data.email}

  # Credits
  Github: [${data.usarname}](${data.url})

  Copyright ${data.name}. All rights Reserved. 
`;
}

module.exports = generateMarkdown;
