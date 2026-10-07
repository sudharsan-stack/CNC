const payload = {
  machineId: "CNC-01",
  temperature: 34.5,
  vibration: 0.31,
  current: 1.4
};

fetch('http://localhost:3000/api/iot/sensor-data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
})
.then(res => res.json().then(data => ({status: res.status, data})))
.then(console.log)
.catch(console.error);
