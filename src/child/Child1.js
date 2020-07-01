import React, { useEffect, useState, useRef } from 'react';
import { ThemeContext } from './ThemeContext';

function Clock() {
      return (
            <ThemeContext.Consumer>
                  {
                        ( themes ) => (
                              <React.Fragment>
                                    <div style={{ fontSize: '48px' }}>ct: {themes.light.foreground}</div>
                              </React.Fragment>
                        )}
            </ThemeContext.Consumer>

      );
}


export default Clock;