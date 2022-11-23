import React from 'react'
import About from '../About/About';
import Contact from '../Contact/Contact';
import FeedbackConcerns from '../Feedback/FeedbackConcerns';
import EmployeeTable from '../Tables/EmployeeTable';
import HrTable from '../Tables/HrTable';

interface Props {
    screen: string
}

function Pages(props: Props) {
    const {screen} = props;

console.log('screepages-->', screen);

const handleScreen =() => {

    if(screen == 'Employees') return  <EmployeeTable/>
    else if(screen == 'HR') return <HrTable/>
    else if(screen == 'Contact') return <Contact/>
    else if(screen == 'About Us') return <About/>
    else if(screen == 'Feedback & Concern') return <FeedbackConcerns/>
}
    return (
        <>
        {
            handleScreen()
        }
        
        
        
        </>
    )
}

export default Pages
