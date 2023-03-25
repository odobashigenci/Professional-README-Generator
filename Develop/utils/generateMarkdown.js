// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') { 
    let licenseName = license.replace(' ', '%20');
    return `![License](https://img.shields.io/badge/License-${licenseName}-blue.svg)`
    }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === 'MIT License') {
    return 'https://choosealicense.com/licenses/mit/'
  }
  if (license === 'The Unlicense') {
   return 'https://choosealicense.com/licenses/unlicense/'
  }
  if (license === 'GNU License') {
    return 'https://choosealicense.com/licenses/gpl-3.0/'
  }
  if (license === 'Apache License') {
    return 'https://choosealicense.com/licenses/apache-2.0/'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license)
  if (license !== 'None') {
    return `This application is covered under [${license}](${licenseLink})`
  }
  return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Content

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.testing}

  ## Questions
  ${data.questions}

  ## GitHub repository
  [GitHub](${data.repository})

  ## Email me
  [E-mail](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
