// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT(short and simple)') {
    return '![APM](https://img.shields.io/apm/l/github?color=purple&label=License&logo=MIT&style=plastic)'
  } else if (license === 'GNU(General public license v3)') {
    return '![AUR license](https://img.shields.io/aur/license/j?color=red&label=License&logo=GNU)'
  } else if (license === 'Apache v2.0') {
    return '![APM](https://img.shields.io/apm/l/github?color=blue&label=Apache%202.0&logo=apache&logoColor=red&style=flat-square)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT(short and simple)') {
    return '[MIT License](https://choosealicense.com/licenses/mit/)'
  } else if (license === 'GNU(General public license v3)') {
    return '[GNU License](https://choosealicense.com/licenses/gpl-3.0/)'
  } else if (license === 'Apache v2.0') {
    return '[Apache v2.0](https://www.apache.org/licenses/LICENSE-2.0)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  }
  return `## License
  ${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
}

function tcCreate(tableContents) {
  if (!tableContents) {
  return ''
  }
  return `

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
   
  `
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 

  ## Description
  ${data.description}
  ${tcCreate(data.tableContents)}
  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  http://${data.collaborators}

  ${renderLicenseSection(data.license)}

  ## Features
  ${data.features}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
`
}

module.exports = generateMarkdown;
