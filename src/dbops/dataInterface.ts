export type id = number | string;

export interface DataInterface<T> {
    getAll: () => Promise<Array<T>>;
    get: (id: id) => Promise<T>;
    post: (data: Partial<T>) => Promise<T>;
    patch: (id: id, data: Partial<T>) => Promise<T>;
    delete: (id: id) => Promise<void>;
}
