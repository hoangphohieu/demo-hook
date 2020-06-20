import React, { useEffect, useState, useRef,MyContext } from 'react';

function Clock() {
      const [timeString, setTimeString] = useState(null);
      const intervalRef = useRef(null);
      useEffect(() => {
            intervalRef.current = setInterval(() => {
                  const now = new Date();
                  const hours = `0${now.getHours()}`.slice(-2);
                  const minutes = `0${now.getMinutes()}`.slice(-2);
                  const seconds = `0${now.getSeconds()}`.slice(-2);
                  const currentTimeString = `${hours}:${minutes}:${seconds}`;
                  setTimeString(currentTimeString);
                  console.log('Component Did Mount');
            }, 1000);
            return () => {
                  clearInterval(intervalRef.current);
                  console.log('Component Will Unmount');
            };
      }, []);
      return (
            <MyContext.Consumer>
                  {(context) => (
                        <React.Fragment>
                             
                              <div style={{ fontSize: '48px' }}>{context}</div>
                        </React.Fragment>
                  )}
            </MyContext.Consumer>

      );
}

export default Clock;