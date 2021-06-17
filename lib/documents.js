import request from "./request";

export async function getDocument(id) {
  const response = await request(
    `documents/${id}/latestPublication?renditions=web`
  );

  return response?.data;
}

export async function getLatestPublications() {
  const response = await request("publications/search?contentTypes=regular&fields=systemdata,metadata");

  return response?.data
}

export async function getHome() {
  const response = await request("documents/latestPublications?homepage=true&fields=systemdata");

  if (!response?.data?.length) {
    return
  }

  return getDocument(response?.data[0].systemdata.documentId)
}