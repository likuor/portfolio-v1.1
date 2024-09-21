type AboutItme = {
  id: number;
  title: string;
  icons?: {
    id: number;
    icon: JSX.Element;
  }[];
  schoolName?: string;
  period?: string;
};

export type AboutData = {
  skills: AboutItme[];
  experience: AboutItme[];
  education: AboutItme[];
  awards: AboutItme[];
};
