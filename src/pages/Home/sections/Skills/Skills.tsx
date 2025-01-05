import React from 'react';
import { Container, Grid2, styled, Typography } from '@mui/material';

import SkillCard from '../../../../Components/SkillCard/SkillCard';

interface Skill {
    name: string;
    level: string;
}

const skills: Skill[] = [
    { name: 'JavaScript', level: 'Beginner' },
    { name: 'React', level: 'Beginner' },
    { name: 'TypeScript', level: 'Beginner' },
    { name: 'Vue', level: 'Beginner' },
    { name: 'Sass', level: 'Intermediate' },
    { name: 'Less', level: 'intermediate' },
    { name: 'Grunt', level: 'beginner'},
    { name: 'HTML', level: 'Intermediate' },
    { name: 'CSS', level: 'Intermediate'}
];

const StyledSkills = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    paddingTop:"40px",
    display:"block",
    textAlign:"center"
}))  

const Skills: React.FC = () => {
    return (
        <StyledSkills>
            <Container maxWidth= 'lg'>
                <Typography variant="h3" gutterBottom color={'secondary'}>
                    Skills
                </Typography>
                <Grid2 container spacing={3}>
                    {skills.map((skill, index) => (
                    <Grid2 key={index} size={{xs:12, sm:6, md:4}}>
                        <SkillCard skill={skill} />
                    </Grid2>
                    ))}
                </Grid2>
            </Container>
        </StyledSkills>
    );
};

export default Skills;
