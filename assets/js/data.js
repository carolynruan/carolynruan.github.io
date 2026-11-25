// All site content lives here. Add a photo or project by adding an entry.
// Paths are relative to the site root. w/h are the photo's pixel size, so the
// page can reserve space before the image loads (needed for the scroll fade-in).

export const photos = [
  { src: "photography/images/devils_postpile.webp", alt: "Devils Postpile", w: 2000, h: 1334 },
  { src: "photography/images/orange.webp", alt: "Orange", w: 2000, h: 1334 },
  { src: "photography/images/oculus.webp", alt: "The Oculus, New York", w: 2000, h: 1334 },
  { src: "photography/images/nyc_9-5.webp", alt: "New York, 9 to 5", w: 2000, h: 1334 },
  { src: "photography/images/nyc_5-9.webp", alt: "New York, 5 to 9", w: 2000, h: 1334 },
  { src: "photography/images/lacma.webp", alt: "LACMA", w: 2000, h: 1334 },
  { src: "photography/images/train_station.webp", alt: "Train station", w: 2000, h: 1334 },
  { src: "photography/images/timmy.webp", alt: "Timmy", w: 2000, h: 1334 },
  { src: "photography/images/atkins.webp", alt: "Atkins", w: 1334, h: 2000 },
  { src: "photography/images/lone_tree.webp", alt: "Lone tree", w: 1334, h: 2000 },
  { src: "photography/images/herd.webp", alt: "Herd", w: 1334, h: 2000 },
  { src: "photography/images/hampshire.webp", alt: "Hampshire", w: 1334, h: 2000 },
  { src: "photography/images/butterfly.webp", alt: "Butterfly", w: 2000, h: 1334 },
  { src: "photography/images/colorado_dip.webp", alt: "Colorado", w: 2048, h: 1365 },
  { src: "photography/images/mule_deer.webp", alt: "Mule deer", w: 2000, h: 1334 },
  { src: "photography/images/redwoods_national_park.webp", alt: "Redwoods National Park", w: 2000, h: 1334 },
];

export const projects = [
  {
    title: "Axe-throwing Video Game",
    still: "demos/axe_game_still.jpg",
    gif: "demos/axe_game.gif",
    blurb:
      "Two-player axe throwing game with intelligent obstacles. Generalized, memory-safe C libraries (checked with AddressSanitizer) for vector math, rendering, animation, input, and sound.",
    stack: "C, Git, Makefile, Emscripten, SDL2",
  },
  {
    title: "Physics Engine",
    still: "demos/physics_engine_still.jpg",
    gif: "demos/physics_engine.gif",
    blurb:
      "2D discrete physics engine with multi-object kinematics and collision detection. Demos include Space Invaders, Star, Frogger, and Pacman.",
    stack: "C, Git, Makefile, Emscripten, SDL2",
  },
  {
    title: "Light-Painting Robot Arm",
    link: "https://hackaday.io/project/202243-light-painting-robot/",
    still: "demos/light_painting_robot.webp",
    blurb:
      "3-DOF robot arm that light paints with LEDs in a vertical 2D plane, using a Raspberry Pi Pico. Presented at Los Angeles Maker Faire and City of STEM.",
  },
  {
    title: "Path Finder App",
    still: "demos/beavermap_still.jpg",
    gif: "demos/beavermap.gif",
    blurb:
      "LA-area map app with real-time location search and route visualization. Uses Dijkstra's algorithm, heaps, and hashmaps to find shortest paths between buildings.",
    stack: "Java, Git, JavaScript, HTML, CSS, OpenStreetMap",
  },
];
