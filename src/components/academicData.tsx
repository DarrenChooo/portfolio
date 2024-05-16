export type achievementProps = {
  year: string;
  title: string;
  desc: string;
  extra?: string;
};

export const educationData: achievementProps[] = [
  {
    year: "2021 - Present",
    title: "Singapore Polytechnic",
    desc: "Diploma in Information Technology, Specialised in User Interface and User Experience",
    extra: "\n\nCumulative Grade Point Average: 3.89",
  },
  {
    year: "2020 - 2021",
    title: "Singapore Polytechnic",
    desc: "Polytechnic Foundation Programme",
  },
  {
    year: "2016 - 2019",
    title: "Dunman Secondary School",
    desc: "GCE N(A) Level ",
    extra: "ELMAB3 (English, Mathematics, Best 3 Subjects): 8 Raw",
  },
];

export const achievementsData: achievementProps[] = [
  {
    year: "2023",
    title: "Edusave Merit Bursary Award",
    desc: "Students within the top 25% of their school’s level and course in academic performance have demonstrated good conduct.",
  },
  {
    year: "2022",
    title: "Edusave Merit Bursary Award",
    desc: "Students within the top 25% of their school’s level and course in academic performance have demonstrated good conduct.",
  },
  {
    year: "2022",
    title: "Director's Honour Roll (AY21/22)",
    desc: "Achieved top 10% of cohort in terms of academic performance, and have an exemplary personal record.",
  },
];
