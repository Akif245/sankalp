// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("generateBtn").addEventListener("click", async () => {
//     const topic = document.getElementById("topic").value;
//     const resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = "⏳ Generating course...";

//     try {
//       const res = await fetch("http://127.0.0.1:5000/generate_course", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ topic: topic })
//       });

//       const data = await res.json();
//       if (data.course) {
//         resultDiv.innerHTML = `<h3>Generated Course:</h3><p>${data.course}</p>`;
//       } else {
//         resultDiv.innerHTML = `<p style="color:red;">Error: ${data.error}</p>`;
//       }
//     } catch (err) {
//       resultDiv.innerHTML = `<p style="color:red;">⚠️ Failed to connect to backend</p>`;
//       console.error(err);
//     }
//   });
// });
// let formatted = data.course
//   .replace(/##/g, "<h2>")
//   .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
//   .replace(/\*(.*?)\*/g, "<li>$1</li>");

// resultDiv.innerHTML = `<h3>Generated Course:</h3><ul>${formatted}</ul>`;

