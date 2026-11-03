export interface Speaker {
  id: string;
  name: string;
  field: string;
  image?: string;
  href?: string;
}

export const previousSpeakers: Speaker[] = [
  { id: "ashneer-grover", 
    name: "Ashneer Grover", 
    field: "Entrepreneurship",
    image: "/speakers/ashneer-grover.jpeg",},

  { id: "aman-gupta", 
    name: "Aman Gupta", 
    field: "Business & Entrepreneurship",
    image: "/speakers/aman-gupta.jpeg",},

  { id: "kiran-bedi", 
    name: "Kiran Bedi", 
    field: "Public Service",
    image: "/speakers/kiran-bedi.jpg",},

  { id: "tanu-jain", 
    name: "Tanu Jain", 
    field: "Civil Services & Education",
    image: "/speakers/tanu-jain.jpeg",},

  { id: "shradha-khapra", 
    name: "Shradha Khapra", 
    field: "Technology & Education",
    image: "/speakers/shradha-khapra.jpg",},

  { id: "nikhil-kamath", 
    name: "Nikhil Kamath", 
    field: "Entrepreneurship & Investing",
    image: "/speakers/nikhil-kamath.jpeg",},

  { id: "iqlipse-nova", 
    name: "Iqlipse Nova", 
    field: "Music & Entertainment",
    image: "/speakers/iqlipse-nova.jpg",},

  { id: "gaurav-taneja", 
    name: "Gaurav Taneja", 
    field: "Aviation & Content Creation",
    image: "/speakers/gaurav-taneja.jpeg",},

  { id: "aakash-anand", 
    name: "Aakash Anand", 
    field: "Entrepreneurship & Business",
    image: "/speakers/aakash-anand.jpeg",},

  { id: "anuv-jain", 
    name: "Anuv Jain", 
    field: "Music",
    image: "/speakers/anuv-jain.png",},

  { id: "anubhav-singh-bassi", 
    name: "Anubhav Singh Bassi", 
    field: "Comedy & Entertainment",
    image: "/speakers/bassi.jpeg",},

  { id: "himeesh-madaan", 
    name: "Himeesh Madaan", 
    field: "Personal Development",
    image: "/speakers/himeesh-madaan.jpeg", },
];
