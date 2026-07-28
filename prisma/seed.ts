import { PrismaClient } from "../src/generated/prisma";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

async function main() {
  const raw = fs.readFileSync(path.join(__dirname, "exercises.json"), "utf-8");
  const exercises = JSON.parse(raw);

  console.log(`Seeding ${exercises.length} exercises...`);

  for (const ex of exercises) {
    const instructions = ex.instructions?.en || "";
    const steps = ex.instruction_steps?.en || [];

    await prisma.exercise.upsert({
      where: { id: ex.id },
      update: {
        name: ex.name,
        category: ex.category?.toLowerCase() || "",
        bodyPart: ex.body_part?.toLowerCase() || "",
        equipment: ex.equipment?.toLowerCase() || "body weight",
        target: ex.target?.toLowerCase() || "",
        muscleGroup: ex.muscle_group?.toLowerCase() || "",
        secondaryMuscles: JSON.stringify(ex.secondary_muscles || []),
        instructions: steps.length > 0 ? steps.join("\n") : instructions,
        image: ex.image || null,
        gifUrl: ex.gif_url || null,
        attribution: ex.attribution || null,
      },
      create: {
        id: ex.id,
        name: ex.name,
        category: ex.category?.toLowerCase() || "",
        bodyPart: ex.body_part?.toLowerCase() || "",
        equipment: ex.equipment?.toLowerCase() || "body weight",
        target: ex.target?.toLowerCase() || "",
        muscleGroup: ex.muscle_group?.toLowerCase() || "",
        secondaryMuscles: JSON.stringify(ex.secondary_muscles || []),
        instructions: steps.length > 0 ? steps.join("\n") : instructions,
        image: ex.image || null,
        gifUrl: ex.gif_url || null,
        attribution: ex.attribution || null,
      },
    });
  }

  const user = await prisma.user.upsert({
    where: { email: "fitness@demo.com" },
    update: {},
    create: {
      email: "fitness@demo.com",
      password: "$2b$10$demo",
    },
  });

  console.log("Created demo user:", user.email);
  console.log("Done! Imported", exercises.length, "exercises");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());