// CreatePostForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

interface FormValues {
  title: string;
  body: string;
}

const initialValues: FormValues = {
  title: '',
  body: ''
};

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  body: Yup.string().required('Body is required')
});

const CreatePostForm: React.FC = () => {
  return (
    <div>
      <h2>Create a New Post</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
            fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Post created:', data);
                actions.setSubmitting(false);
                actions.resetForm();
                toast("Post Successfully created!");
                // Optionally, you could navigate the user to the created post or another page
                // For example, using react-router's useHistory: history.push(`/posts/${data.id}`);
            })
            .catch(error => {
                console.error('Error creating post:', error);
                actions.setSubmitting(false);
            });
        }}
        
      >
        {() => (
          <Form>
            <div className="mb-4">
              <label htmlFor="title" className="block mb-2">Title</label>
              <Field name="title" type="text" className="p-2 border rounded" />
              <ErrorMessage name="title" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="body" className="block mb-2">Body</label>
              <Field name="body" as="textarea" rows="4" className="p-2 border rounded w-full" />
              <ErrorMessage name="body" component="div" className="text-red-500" />
            </div>

            <button type="submit" className="btn btn-primary">
              Create Post
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePostForm;
