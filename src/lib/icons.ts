import {
  siNextdotjs,
  siTypescript,
  siFastify,
  siPython,
  siFastapi,
  siPostgresql,
  siDocker,
  siTauri,
  siRust,
  siVuedotjs,
  siTailwindcss,
  siLaravel,
  siPhp,
  siMysql,
  siReact,
  siExpo,
  siSupabase,
  siSpringboot,
  siInertia,
  siOpenjdk,
} from "simple-icons";

type IconData = { path: string };

const TAG_ICONS: Record<string, IconData> = {
  "Next.js": siNextdotjs,
  "TypeScript": siTypescript,
  "Fastify": siFastify,
  "Python": siPython,
  "FastAPI": siFastapi,
  "PostgreSQL": siPostgresql,
  "Docker": siDocker,
  "Tauri": siTauri,
  "Rust": siRust,
  "Vue 3": siVuedotjs,
  "Vue.js": siVuedotjs,
  "Tailwind CSS": siTailwindcss,
  "Laravel": siLaravel,
  "PHP": siPhp,
  "MySQL": siMysql,
  "React": siReact,
  "React Native": siReact,
  "Expo": siExpo,
  "Supabase": siSupabase,
  "Spring Boot": siSpringboot,
  "Inertia.js": siInertia,
  "Java": siOpenjdk,
};

export function getTagIconPath(tag: string): string | undefined {
  return TAG_ICONS[tag]?.path;
}
