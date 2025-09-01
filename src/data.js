import moon_png from "./assets/destination/image-moon.png";
import moon_webp from "./assets/destination/image-moon.webp";

import mars_png from "./assets/destination/image-mars.png";
import mars_webp from "./assets/destination/image-mars.webp";

import europa_png from "./assets/destination/image-europa.png";
import europa_webp from "./assets/destination/image-europa.webp";

import titan_png from "./assets/destination/image-titan.png";
import titan_webp from "./assets/destination/image-titan.webp";

import douglas_hurley_png from "./assets/crew/image-douglas-hurley.png";
import douglas_hurley_webp from "./assets/crew/image-douglas-hurley.webp";

import mark_shuttleworth_png from "./assets/crew/image-mark-shuttleworth.png";
import mark_shuttleworth_webp from "./assets/crew/image-mark-shuttleworth.webp";

import victor_glover_png from "./assets/crew/image-victor-glover.png";
import victor_glover_webp from "./assets/crew/image-victor-glover.webp";

import anousheh_ansari_png from "./assets/crew/image-anousheh-ansari.png";
import anousheh_ansari_webp from "./assets/crew/image-anousheh-ansari.webp";

import launch_vehcle_portrait from "./assets/technology/image-launch-vehicle-portrait.jpg";
import launch_vehcle_landscape from "./assets/technology/image-launch-vehicle-landscape.jpg";

import spaceport_portrait from "./assets/technology/image-spaceport-portrait.jpg";
import spaceport_landscape from "./assets/technology/image-spaceport-landscape.jpg";

import space_capsule_portrait from "./assets/technology/image-space-capsule-portrait.jpg";
import space_capsule_landscape from "./assets/technology/image-space-capsule-landscape.jpg";

export const Data = {
  destinations: [
    {
      path: "moon",
      name: "Moon",
      images: {
        png: moon_png,
        webp: moon_webp,
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      path: "mars",
      name: "Mars",
      images: {
        png: mars_png,
        webp: mars_webp,
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      path: "europa",
      name: "Europa",
      images: {
        png: europa_png,
        webp: europa_webp,
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      path: "titan",
      name: "Titan",
      images: {
        png: titan_png,
        webp: titan_webp,
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ],
  crew: [
    {
      path: "douglas_hurley",
      name: "Douglas Hurley",
      images: {
        png: douglas_hurley_png,
        webp: douglas_hurley_webp,
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      path: "mark_shuttleworth",
      name: "Mark Shuttleworth",
      images: {
        png: mark_shuttleworth_png,
        webp: mark_shuttleworth_webp,
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      path: "victor_glover",
      name: "Victor Glover",
      images: {
        png: victor_glover_png,
        webp: victor_glover_webp,
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      path: "anousheh_ansari",
      name: "Anousheh Ansari",
      images: {
        png: anousheh_ansari_png,
        webp: anousheh_ansari_webp,
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ],
  technology: [
    {
      path: "launch_vehicle",
      number: 1,
      name: "Launch vehicle",
      images: {
        portrait: launch_vehcle_portrait,
        landscape: launch_vehcle_landscape,
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      path: "spaceport",
      number: 2,
      name: "Spaceport",
      images: {
        portrait: spaceport_portrait,
        landscape: spaceport_landscape,
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      path: "space_capsule",
      number: 3,
      name: "Space capsule",
      images: {
        portrait: space_capsule_portrait,
        landscape: space_capsule_landscape,
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};
