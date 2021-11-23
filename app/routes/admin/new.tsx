import {
  useTransition,
  useActionData,
  Form,
  redirect
} from "remix";

// ...

export default function NewPost() {
  let errors = useActionData();
  let transition = useTransition();

  return (
    <Form method="post">
      {/* ... */}

      <p>
        <button type="submit">
          {transition.submission
            ? "Creating..."
            : "Create Post"}
        </button>
      </p>
    </Form>
  );
}