import { schema } from "normalizr";

const pagination = new schema.Entity("pagination", {}, { idAttribute: "page" });

const release = new schema.Entity("releases");
const releases = [release];

export const collection = new schema.Entity(
  "collection",
  {
    pagination: pagination,
    releases: releases
  },
  { idAttribute: () => "default" }
);

const item = new schema.Entity("item");
export const collectionItemValues = new schema.Values(item);
