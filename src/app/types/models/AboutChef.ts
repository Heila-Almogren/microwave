export interface AboutChefEntityResponse {
  data: AboutChefEntity
}

export interface AboutChefEntity {
  id: string;
  attributes: AboutChef;
}

export interface AboutChef {
  summary: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}
