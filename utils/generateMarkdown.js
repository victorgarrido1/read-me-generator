// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Static Badge](https://img.shields.io/badge/license-${license}-blue)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let renderLicenseLink = '';

  switch(license) {
    case 'MIT':
      licenseLink = "https://mit-license.org/";
      break;
    case "ZPL":
      licenseLink = "https://opensource.org/license/zpl-2-1/";
      case "Mozilla":
        licenseLink = "https://opensource.org/license/mpl-2-0/";
        case 'GNU':
          licenseLink = "https://opensource.org/license/lgpl-3-0/";
          case: 
          licenseLink = "http://www.apache.org/licenses/LICENSE-2.0";
          break;
          default:
            licenseLink = "";
            break;
  }


  return licenseLink;
  //select the correct license link for the selected license
  
  
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''; // if no license is provided. it will return a empty string
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
// add in more fields for readme using other data properties  
// consider creating and using the render license functions in your return statement
  return `# ${data.title}
   ## Description
    data.description${}



`;
}

export default generateMarkdown;
