export interface RecordData {
  'num': number;
  'time': string;
  'moves': string;
}

export const data: RecordData[][] = [];

for (let i = 0; i < 7; i++) {
  const table = [];
  for (let j = 1; j < 11; j++) {
    const info = {
      'num': j,
      'time': '//',
      'moves': '//'
    };
    table.push(info);
  }
  data.push(table);
}