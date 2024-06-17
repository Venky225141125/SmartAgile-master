
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import 'tailwindcss/tailwind.css';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList, Label, ResponsiveContainer,
} from 'recharts';


const Tasks = () => {
  return (
    <div className='flex flex-wrap'>
      <TaskList/>
      
      <KanbanBoard/>
      
    </div>
  )
}

const FRUITS = [
  'Task1',
  'Task2',
  'Task3',
  'Task4',
  'Task5',
];

function renderItem({ item, handleRemoveFruit }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} />
    </ListItem>
  );
};


const TaskList=()=> {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
    if (nextHiddenItem) {
      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveFruit = (item) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };
  

  const addTaskButton = (
    <Button
      variant="contained"
      disabled={fruitsInBasket.length >= FRUITS.length}
      onClick={handleAddFruit}
    >
      Add New Task
    </Button>
  );

  return (
    <div>
      <div className='bg-white mt-5 transition-shadow duration-300 hover:shadow-xl w-80'>
      <b className='mr-20'>My Tasks</b>{addTaskButton}
      <List sx={{ mt: 0.5 }}>
        <TransitionGroup>
          {fruitsInBasket.map((item) => (
            <Collapse key={item}>{renderItem({ item, handleRemoveFruit })}</Collapse>
          ))}
        </TransitionGroup>
      </List>
      
      </div>
      <div className='bg-white mt-5 transition-shadow duration-300 hover:shadow-xl w-80 fixed'>
      <ProgressBarChart/>
      </div>
      
    </div>
  );
}

const initialTasks = {
  todo: [
    { id: '1', content: 'Task 1' },
    { id: '2', content: 'Task 2' },
  ],
  inProgress: [],
  done: [],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [newTaskColumn, setNewTaskColumn] = useState('todo');

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceColumn = tasks[source.droppableId];
    const destinationColumn = tasks[destination.droppableId];
    const [movedTask] = sourceColumn.splice(source.index, 1);
    destinationColumn.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destinationColumn,
    });
  };

  const addTask = () => {
    const newTaskId = (Math.max(...Object.values(tasks).flat().map(t => parseInt(t.id, 10))) + 1).toString();
    const newTasks = { ...tasks };
    newTasks[newTaskColumn].push({ id: newTaskId, content: newTask });
    setTasks(newTasks);
    setNewTask('');
  };

  return (
    <div>
      <div className="p-4">
        <input
          type="text"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 mr-2"
        />
        <select
          value={newTaskColumn}
          onChange={(e) => setNewTaskColumn(e.target.value)}
          className="border p-2 mr-2"
        >
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded">Add Task</button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 p-4">
          {Object.keys(tasks).map((columnId) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-100 p-4 rounded-lg shadow-md w-56 h-96"
                >
                  <h2 className="text-lg font-bold mb-4 capitalize">{columnId}</h2>
                  {tasks[columnId].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-2 rounded-lg shadow mb-2"
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};




const data = [
  { name: 'To Do', uv: 5 },
  { name: 'In Progress', uv: 3 },
  { name: 'Done', uv: 8 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-black border p-2 rounded shadow-mds">
        <p>{payload.label}</p>
      </div>
    );
  }

  return null;
};


const ProgressBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{
          top: 20, right: 30, left: 0, bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00BCF2" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#EC008C" stopOpacity={0.8}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name">
          <Label value="Task Status" offset={-10} position="insideBottomRight" />
        </XAxis>
        <YAxis>
          <Label value="Number of Tasks" angle={-90} position="insideLeftBottom" />
        </YAxis>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="uv" fill="url(#colorUv)" barSize={40} radius={[50, 50, 50, 0]}>
          <LabelList dataKey="uv" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
export default Tasks;
