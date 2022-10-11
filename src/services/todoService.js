import RestAPI from "./restAPI";

export default class TodoService extends RestAPI {

  async getAll() {
    return await this.get("/todos");
  }

  async getById(id) {
    return this.get(`/todos/${id}`);
  }

  async create(payload) {
    return await this.post("/todos", payload);
  }

  async update(id, payload) {
    return await this.put(`/todos/${id}`, payload);
  }

  async deleteById(id) {
    return await this.delete(`/todos/${id}`);
  }

} 