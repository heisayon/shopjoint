import { databases } from "./config";
import { ID } from "appwrite";

const collections = [
  {
    databaseID: import.meta.env.VITE_DATABASE_ID,
    collectonID: import.meta.env.VITE_COLLECTION_ID_CART,
    name: "CartData",
  },
];

export const db = {};

collections.map((collection) => {
  db[collection.name] = {
    list: (queries) =>
      databases.listDocuments(
        collection.databaseID,
        collection.collectonID,
        queries
      ),
    create: (payload, permissions, id = ID.unique()) =>
      databases.createDocument(
        collection.databaseID,
        collection.collectonID,
        id,
        payload,
        permissions
      ),
    delete: (id) =>
      databases.deleteDocument(
        collection.databaseID,
        collection.collectonID,
        id
      ),
  };
});
