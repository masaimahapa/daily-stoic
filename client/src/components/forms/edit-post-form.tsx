import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

interface FormValues {
    id: number;
  title: string;
  body: string;
}

interface Props {
    initialValues: FormValues;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  body: Yup.string().required('Body is required')
});

export default function EditPostForm({initialValues}: Props){
    function deletePost(){
        fetch(`/api/posts/${initialValues.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            toast("Post Deleted!");
        })
        .catch(error => {
            console.error('Error creating post:', error);
        });
    }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
            fetch(`/api/posts/${values.id}`, {
                method: 'PUT',
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
                console.log('Post edited:', data);
                actions.setSubmitting(false);
                actions.resetForm();
                toast("Post Updated!");
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

            <button type="submit" className="btn btn-primary mx-2">
              Edit Post
            </button>
            <button type="button" className="btn btn-error" onClick={deletePost}>
              Delete Post
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
