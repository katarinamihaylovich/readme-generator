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
  return `## Project Title:
  ${data.title}
  ## Description:
  ${data.description}
  ## Table of Contents:
  ## Installation 
  In order to install dependencies, use the command ${data.dependencies}
  

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
`;
};

module.exports = generateMarkdown;
