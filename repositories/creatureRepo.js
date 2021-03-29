import client from "../db/database.js";

class CreatureRepo {
  selectAll(filters = null) {
      const baseQuery = `SELECT * FROM creatures`; 
    // base filter, needs extensive overview
    let filterQuery = '';
    if (filters) {
    filterQuery = `WHERE ${this.buildFilters(filters)}`;
    }
    return client.queryObject(`${baseQuery} ${filterQuery} ORDER BY name`);
  }

  buildFilters(filters) {
    return filters.slice(1)
    .split('&').join(' and ')
    .split('=').join(' = ');
  }

  selectById(id) {
    return client.queryObject
    `SELECT * FROM creatures WHERE name_id = ${id}`;
  }
}

export default new CreatureRepo();