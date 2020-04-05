declare namespace Global {
  interface ITool {
    id: number;
    title: string;
    link: string;
    description: string;
    tags: string[];
  }

  interface ITag {
    tag: string;
  }

  interface FormData {
    title: string;
    description: string;
    link: string;
    tags: string[];
  }
}
