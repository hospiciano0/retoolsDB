/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "aqnu9fiq5yrt9cl",
    "created": "2023-09-26 18:59:42.453Z",
    "updated": "2023-09-26 18:59:42.453Z",
    "name": "assets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4p2uuewu",
        "name": "link",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("aqnu9fiq5yrt9cl");

  return dao.deleteCollection(collection);
})
