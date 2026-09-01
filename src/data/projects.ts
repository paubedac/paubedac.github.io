import miPago from "../assets/images/MiPago.png";
import miCuenta from "../assets/images/MiCuenta.png";
import miSeguro from "../assets/images/MiSeguro.png";
import desafioFintech from "../assets/images/DesafioFintech.jpg";
import emprendeFintech from "../assets/images/emprendeFintech.png";
import dow from "../assets/images/DoW.png";
import eggbert from "../assets/images/Eggbert.png";
import jrscontable from "../assets/images/JRSContable.png";

interface ProjectData {
  key: string;
  name: string;
  description: string;
  link: string;
  imgSrc: string;
}

export const projectsData: ProjectData[] = [
  {
    key: "pr-01",
    name: "Mi Pago",
    description:
      "App that allowed clients from the bank to do quick transfers by scanning a QR code.",
    link: "https://www.youtube.com/watch?v=ZnIRXxDq4io",
    imgSrc: miPago,
  },
  {
    key: "pr-02",
    name: "Mi Cuenta",
    description:
      "App that allowed clients from the bank to pay their bills using their bank account in one click.",
    link: "https://www.youtube.com/watch?v=GvMw2gRGe9U",
    imgSrc: miCuenta,
  },
  {
    key: "pr-03",
    name: "Mi Seguro",
    description:
      "App that allowed clients from the bank to buy insurance from Banchile using their bills using their bank account.",
    link: "https://www.youtube.com/watch?v=fGWRcYdodhI",
    imgSrc: miSeguro,
  },
  {
    key: "pr-04",
    name: "Desafío Fintech 2015",
    description:
      "Directed end-to-end execution of a 2-day hackathon. Coordinated multi-channel logistical support across catering, technical infrastructure, high-bandwidth networking, and venue setup to ensure seamless on-site operations. In collaboration with Digital Bank Latam",
    link: "https://www.linkedin.com/pulse/las-plataformas-de-api-bancarias-un-camino-para-la-banca-heredia/",
    imgSrc: desafioFintech,
  },
  {
    key: "pr-05",
    name: "Emprende Fintech 2015",
    description:
      "Directed a startup incubation process, in collaboration with Imagine Labs.",
    link: "https://www.trendtic.cl/2015/10/abierto-proceso-de-postulacion-para-emprende-fintech-banco-de-chile-2015/",
    imgSrc: emprendeFintech,
  },
  {
    key: "pr-06",
    name: "JRSConable",
    description: "Website for an accountant.",
    link: "#",
    imgSrc: jrscontable,
  },
  {
    key: "pr-07",
    name: "Dogs of War",
    description: "2D run and gun game made in Unity. (Unpublished)",
    link: "#",
    imgSrc: dow,
  } /*
  {
    key: "pr-08",
    name: "Santiago's Streets",
    description:
      "3D beat-em up based in the Street's of Santiago made in Unity. (Unpublished)",
    link: "#",
    imgSrc: mock09,
  },*/,
  {
    key: "pr-09",
    name: "Eggbert",
    description:
      "2.5D platform game from a 24-hour hackathon made in Unity. (Unpublished)",
    link: "#",
    imgSrc: eggbert,
  },
];
