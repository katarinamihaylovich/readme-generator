// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `https://img.shields.io/badge/license-${license}-blue.svg`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None') {
    return 'license link'
  }
  return 'No licenses';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None') {
    return `license ${license}`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description:
  ${data.description}
  ## Table of Contents:

  ## Installation 
  In order to install dependencies, use the command ${data.dependencies} .

  ## Usage
  Information for using the repo: ${data.use}


  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Questions
  Q. What is the link to your GitHub repo?
  A. github.com/${data.username}

  Q. What is the best way to be reached with additional questions?
  A. Email at ${data.email}

  ## Contributing
  What you need to know for contributing to the repo: ${data.contributing}

  ## Tests
  The command to run tests is ${data.tests}.
`;
};

module.exports = generateMarkdown;
