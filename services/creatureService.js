import creatureRepo from "../repositories/creatureRepo.js";

export const getCreatures = async (filters) => {
    const creatures = await creatureRepo.selectAll(filters);
    return creatures.rows;
};

export const getCreature = async (creatureId) => {
    const creatures = await creatureRepo.selectById(creatureId);
    return creatures.rows;
};
