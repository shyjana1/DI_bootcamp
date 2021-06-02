import React from 'react';
import BuggyCounter from './Component/BuggyCounter';
import ErrorBoundary from './Component/ErrorBoundary';
function App() {
    return ( 
      <>
​
        <ErrorBoundary>
        <BuggyCounter/>
        <BuggyCounter/>
        </ErrorBoundary>
        <p> These two counters are each inside of their own error boundary.Soif one crashes, the other is not affected. 
        </p> 
          <ErrorBoundary> 
        <BuggyCounter/> 
          </ErrorBoundary>
          <ErrorBoundary> 
          <BuggyCounter/> 
        </ErrorBoundary> 
      </>


    );
}
export default App;