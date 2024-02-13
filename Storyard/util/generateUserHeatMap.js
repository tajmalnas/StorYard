/* eslint-disable no-unused-vars */
export const generateUserData = (numUsers, daysOfWeek) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
    const data = [];
  
    for (let i = 0; i < numUsers; i++) {
      const userActivity = days.map(day => ({
        x: day,
        y: Math.floor(Math.random() * 10) // Random number of books read between 0 and 10
      }));
  
      data.push({
        name: `User ${i+1}`,
        data: userActivity
      });
    }
  
    return data;
  };
  