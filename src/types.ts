export enum Tech {
  flutter = "Flutter",
  react = "React",
  angular = "Angular",
  vuejs = "VueJS",
  svelte = "Svelte",
  lit = "Lit",
  cpp = "C++",
  c = "C",
  java = "Java",
}

export interface IProject {
  name: string;
  url: string;
  year?: string;
  tech?: Tech;
}
