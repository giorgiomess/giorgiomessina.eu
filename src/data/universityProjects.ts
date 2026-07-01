interface UniversityProject {
  title: string;
  subtitle: string;
  description: string;
  summary?: string;
  href?: string;
  unavailable?: boolean;
}

export const universityProjects: UniversityProject[] = [
  {
    title: "IXP Traffic Forecasting and Anomaly Detection",
    subtitle: "Course: Network Measurements & Data Analysis",
    summary: "Analyze, forecast and detect anomalies in Middle East IXP network traffic using ML",
    description: "PyTorch, Scikit-Learn, Pandas",
    unavailable: true
  },
  {
    title: "Audio-Visual Morphing Delay Engine",
    subtitle: "Course: Computer Music - Languages & Systems",
    description: "SuperCollider, JUCE, Processing",
    href: "/assets/cmls_slides.pdf"
  },
  {
    title: "ROADM Architecture Performance & Grooming Evaluation",
    subtitle: "Course: Communication Network Design - Nokia",
    description: "NetworkX, Python",
    href: "/assets/cnd_nokia_slides.pdf"
  },
  {
    title: "SAR Tomography",
    subtitle: "Course: Inverse Problems Applied to Remote Sensing",
    description: "MATLAB, SAR data",
    href: "/assets/progettosar.pdf"
  },
  {
    title: "Adaptive Predistortion",
    subtitle: "Course: Digital Communication",
    description: "MATLAB, Simulink",
    href: "/assets/progettodc2.pdf"
  },
  {
    title: "Channel Distance Estimation",
    subtitle: "Course: Communication Systems",
    description: "SDR, MATLAB, GNU Radio",
    href: "/assets/progettosdc.pdf"
  },
  {
    title: "FIR Filters for Distance Estimation",
    subtitle: "Course: Fundamentals of Digital Signal Processing",
    description: "MATLAB, Simulink",
    href: "/assets/progettofens.pdf"
  },
  {
    title: "Load Balancing (consistent hashing)",
    subtitle: "Course: Software Defined Networking",
    description: "Ryu, Mininet",
    href: "https://polimi365-my.sharepoint.com/:p:/g/personal/10763872_polimi_it/EXdQoshdM71Nt3Gq24AMzkMBPhAgxroH_ywE7JAtq6i0WA?e=xlbpGD"
  }
];
