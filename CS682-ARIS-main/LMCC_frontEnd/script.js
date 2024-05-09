//JAVASCRIPT file which has map function, tasks function, details of astronauts

// Variable to store the Google Map
let map;

// Async function to initialize the Google Map
async function initMap() {
    // Import the Map class from the Google Maps JavaScript API
  const { Map } = await google.maps.importLibrary("maps");
 
  // Create a new Google Map instance
  map = new Map(document.getElementById("map"), {
    center: { lat: 42.360, lng: 71.058 },
    zoom: 8,
    mapTypeId: "terrain"
  });
    // Create two markers on the map with labels, draggable, and animation
  const marker = new google.maps.Marker({
    position: { lat: 42.360, lng: 71.058 },
    map: map,
    label: "A",
    draggable: true,
    animation: google.maps.Animation.DROP,
  });

  const marker2 = new google.maps.Marker({
    position: { lat: 42.262, lng: 71.802 },
    map: map,
    label: "B",
    draggable: true,
    animation: google.maps.Animation.DROP,
  });
    // Create an info window and open it on the first marker
  const infowindow = new google.maps.InfoWindow({
    content: "<p>info of the marker</p>"
  });

  infowindow.open(map, marker);
}
// Call the initMap function to initialize the map
initMap();
// Event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  
    // Function to add an astronaut to the astronauts list
  function addAstronaut(name, oxygen, pressure, power, imagePath) {
    const astronautsList = document.getElementById("astronauts-list");

    const astronautItem = document.createElement("li");
    astronautItem.innerHTML = `
      <img src="${imagePath}" alt="${name}" class="astronaut-image">
      <p class="astronaut-name">${name}</p>
      <div class="astronaut-stats">
        <p>Oxygen: ${oxygen}%</p>
        <p>Pressure: ${pressure}%</p>
        <p>Main Suit Power: ${power}%</p>
      </div>
    `;

    astronautsList.appendChild(astronautItem);
  }
// Add two astronauts to the list with sample data
  addAstronaut("Neil Armstrong", 95, 45, 98, "neil_armstrong.png");
  addAstronaut("John Glenn", 70, 60, 60, "john_glenn.png");


  const addTaskButton = document.getElementById("add-task-button");
  addTaskButton.addEventListener("click", addTask);
  
  // Function to add a task to the tasks list
  function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const taskText = newTaskInput.value;

    if (taskText.trim() !== "") {
      const tasksList = document.getElementById("tasks");

      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <input type="checkbox">
        <label>${taskText}</label>
      `;

      tasksList.appendChild(taskItem);
      // Save tasks to local storage
      saveTasksToLocalStorage();

      newTaskInput.value = "";
    } else {
      alert("Please enter a valid task.");
    }
  }
  // Function to save tasks to local storage
  function saveTasksToLocalStorage() {
    const tasks = document.querySelectorAll("#tasks li label");
    const tasksArray = Array.from(tasks).map(task => task.innerText);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }

  // Function to load tasks from local storage
  function loadTasksFromLocalStorage() {
    const tasksList = document.getElementById("tasks");
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    storedTasks.forEach(taskText => {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <input type="checkbox">
        <label>${taskText}</label>
      `;
      tasksList.appendChild(taskItem);
    });
  }
//Load tasks from local storage when the page loads 
  loadTasksFromLocalStorage();

    // Event listener for the change event on task checkboxes
  const tasks = document.querySelectorAll("#tasks li input[type='checkbox']");
  tasks.forEach(function (task) {
    task.addEventListener("change", function () {
      const taskItem = this.parentElement;
      if (this.checked) {
        taskItem.classList.add("completed");
      } else {
        taskItem.classList.remove("completed");
      }
    });
  });
  // Event listener for the change event on astronaut statistics
  const astronauts = document.querySelectorAll("#astronauts-list li");
  astronauts.forEach(function (astronaut) {
    const oxygenElement = astronaut.querySelector(".astronaut-stats p:nth-child(1)");
    const pressureElement = astronaut.querySelector(".astronaut-stats p:nth-child(2)");
    const powerElement = astronaut.querySelector(".astronaut-stats p:nth-child(3)");

    // Update astronaut statistics randomly every 5 seconds
    setInterval(function () {
      const randomOxygen = Math.floor(Math.random() * 11) + 90;
      const randomPressure = Math.floor(Math.random() * 11) + 40;
      const randomPower = Math.floor(Math.random() * 11) + 90;

      oxygenElement.textContent = `Oxygen: ${randomOxygen}%`;
      pressureElement.textContent = `Pressure: ${randomPressure}%`;
      powerElement.textContent = `Main Suit Power: ${randomPower}%`;
    }, 5000);
  });
});
