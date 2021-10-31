import React, { createContext, ReactNode } from "react";

export interface IResponse {
  taskId: string;
  company: string;
  project: string;
  taskName: string;
  priority: string;
  taskDescription: string;
}
export interface ITaskTrackerResponce {
  taskState: IResponse[];
}

export const taskContext = createContext({
  taskState: [],
  setTaskState: (data:any) => {},
});
const { Provider } = taskContext;
interface IProps {
  children?: ReactNode;
}

export default function TaskTrackerContext(props: IProps) {
  const { children } = props;
  const [newtaskState, newsetTaskState] = React.useState<any>([]);
  return (
    <Provider
      value={{
        taskState: newtaskState,
        setTaskState: (data:any) => newsetTaskState(data),
      }}
    >
      {children}
    </Provider>
  );
}
