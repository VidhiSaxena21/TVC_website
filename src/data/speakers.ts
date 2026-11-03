export interface Speaker {
  id: string;
  name: string;
  field: string;
  image?: string;
  href?: string;
}

export const previousSpeakers: Speaker[] = [
  { id: "ashneer-grover", name: "Ashneer Grover", field: "Entrepreneurship" },
  { id: "aman-gupta", name: "Aman Gupta", field: "Business & Entrepreneurship" },
  { id: "kiran-bedi", name: "Kiran Bedi", field: "Public Service" },
  { id: "tanu-jain", name: "Tanu Jain", field: "Civil Services & Education" },
  { id: "shradha-khapra", name: "Shradha Khapra", field: "Technology & Education" },
  { id: "nikhil-kamath", name: "Nikhil Kamath", field: "Entrepreneurship & Investing" },
  { id: "iqlipse-nova", name: "Iqlipse Nova", field: "Music & Entertainment" },
  { id: "gaurav-taneja", name: "Gaurav Taneja", field: "Aviation & Content Creation" },
  { id: "aakash-anand", name: "Aakash Anand", field: "Entrepreneurship & Business" },
  { id: "anuv-jain", name: "Anuv Jain", field: "Music" },
  { id: "anubhav-singh-bassi", name: "Anubhav Singh Bassi", field: "Comedy & Entertainment" },
  { id: "himeesh-madaan", name: "Himeesh Madaan", field: "Personal Development" },
];
