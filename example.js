const mouseEvents = require("./index");

let paused = false;

mouseEvents.on("mouseup", data => {
  console.log(data);
});

mouseEvents.on("mousemove", data => {
  console.log(data);
});

mouseEvents.on("mousedown", data => {
  console.log(data);
});

mouseEvents.on("mousewheel", data => {
  console.log(data);
});

setInterval(() => {
  if (!paused) {
    console.error("Still listening...");
  }
}, 5000);

process.on("SIGBREAK", () => {
  if (paused) {
    console.error("resuming mouse events");
    mouseEvents.resumeMouseEvents();
    paused = false;
  } else {
    console.error("pausing mouse events");
    mouseEvents.pauseMouseEvents();
    paused = true;
  }
});

console.error("Press Ctrl+Break to toggle listening");
