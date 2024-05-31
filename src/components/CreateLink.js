import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateLink.css'
const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $name: String!
    $image: String!
  ) {
    createLink(description: $description, name: $name, image : $image) {
      id
      name
      description
      image
    }
  }
`;




const CreateLink = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    description: '',
    name: '',
    image: ''
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      name: formState.name,
      image: formState.image
    },
    onCompleted: () => navigate('/')
  });


  return (
    <div>
      <form
        onSubmit={(e) => {
          alert("enviando datos...");
          e.preventDefault();
          createLink();

        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Nombre del personaje"
          />

          <textarea
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="Descripcion del personaje"
          />

          <div class='image-container'>
            <input
              className="mb2"
              value={formState.image}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  image: e.target.value
                })
              }
              type="text"
              placeholder="URL de imagen del personaje"
            />
            <div class='img-previsualizacion'>
              <div>Previsualizacion de imagen</div>
              {formState.image && <img className='image' src={formState.image} alt='image' />}

            </div>
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CreateLink;