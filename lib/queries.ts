import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      nodes {
        id
        title
        date
        taskFields {
          dueDate
        }
      }
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($title: String!, $dueDate: String) {
    createTask(
      input: {
        title: $title
        taskFields: { dueDate: $dueDate, completed: false }
      }
    ) {
      task {
        id
        title
        taskFields {
          dueDate
          completed
        }
      }
    }
  }
`;

export const UPDATE_TASK_STATUS = gql`
  mutation UpdateTaskStatus($id: ID!, $completed: Boolean!) {
    updateTask(input: { id: $id, taskFields: { completed: $completed } }) {
      task {
        id
        taskFields {
          completed
        }
      }
    }
  }
`;
