import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = ({careerData}) => (
    <div className="timeline">
        <VerticalTimeline>
            {careerData.map((data, index) => (
                <VerticalTimelineElement
                    key={index}
                    className={`vertical-timeline-element--${data.className}`}
                    contentStyle={{ background: '#20324598', color: '#fff', boxShadow: '0px 0px 6px #fff' }}
                    date={data.date}
                    iconStyle={data.iconStyle}
                    icon={data.icon}
                >
                    <h3 className="vertical-timeline-element-title">{data.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
                    <p>
                    {data.description}
                    </p>
                </VerticalTimelineElement>
            ))    
            }
        </VerticalTimeline>
    </div> 
)

export default Timeline;