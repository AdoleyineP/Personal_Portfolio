const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    "Hello I'm Akolgo Prince Adoleyine, a cyber security Ethuisant with interest as Cyber Security Engineer. Currently I am pursing my Bachelor's degree in Computer Science  at KNUST.  ",
  skills:
    "Python Programmer | JAVA Programmer | Web Developer ",
  education:
    "Bachelors of Computer Science  <br> ",
  experience:'<span class="code">IT Intern at Bolgatanga Regional hospital </span><br> | Cyber Security Analyst Intern | <br> ',
  certifications: 
    "Foundations Of operationalizing MITRE ATT Certificate | Introduction to Cyber Security by cisco | Threat Hunting by VTF",
  contact:
    "You can contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/princeakolgo/' class='success link'>Linkedin</a>, <a href='mailto:akolgoprinceadoleyine2001@gmail.com ' class='success link'>Email</a>,"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
