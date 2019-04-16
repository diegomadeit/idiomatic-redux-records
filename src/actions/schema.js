import { schema } from "normalizr";

export const pagination = new schema.Entity(
  "pagination",
  {},
  { idAttribute: "page" }
);

export const release = new schema.Entity("releases");
export const releases = [release];

export const collection = new schema.Entity(
  "collection",
  {
    pagination: pagination,
    releases: releases
  },
  { idAttribute: () => "default" }
);
