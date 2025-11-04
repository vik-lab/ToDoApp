// timezone fetching functionality
const apiKey = 'fd84071de8msh2945a08a5dcc7f3p1241aajsne9ebd53bf477';

async function getTime(city) {
  const response = await fetch(`https://world-time-by-based-api.p.rapidapi.com/v1/worldtime/?location=${city}`, {
    headers: {
      'x-rapidapi-host': 'world-time-by-based-api.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    }
  });
  if (!response.ok) {
    throw new Error(`Error fetching time for ${city}: ${response.statusText}`);
  }
  const data = await response.json();
  return data.datetime;
}

async function showTimes() {
  try {
    const austinTime = await getTime('Austin');
    const aucklandTime = await getTime('Auckland');
    document.getElementById('austin-time').textContent = new Date(austinTime).toLocaleTimeString();
    document.getElementById('auckland-time').textContent = new Date(aucklandTime).toLocaleTimeString();
  } catch (error) {
    console.error(error);
    document.getElementById('austin-time').textContent = 'Failed to load';
    document.getElementById('auckland-time').textContent = 'Failed to load';
  }
}


// weather fetching functionality
async function getWeather(city) {
  const response = await fetch(`https://weatherapi-com.p.rapidapi.com/alerts.json?q=${city}`, {
    headers: {
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    }
  });
  if (!response.ok) {
    throw new Error(`Error fetching weather for ${city}: ${response.statusText}`);
  }
  const data = await response.json();
  return data.location ? data : { location: { lat: { toString: () => 'N/A' }, lon: { toString: () => 'N/A' } }, current: { condition: { text: 'N/A' }, temp_c: 'N/A' } };
}

async function showWeather() {
  try {
    const austinWeather = await getWeather('Austin');
    const austinlatitude = austinWeather.location.lat.toString();
    const austinlongitude = austinWeather.location.lon;
    const aucklandWeather = await getWeather('Auckland');
    const aucklandlatitude = aucklandWeather.location.lat;
    const aucklandlongitude = aucklandWeather.location.lon;
    document.getElementById('austin-weather').textContent = austinWeather.current.condition.text + ', ' + austinWeather.current.temp_c + '°C';
    document.getElementById('auckland-weather').textContent = aucklandWeather.current.condition.text + ', ' + aucklandWeather.current.temp_c + '°C';
    document.getElementById('austin-coordinates').textContent = `Lat: ${austinlatitude}, Lon: ${austinlongitude}`;
    document.getElementById('auckland-coordinates').textContent = `Lat: ${aucklandlatitude}, Lon: ${aucklandlongitude}`;
  } catch (error) {
    console.error(error);
    document.getElementById('austin-weather').textContent = 'Failed to load';
    document.getElementById('auckland-weather').textContent = 'Failed to load';
    document.getElementById('austin-coordinates').textContent = 'Failed to load';
    document.getElementById('auckland-coordinates').textContent = 'Failed to load';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showWeather();
  showTimes();
});


// To-Do List Functionality
let tasks = [];

function addTask() {
    const input = document.getElementById('new-task');
    const taskText = input.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        input.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';
  tasks.forEach((task, idx) => {
    let taskItem = document.createElement('li');
    taskItem.textContent = task.text;
    taskItem.style.textDecoration = task.completed ? 'line-through' : 'none';
    taskItem.onclick = () => toggleTask(idx);

    let removeBtn = document.createElement('button');
    removeBtn.textContent = "Delete";
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      removeTask(idx);
    };
    taskItem.appendChild(removeBtn);
    list.appendChild(taskItem);
  });
}