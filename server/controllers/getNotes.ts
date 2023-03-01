import { getNotes } from "../services/noteService.ts";

export default async ({ response }: { request: any; response: any }) => {
  const notes = await getNotes();
  response.status = 200;
  response.body = { data: notes };
}