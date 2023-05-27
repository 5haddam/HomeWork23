const amount = 100;

const monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];

const tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
  ['A whole lot of nothing',240]
];

const newArray = monday.concat(tuesday)
  .map(function(workTask) {
    workTask[1] = workTask[1] / 60;
    return workTask;
  })
  .filter(function(workTask) {
    return workTask[1] > 2;
  })
  .map(function(workTask) {
    workTask.push(workTask[1] * amount);
    return `<tr><td>Task name: ${workTask[0]}</td>
      <td>Taks duration: ${workTask[1]} hours</td>
      <td>Task amount: $${workTask[2]}</td></tr>`;
  })

document.write(`<table>${newArray.join('')}</table>`);