import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

export default function App() {
  const [resource, setResource] = useState('posts');
  return (
    <div className="ui container">
      <UserList />
      <div>
        <button
          className="ui primary button"
          onClick={() => setResource('posts')}
        >
          Posts
        </button>
        <button
          className="ui green button"
          onClick={() => setResource('todos')}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}
