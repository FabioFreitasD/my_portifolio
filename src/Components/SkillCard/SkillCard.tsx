import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Skill {
    name: string;
    level: string;
}

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom>
                    Skill
                </Typography>
                <Typography variant="h5" component="div">
                    {skill.name}
                </Typography>
                <Typography>
                    Level: {skill.level}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SkillCard;
