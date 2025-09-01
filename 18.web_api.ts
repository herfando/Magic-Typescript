// ===== Web APIs with TypeScript =====

// 1. Geolocation API
function getCurrentLocation(): void {                                     // get user's location
  if (!navigator.geolocation) {                                           // check if available
    console.log("Geolocation not supported");                             // fallback
    return;
  }

  navigator.geolocation.getCurrentPosition(                               // request position
    (pos) => {
      const { latitude, longitude } = pos.coords;                         // destructure coords
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);      // log location
    },
    (err) => console.error("Geolocation error:", err.message)             // handle error
  );
}

// 2. Notification API
async function showNotification(title: string, body: string): Promise<void> {
  if (!("Notification" in window)) {                                      // check support
    console.log("This browser does not support notifications.");          
    return;
  }

  if (Notification.permission === "granted") {                            // already granted
    new Notification(title, { body });                                    // show notification
  } else if (Notification.permission !== "denied") {                      // ask permission
    const permission = await Notification.requestPermission();            
    if (permission === "granted") {                                       
      new Notification(title, { body });                                  // show after grant
    }
  }
}

// 3. Canvas API (basic drawing)
function drawCanvas(): void {
  const canvas = document.createElement("canvas");                        // create canvas
  canvas.width = 300;                                                     // set width
  canvas.height = 150;                                                    // set height
  document.body.appendChild(canvas);                                      // add to DOM

  const ctx = canvas.getContext("2d");                                    // get 2D context
  if (!ctx) return;                                                       // safeguard

  ctx.fillStyle = "lightblue";                                            // set fill color
  ctx.fillRect(20, 20, 120, 80);                                          // draw rectangle
  ctx.strokeStyle = "darkblue";                                           // set border
  ctx.strokeRect(20, 20, 120, 80);                                        // draw stroke
  ctx.font = "16px Arial";                                                // set font
  ctx.fillStyle = "black";                                                // set text color
  ctx.fillText("Hello Canvas", 30, 60);                                   // draw text
}

// Demo usage
getCurrentLocation();                                                     // fetch geolocation
showNotification("Welcome!", "Thanks for visiting 🚀");                   // show notification
drawCanvas();                                                             // draw on canvas

/*
========================
📑 Short Explanation
========================
- Geolocation API → navigator.geolocation.getCurrentPosition() returns user's latitude & longitude.
- Notification API → requires user permission, use Notification.requestPermission().
- Canvas API → HTML5 drawing surface, use fillRect(), strokeRect(), fillText(), etc.
- All Web APIs are type-safe in TypeScript if DOM lib is included in tsconfig.json.
*/
