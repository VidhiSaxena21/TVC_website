export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image?: string;
  linkedin?: string;
}

export interface TeamGroup {
  id: string;
  title: string;
  eyebrow: string;
  description?: string;
  isLeadership?: boolean;
  members: TeamMember[];
}

export const executiveBoardGroups: TeamGroup[] = [
  {
    id: "general-secretaries",
    title: "General Secretaries",
    eyebrow: "GenSec",
    isLeadership: true,
    members: [
      {
        id: "sanchit-sehgal",
        name: "Sanchit Sehgal",
        position: "General Secretary",
        image: "",
        linkedin: "",
      },
      {
        id: "shashank-jain",
        name: "Shashank Jain",
        position: "General Secretary",
        image: "",
        linkedin: "",
      },
      {
        id: "devyansh-arya",
        name: "Devyansh Arya",
        position: "General Secretary",
        image: "",
        linkedin: "",
      },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    eyebrow: "FinSec",
    members: [
      {
        id: "parth-gakhar",
        name: "Parth Gakhar",
        position: "Finance Secretary",
        image: "",
        linkedin: "",
      },
    ],
  },
  {
    id: "joint-secretaries",
    title: "Joint Secretaries",
    eyebrow: "JointSec",
    members: [
      {
        id: "aadish-jain",
        name: "Aadish Jain",
        position: "Joint Secretary",
        image: "",
        linkedin: "",
      },
      {
        id: "lakshya-goyal",
        name: "Lakshya Goyal",
        position: "Joint Secretary",
        image: "",
        linkedin: "",
      },
      {
        id: "nishtha-saha",
        name: "Nishtha Saha",
        position: "Joint Secretary",
        image: "",
        linkedin: "",
      },
    ],
  },
  {
    id: "department-heads",
    title: "Department Heads",
    eyebrow: "Department Heads",
    members: [
      {
        id: "sparsh-gupta",
        name: "Sparsh Gupta",
        position: "Head of Entrepreneurship",
        image: "",
        linkedin: "",
      },
      {
        id: "nimit-malhotra",
        name: "Nimit Malhotra",
        position: "Head of Operations",
        image: "",
        linkedin: "",
      },
      {
        id: "liya",
        name: "Liya",
        position: "Head of Operations",
        image: "",
        linkedin: "",
      },

      {
        id: "naman-jindal",
        name: "Naman Jindal",
        position: "Marketing and External Secretary",
        image: "",
        linkedin: "",
      },

      {
        id: "bhuvan-malhotra",
        name: "Bhuvan Malhotra",
        position: "Marketing and External Secretary",
        image: "",
        linkedin: "",
      },

      {
        id: "vidhi-saxena",
        name: "Vidhi Saxena",
        position: "Technical Secretary",
        image: "",
        linkedin: "",
      },

      {
        id: "vansh-goyal",
        name: "Vansh Goyal",
        position: "Media and Design Secretary",
        image: "",
        linkedin: "",
      },
    ],
  },
  {
    id: "co-conveners",
    title: "Co-Conveners",
    eyebrow: "Co-Conveners",
    members: [
      {
        id: "vasu-garg",
        name: "Vasu Garg",
        position: "Co-Convener",
        image: "",
        linkedin: "",
      },
      {
        id: "ruhan-garg",
        name: "Ruhan Garg",
        position: "Co-Convener",
        image: "",
        linkedin: "",
      },
      {
        id: "vishesh-nagpure",
        name: "Vishesh Nagpure",
        position: "Co-Convener",
        image: "",
        linkedin: "",
      },
    ],
  },
];
