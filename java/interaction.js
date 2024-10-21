document.addEventListener("DOMContentLoaded", () => {
  // Mousemove cursor effect
  document.addEventListener("mousemove", (e) => {
    let cursor = document.createElement("div");
    cursor.classList.add("cursor");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    document.body.appendChild(cursor);

    setTimeout(() => cursor.remove(), 1000);
  });


  // Spike Gif Images for multiple containers
// const numImages = 38; // Number of images you want to display
// const imgSrc = "./gifs/spike_animation.gif"; // Source of the image
// const imgAlt = "Spike Gif"; // Alt text for the image
// const imgContainers = document.querySelectorAll(".spike-images"); // Select all containers with class spike-images

// imgContainers.forEach((container) => {
//   for (let i = 0; i < numImages; i++) {
//     const obj = document.createElement("object");
//     obj.data = imgSrc;
//     obj.type = "image/gif"; 
//     obj.alt = imgAlt;
//     obj.setAttribute("title", imgAlt);
    
//     container.appendChild(obj);
//   }
// });


const numImages = 38; 
  const imgSrc = "./gifs/spike_animation.gif"; 
  const imgAlt = "Spike Gif"; 
  const imgContainers = document.querySelectorAll(".spike-images"); 
  
  imgContainers.forEach((container) => {
    for (let i = 0; i < numImages; i++) {
      const obj = document.createElement("object");
      obj.data = imgSrc;  // Path to GIF
      obj.setAttribute("title", imgAlt);
      
      container.appendChild(obj);
    }
  });

});
