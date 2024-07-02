import React from 'react';

const ListaDeTarefas = ({ tarefas }) => {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li>{tarefa.text}</li>
      ))}
    </ul>
  );
};

export default ListaDeTarefas;
