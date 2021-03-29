import { getCreatures } from "../services/creatureService.js";

export default async ({ request, response }) => {
  const creatures = await getCreatures(request.url.search);
  response.body = {
    data: creatures,
    meta: {
      count: creatures.length,
      start: ''
    }
  }
};