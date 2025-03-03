import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { format } from "date-fns";
import { UPDATE_TASK_STATUS } from "../../../lib/queries";

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    taskFields: {
      dueDate: string | null;
      completed: boolean;
    };
  };
  refetchQuery: any;
}

export function TaskItem({ task, refetchQuery }: TaskItemProps) {
  const [isCompleted, setIsCompleted] = useState(task.taskFields.completed);
  const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS);

  const handleToggleCompletion = async () => {
    try {
      await updateTaskStatus({
        variables: { id: task.id, completed: !isCompleted },
        refetchQueries: [{ query: refetchQuery }],
      });
      setIsCompleted(!isCompleted);
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
  };

  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg={isCompleted ? "green.600" : "gray.700"}
      color="white"
    >
      <Heading as="h2" size="md">
        {task.title}
      </Heading>
      <Text>
        Due:{" "}
        {task.taskFields.dueDate
          ? format(new Date(task.taskFields.dueDate), "MMMM d, yyyy")
          : "No due date"}
      </Text>
      <Button
        mt={3}
        colorScheme={isCompleted ? "red" : "blue"}
        onClick={handleToggleCompletion}
      >
        {isCompleted ? "Mark as Incomplete" : "Mark as Completed"}
      </Button>
    </Box>
  );
}
