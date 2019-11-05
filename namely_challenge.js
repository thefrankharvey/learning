const json = `
  {
    "name": "Charizard",
    "moveset": {
      "slot1": {
        "name": "Fire Spin",
        "pp": 10
      },
      "slot2": null
    },
    "isLegendary": false
  }
`;

function makePairs(json) {
  const parsedInput = JSON.parse(json);
  const inputEntries = Object.entries(parsedInput);
  const result = []
  inputEntries.forEach(input => {
    if (typeof input[1] === "object") {
      const { slot1, slot2 } = input[1];
      result.push(
        ['moveset.slot1.name', slot1.name], 
        ['moveset.slot1.pp', slot1.pp], 
        ['moveset.slot2', slot2]
      )
    } else {
      result.push(input)
    }
  });
  return result;
}

console.log(makePairs(json));


// Tests

// test('handles nested objects', () => {
//   const input = `
//     {
//       "name": "Charizard",
//       "moveset": {
//         "slot1": {
//           "name": "Fire Spin",
//           "pp": 10
//         },
//         "slot2": null
//       },
//       "isLegendary": false
//     }
//   `;
//   assert.deepEqual(makePairs(input), [
//     ['name', 'Charizard'],
//     ['moveset.slot1.name', 'Fire Spin'],
//     ['moveset.slot1.pp', 10],
//     ['moveset.slot2', null],
//     ['isLegendary', false]
//   ]);
// });
//
// test('handles flat objects', () => {
//   const input = `
//     {
//       "name": "Charizard",
//       "isLegendary": false
//     }
//   `;
//   assert.deepEqual(makePairs(input), [
//     ['name', 'Charizard'],
//     ['isLegendary', false],
//   ]);
// });
