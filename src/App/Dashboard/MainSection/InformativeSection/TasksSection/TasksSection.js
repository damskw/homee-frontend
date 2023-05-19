import './TasksSection.css'
import InformativeSectionWrapper from "../InformativeSectionWrapper/InformativeSectionWrapper";
import topImage from '../../../../../assets/dashboard/devices_background.jpg'
import TasksContent from "./TasksContent/TasksContent";


const TasksSection = props => {


    return (
        <InformativeSectionWrapper content={<TasksContent/>} topImage={topImage} onImageText=""/>
    )
}


export default TasksSection;
