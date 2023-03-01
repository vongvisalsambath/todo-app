import { deleteNote } from "../services/noteService.ts";

export default async ({ params, request, response }: { params: any, request: any, response: any }) => {
  const noteId = params.id;

  if (!noteId) {
    response.status = 400;
    response.body = { message: "Invalid note id" };
    return;
  }

  const id = await deleteNote(noteId);

  response.body = {
    data: id,
    message: "Note is deleted"
  };
}