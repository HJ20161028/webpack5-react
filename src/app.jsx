import React from "react";
import EditForm from './components/editForm';
import ImagePreview from './components/imagePreview';
import OutlinedButtons from './mui/muiButtons';
import { TimerTest } from './components/timer';
import { FetchTest } from "./components/fetchTest";

export default function App() {
  return <div>
    <TimerTest></TimerTest>
    <FetchTest />
    <EditForm />
    <ImagePreview />
    <OutlinedButtons />
  </div>
}