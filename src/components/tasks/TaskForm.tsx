import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { CREATE_TASK } from "../../../lib/queries";

interface TaskFormProps {
  refetchQuery: any;
}

export function TaskForm({ refetchQuery }: TaskFormProps) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskAdded, setTaskAdded] = useState(false);
  const [createTask] = useMutation(CREATE_TASK);

  const handleAddTask = async () => {
    if (!taskTitle.trim()) return;

    try {
      await createTask({
        variables: { title: taskTitle },
        refetchQueries: [{ query: refetchQuery }],
      });
      setTaskTitle("");
      setTaskAdded(true);
      setTimeout(() => setTaskAdded(false), 2000);
    } catch (error) {
      console.error("Failed to add task", error);
    }
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="blue.50">
      <VStack gap="3">
        <Heading as="h3" size="md">
          Add New Task
        </Heading>
        <HStack width="100%">
          <Input
            placeholder="Enter new task..."
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            bg="white"
          />
          <Button
            onClick={handleAddTask}
            colorScheme="blue"
            disabled={!taskTitle.trim()}
          >
            Add Task
          </Button>
        </HStack>
        {taskAdded && <Text color="green.500">Task added successfully!</Text>}
      </VStack>
    </Box>
  );
}
