export default async ({ response }: { response: any }, nextFn) => {
  try {
    await nextFn();
  } catch (err) {
    response.status = 500;
    response.body = { message: err.message };
  }
};
