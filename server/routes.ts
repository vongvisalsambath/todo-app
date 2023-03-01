import { Router } from "https://deno.land/x/oak/mod.ts";
import createNote from "./controllers/createNote.ts";
import getNotes from "./controllers/getNotes.ts";
import updateNote from "./controllers/updateNote.ts";
import deleteNote from "./controllers/deleteNote.ts";

const router = new Router();

router
  .get("/api/notes", getNotes)
  .post("/api/notes", createNote)
  .put("/api/notes/:id", updateNote)
  .delete("/api/notes/:id", deleteNote)

export default router;