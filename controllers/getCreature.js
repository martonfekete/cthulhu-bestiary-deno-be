import { getCreature } from "../services/creatureService.js";

export default async ({ response, params }) => {
  if (params && params.id) {
    const creatures = await getCreature(params.id);
    if (creatures.length < 1) {
      response.status = 404;
      response.body = { error: `Creature not found` };
    } else {
      response.body = {
        data: creatures
      };
    }
  } else {
    response.status = 400;
    response.body = { error: "No id provided" };
  }
};