const entryData = [
  {
    id: 1,
    name: "Package",
    children: [
      {
        id: 2,
        name: "Modules",
        children: [
          {
            id: 3,
            name: "React",
          },
          {
            id: 4,
            name: "Vite",
          },
          {
            id: 5,
            name: "Typescript",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Components",
    children: [
      {
        id: 7,
        name: "Entry",
      },
      {
        id: 8,
        name: "Navbar",
      },
    ],
  },
] as TEntry[];

export type TEntry = {
  id: number;
  name: string;
  children?: TEntry[];
};

export default entryData;
