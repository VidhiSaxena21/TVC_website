export interface Speaker {
  id: string;
  name: string;
  field: string;
  image?: string;
}

export const previousSpeakers: Speaker[] = [
  { id: "ashneer-grover", name: "Ashneer Grover", field: "Entrepreneur" },
  { id: "aman-gupta", name: "Aman Gupta", field: "Entrepreneur" },
  { id: "kiran-bedi", name: "Kiran Bedi", field: "Public Service" },
  { id: "tanu-jain", name: "Tanu Jain", field: "Civil Services & Education" },
  { id: "shradha-khapra", name: "Shradha Khapra", field: "Education & Entrepreneurship" },
  { id: "nikhil-kamath", name: "Nikhil Kamath", field: "Entrepreneur & Investor" },
  { id: "iqlipse-nova", name: "iqlipse nova", field: "Music & Content" },
  { id: "gaurav-taneja", name: "Gaurav Taneja", field: "Creator & Entrepreneur" },
  { id: "aakash-anand", name: "Aakash Anand", field: "Entrepreneur" },
  { id: "anuv-jain", name: "Anuv Jain", field: "Singer-Songwriter" },
  { id: "anubhav-singh-bassi", name: "Anubhav Singh Bassi", field: "Comedian & Actor" },
];
