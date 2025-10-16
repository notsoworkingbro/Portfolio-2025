import fs from "fs";
import path from "path";

export function getLogos(): string[] {
  const logosDir = path.join(process.cwd(), "public/logos");
  const files = fs.readdirSync(logosDir);

  return files
    .filter((file) => file.endsWith(".svg"))
    .map((file) => `/logos/${file}`);
}
