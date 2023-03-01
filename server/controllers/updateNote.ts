import { getCurrentTimestamp } from "../services/momentService.ts";
import { updateNote } from "../services/noteService.ts";
import { UpdateNote } from "../types/app.ts";

export default async ({ params, request, response }: { params: any, request: any, response: any }) => {
  const noteId = params.id;

  if (!noteId) {
    response.status = 400;
    response.body = { message: "Invalid note id" };
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { message: "Invalid note data" };
    return;
  }

  const body = request.body();
  const { label, is_checked } = await body.value;
  const updatedAt = getCurrentTimestamp();

  await updateNote(noteId, {
    label,
    updatedAt,
    isChecked: is_checked,
  });

  const updatedNote: UpdateNote = {
    id: noteId,
    updatedAt,
    ...body
  };

  response.body = {
    data: updatedNote,
    message: "Note is updated"
  }
}