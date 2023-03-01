import { getCurrentTimestamp } from "../services/momentService.ts";
import { createNote } from "../services/noteService.ts";

export default async ({ request, response }: { request: any; response: any }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { message: "Invalid note data" };
    return;
  }

  const body = request.body();
  const { label, is_checked = false } = await body.value;

  if (!label) {
    response.status = 422;
    response.body = { message: "Incorrect note data. Missing label property." };
    return;
  }

  const id = await createNote({
    label,
    isChecked: is_checked,
    createdAt: getCurrentTimestamp()
  });

  response.body = {
    data: {
      id,
      label,
      isChecked: is_checked,
      createdAt: getCurrentTimestamp()
    },
    message: "Note is created"
  };
}