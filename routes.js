import { Router } from "https://deno.land/x/oak/mod.ts";
import welcome from "./controllers/welcome.js";
import getCreatures from "./controllers/getCreatures.js";
import getCreature from "./controllers/getCreature.js";

const router = new Router();

router
  .get("/", welcome)
  .get("/v1/creatures", getCreatures)
  .get("/v1/creatures/:id", getCreature);

export default router;