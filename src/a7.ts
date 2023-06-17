/*type Graph = { [city: string]: { [neighbor: string]: number } };

function dijkstra(graph: Graph, start: string): { [city: string]: { distance: number; previous: string | null } } {
  const distances: { [city: string]: { distance: number; previous: string | null } } = {};
  const queue: { city: string; distance: number }[] = [];

  // Инициализация расстояний и добавление стартового города в очередь
  for (const city in graph) {
    distances[city] = { distance: Infinity, previous: null };
    if (city === start) {
      distances[city].distance = 0;
    }
    queue.push({ city, distance: distances[city].distance });
  }

  while (queue.length > 0) {
    // Находим город с минимальным расстоянием
    let minIndex = 0;
    for (let i = 1; i < queue.length; i++) {
      if (queue[i].distance < queue[minIndex].distance) {
        minIndex = i;
      }
    }
    const { city: currentCity } = queue.splice(minIndex, 1)[0];

    for (const neighbor in graph[currentCity]) {
      const distance = distances[currentCity].distance + graph[currentCity][neighbor];

      if (distance < distances[neighbor].distance) {
        distances[neighbor].distance = distance;
        distances[neighbor].previous = currentCity;
        queue.push({ city: neighbor, distance });
      }
    }
  }

  return distances;
}

function getPath(distances: { [city: string]: { distance: number; previous: string | null } }, destination: string): string[] {
  const path = [];
  let currentCity: string | null = destination;

  while (currentCity) {
    path.unshift(currentCity);
    currentCity = distances[currentCity].previous;
  }

  return path;
}

// Пример графа
const graph: Graph = {
  "Одесса": { "Николаев": 131, "Днепр": 367, "Винница": 428 },
  "Николаев": { "Одесса": 131, "Днепр": 236, "Киев": 474 },
  "Днепр": { "Одесса": 367, "Николаев": 236, "Винница": 274, "Киев": 480 },
  "Винница": { "Одесса": 428, "Днепр": 274, "Киев": 267 },
  "Киев": { "Николаев": 474, "Днепр": 480, "Винница": 267 }
};

const startCity = "Одесса";

const distances = dijkstra(graph, startCity);

for (const city in distances) {
  const shortestPath = getPath(distances, city);
  const totalDistance = distances[city].distance;
  console.log(`Самый короткий путь из ${startCity} в ${city}:`, shortestPath.join(" -> "));
  console.log(`Общее расстояние: ${totalDistance}`);
  console.log("---------------------------------------");
}
*/
interface DistanceInfo {
    distance: number;
    previous: string | null;
  }
  
  function shortestPath(graph: any, start: string, destination: string): { path: string[] | null; distance: number } {
    const distances: { [key: string]: DistanceInfo } = {};
    const queue: { city: string; distance: number }[] = [];
  
    // Инициализация расстояний и очереди
    for (const city in graph) {
      distances[city] = { distance: city === start ? 0 : Infinity, previous: null };
      queue.push({ city, distance: city === start ? 0 : Infinity });
    }
  
    while (queue.length) {
      // Находим город с наименьшим расстоянием
      let minIndex = 0;
      for (let i = 1; i < queue.length; i++) {
        if (queue[i].distance < queue[minIndex].distance) {
          minIndex = i;
        }
      }
      const { city: currentCity } = queue.splice(minIndex, 1)[0];
  
      // Перебираем соседей текущего города
      for (const neighbor in graph[currentCity]) {
        const distance = distances[currentCity].distance + graph[currentCity][neighbor];
        if (distance < distances[neighbor].distance) {
          distances[neighbor].distance = distance;
          distances[neighbor].previous = currentCity;
          queue.push({ city: neighbor, distance });
        }
      }
  
      if (currentCity === destination) {
        // Построение пути от целевого города до начального города
        let path = [destination];
        let previousCity = distances[destination].previous;
        while (previousCity) {
          path.unshift(previousCity);
          previousCity = distances[previousCity].previous;
        }
        return { path, distance: distances[destination].distance };
      }
    }
  
    // Если путь до целевого города не найден
    return { path: null, distance: Infinity };
  }
  
  // Пример использования алгоритма
  const graph = {
    Одесса: { Николаев: 200, Винница: 400 },
    Николаев: { Одесса: 200, Днепр: 300, Винница: 250 },
    Днепр: { Винница: 400, Николаев: 300, Киев: 500 },
    Винница: { Одесса: 400, Киев: 350 },
    Киев: { Винница: 350, Днепр: 500 },
  };
  
  const startCity = "Одесса";
  const destinationCity = "Киев";
  
  const result = shortestPath(graph, startCity, destinationCity);
  console.log("Кратчайший путь:", result.path);
  console.log("Общее расстояние:", result.distance);
  
