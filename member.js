function skillsMember() {
  return {
    name: 'skillsMember',
    title: 'Skills',
    description: 'Skills of the member',
    type: 'object',
    properties: {
      skill: {
        type: 'string',
        title: 'Skill',
        description: 'Skill of the member',
      },
      level: {
        type: 'string',
        title: 'Level',
        description: 'Level of the skill',
        enum: ['Beginner', 'Intermediate', 'Expert'],
      },
    },
  };
}